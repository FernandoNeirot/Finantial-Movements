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
    balanceUSD: calcBalance(movements,'USD',false)
  }
  return response
};

// export const getBalance =(movements: MovementViewModel[])=>{
//   const balanceArPaid = calcBalance(movements,'$',true)
//   const balanceUSDPaid = calcBalance(movements,'USD',true)
//   const balanceAr = calcBalance(movements,'$',false)
//   const balanceUSD = calcBalance(movements,'USD',false)
// }

export const calcBalance =(movements:MovementBalanceEntity[],currency:string,paid:boolean)=>{
  return movements.filter(item=>item.currency === currency && item.paid ===paid).reduce((acc, item) => {
    if (item.type === "Gasto") {
      return acc - item.amount;
    }
    return acc + item.amount;
  }, 0);
}
