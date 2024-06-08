"use client";
import React from "react";
import dayjs from "dayjs";
import { Checkbox } from "../checkbox";
import es from "dayjs/locale/es";
import {
  MovementBalanceViewModel,
  MovementEntity,
} from "../../../domain/entities/Movement.entity";
import { SiGroupon, SiMercadopago, SiNaver } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";
import { MdAccessibilityNew, MdCancel } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddUpdateMovement from "../addUpdateMovement/AddUpdateMovement";
import { IoIosAddCircle } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";
export interface Props {
  data: MovementBalanceViewModel;
  dolarBlue: any;
}

export const TableMovements = ({ data, dolarBlue }: Props): JSX.Element => {
  console.log(data);
  dayjs.locale(es);
  const [isPaid, setIsPaid] = React.useState(true);
  const [showByAccount, setShowByAccount] = React.useState(false);
  const [showBalace, setShowBalace] = React.useState(false);
  const [movementSelected, setMovementSelected] =
    React.useState<MovementEntity | null>(null);
  const [activeForm, setActiveForm] = React.useState(false);
  const [activeEdit, setActiveEdit] = React.useState(false);
  const handleFilterChange = (value: boolean) => {
    setIsPaid(value);
  };

  const getIconType = (type: string) => {
    switch (type) {
      case "Mercado Pago":
        return (
          <SiMercadopago
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#027ffc" }}
          />
        );
      case "Efectivo Fer":
        return (
          <BsCashStack
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#0f8005" }}
          />
        );
      case "Efectivo Ely":
        return (
          <BsCashStack
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#0f8005" }}
          />
        );
      case "Banco Galicia":
        return (
          <SiGroupon
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#fc7702" }}
          />
        );
      case "Tarjeta Naranja":
        return (
          <SiNaver
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#dd9400" }}
          />
        );
      default:
        return (
          <MdAccessibilityNew
            size={40}
            className="ml-5 bg-white p-[3px] rounded-[10px]"
            style={{ fill: "#fc0202" }}
          />
        );
    }
  };
  return (
    <>
      {activeForm ? (
        <AddUpdateMovement
          movement={movementSelected}
          setMovementSelected={setMovementSelected}
          setActiveForm={setActiveForm}
        />
      ) : (
        <div className=" px-5">
          <div>
            <div className=" w-full text-center border-b-2 mt-2 border-blue-400 pb-3">
              Balances{" "}
              <span
                className=" p-2 ml-5 bg-green-800 rounded-sm cursor-pointer"
                onClick={() => setShowBalace(!showBalace)}
              >
                {`${showBalace ? "Ocultar" : "Ver"}`} balances
              </span>
            </div>
            {showBalace && (
              <>
                <div className="border-b-2 border-t-2 pt-2 pb-2 border-blue-600">
                  <span className="pb-5">
                    Almacen + Carniceria + Verduleria = $
                    {(
                      (data.expensiveByCategory["Almacen"] +
                        data.expensiveByCategory["Verduleria"] +
                        data.expensiveByCategory["Carniceria"]) *
                      -1
                    ).toLocaleString("es-AR")}
                  </span>
                </div>
                <div className="flex justify-between flex-col border-t p-2 border-blue-400 pb-3">
                  <span className="pt-2 pb-2">
                    {`Plata en total $ ${data.balanceArPaid.toLocaleString(
                      "es-AR"
                    )} `}
                    <span
                      onClick={() => setShowByAccount(!showByAccount)}
                      className="p-2 text-gray-100 bg-green-800 ml-2 rounded-md cursor-pointer"
                    >
                      {`${showByAccount ? "Ocultar" : "Ver"}`} por cuentas
                    </span>
                  </span>
                  {showByAccount && (
                    <>
                      <div className=" p-1 pl-5">
                        Banco Galicia: ${" "}
                        {data.stateCompleted.bancoGalicia.toLocaleString(
                          "es-AR"
                        )}
                      </div>
                      <div className=" p-1 pl-5">
                        Mercado Pago: ${" "}
                        {data.stateCompleted.mercadoPago.toLocaleString(
                          "es-AR"
                        )}
                      </div>
                      <div className=" p-1 pl-5">
                        Tarjeta Naranja: ${" "}
                        {data.stateCompleted.tarjetaNaranja.toLocaleString(
                          "es-AR"
                        )}
                      </div>
                      <div className=" p-1 pl-5">
                        Efectivo Ely: ${" "}
                        {data.stateCompleted.efectivoEly.toLocaleString(
                          "es-AR"
                        )}
                      </div>
                      <div className="p-1 pl-5">
                        Efectivo Fer: ${" "}
                        {data.stateCompleted.efectivoFer.toLocaleString(
                          "es-AR"
                        )}
                      </div>
                      <div className="p-1 pl-5 bg-blue-800 w-auto">
                        total: $ {data.balanceArPaid.toLocaleString("es-AR")}
                      </div>
                    </>
                  )}
                </div>
                <div className="border-t p-2 border-blue-400 pb-3">
                  Dolares en total USD{" "}
                  {`${data.balanceUSDPaid.toLocaleString("es-AR")}`}
                  <div>{`(dolar: $ ${dolarBlue} => ${(
                    dolarBlue * data.balanceUSDPaid
                  ).toLocaleString("es-AR")})`}</div>
                </div>

                <div className="flex justify-start items-center border-t p-2 border-blue-400 pb-3">
                  Pendiente ARS: {data.balanceAr.toLocaleString("es-AR")}
                  <Checkbox
                    onChange={handleFilterChange}
                    label="Ver pendientes"
                  />{" "}
                </div>
                <div className="border-t p-2 border-blue-400 pb-3">
                  Pendiente USD:{`${data.balanceUSD.toLocaleString("es-AR")}`}
                  <div>{`(dolar: $ ${dolarBlue} => ${(
                    dolarBlue * data.balanceUSD
                  ).toLocaleString("es-AR")})`}</div>
                </div>
                <div className="border-b-2 border-t-2 pt-2 pb-2 border-blue-600">
                  <span className="pb-5">Movimientos por categoria</span>
                  <div className="flex max-w-[100%] overflow-auto pb-5">
                    {Object.keys(data.expensiveByCategory).map((key) => (
                      <div
                        key={key}
                        className=" bg-amber-900 p-3 ml-2 mr-2 whitespace-nowrap"
                      >
                        <span>{key}</span>
                        <span>
                          {` $${data.expensiveByCategory[key].toLocaleString(
                            "es-AR"
                          )}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center"></div>
          {data.movements.map((item: any) => (
            <div key={item.month} className="my-4">
              {item.data.some((item: any) => item.paid === isPaid) && (
                <h1 className="text-xl font-bold">
                  {dayjs(item.month).format("DD MMMM YYYY")}{" "}
                </h1>
              )}
              {item.data
                .filter((item: any) => item.paid === isPaid)
                .map((movement: MovementEntity) => (
                  <div
                    key={movement.id}
                    className="my-2 pr-4 flex justify-between items-center bg-slate-600"
                  >
                    <span className="flex items-center">
                      <span className="w-[50px]">
                        {getIconType(movement.account)}
                      </span>
                      <p className={`ml-5 `}>{movement.category}</p>
                    </span>
                    <p
                      className={` text-left ml-1 text-[10px] w-full text-ellipsis overflow-auto`}
                    >
                      {movement.description}
                    </p>
                    <span className="flex items-center whitespace-nowrap">
                      <p
                        className={`my-2 ml-1 ${
                          movement.type === "Gasto"
                            ? "  text-red-400"
                            : " text-green-400"
                        }`}
                      >
                        {movement.currency}
                      </p>
                      <p
                        className={`my-2 ml-1 ${
                          movement.type === "Gasto"
                            ? "  text-red-400"
                            : " text-green-400"
                        }`}
                      >
                        {`${
                          movement.type === "Gasto" ? "-" : ""
                        }${movement.amount.toLocaleString("es-AR")}`}
                      </p>
                      {activeEdit && (
                        <FaEdit
                          className="ml-3"
                          onClick={() => {
                            setMovementSelected(movement);
                            setActiveForm(!activeForm);
                          }}
                        />
                      )}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
      {!activeForm && (
        <div className=" flex justify-center items-start fixed bottom-0 w-full  h-[50px] bg-slate-800 ml-[0px]">
          <VscEdit
            onClick={() => setActiveEdit(!activeEdit)}
            size={80}
            className="mt-[-40px] bg-slate-600 rounded-full p-2 mr-20 border-2 border-white"
          />
          <IoIosAddCircle
            onClick={() => {
              setActiveForm(!activeForm);
            }}
            size={90}
            className="mt-[-45px] bg-slate-600 rounded-full border-[0px] border-white"
          />
        </div>
      )}
    </>
  );
};
