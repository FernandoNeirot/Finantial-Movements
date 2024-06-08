import dayjs from "dayjs";
import { MovementBalanceEntity, MovementBalanceViewModel, MovementEntity, MovementViewModel } from "../entities/Movement.entity";

export const createGroupMonth = (movements: MovementEntity[]):MovementBalanceViewModel => {
  const groupedData = movements
    .sort((a: MovementEntity, b: MovementEntity) => {
      return dayjs(b.date).diff(dayjs(a.date));
    })
    .reduce((map, item) => {
      const month = dayjs(item.date).format("YYYY-MM-DD");
      if (!map.has(month)) {
        map.set(month, []);
      }

      map.get(month).push({
        ...item,
      });
      return map;
    }, new Map());
  const response = {
    movements: Array.from(groupedData ?? [], ([month, data]) => ({ month, data })),
    balanceArPaid: calcBalance(movements,'$',true),
    balanceUSDPaid: calcBalance(movements,'USD',true),
    balanceAr: calcBalance(movements,'$',false),
    balanceUSD: calcBalance(movements,'USD',false),
    stateCompleted: calcState(movements)
  }
  return response
};

export const calcBalance =(movements:MovementBalanceEntity[],currency:string,paid:boolean)=>{
  return movements.filter(item=>item.currency === currency && item.paid ===paid).reduce((acc, item) => {
    if (item.type === "Gasto") {
      return acc - item.amount;
    }
    return acc + item.amount;
  }, 0);
}

export const calcState =(movements:MovementEntity[])=>{
  let bancoGalicia = 0
  let mercadoPago = 0
  let efectivoFer=0
  let efectivoEly=0
  let tarjetaNaranja=0
  movements.filter(item=>item.paid).forEach((item:MovementEntity)=>{
      if(item.account === "Banco Galicia"){
        bancoGalicia = bancoGalicia + (item.type !=="Gasto" ? item.amount : -item.amount);
      }
      if(item.account === "Mercado Pago"){
        mercadoPago = mercadoPago + (item.type !=="Gasto"? item.amount : -item.amount);
      }
      if(item.account === "Efectivo Fer"){
        efectivoFer = efectivoFer + (item.type !=="Gasto"? item.amount : -item.amount);
      }
      if(item.account === "Efectivo Ely"){
        efectivoEly = efectivoEly + (item.type !=="Gasto"? item.amount : -item.amount);
      }
      if(item.account === "Tarjeta Naranja"){
        tarjetaNaranja = tarjetaNaranja + (item.type !=="Gasto"? item.amount : -item.amount);
      }
  })
  return {
    bancoGalicia,
    mercadoPago,
    efectivoFer,
    efectivoEly,
    tarjetaNaranja
  }
}
