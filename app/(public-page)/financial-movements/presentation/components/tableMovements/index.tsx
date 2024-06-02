"use client";
import React from "react";
import dayjs from "dayjs";
import { Checkbox } from "../checkbox";
import { FaEye } from "react-icons/fa";
import es from "dayjs/locale/es";
import { MovementViewModel } from "../../../domain/entities/Movement.entity";
import { SiGroupon, SiMercadopago, SiNaver } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";

export interface Props {
  data: MovementViewModel[];
}

export const TableMovements = ({ data }: Props): JSX.Element => {
  dayjs.locale(es);
  const [isPaid, setIsPaid] = React.useState(true);
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
      case "Efectivo":
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
    <div className=" px-5">
      <Checkbox onChange={handleFilterChange} label="Ver pendientes" />
      {data.map((item: any) => (
        <div key={item.month} className="my-4">
          {item.data.some((item: any) => item.paid === isPaid) && (
            <h1 className="text-xl font-bold">
              {dayjs(item.month).format("DD MMMM YYYY")}{" "}
            </h1>
          )}
          {item.data
            .filter((item: any) => item.paid === isPaid)
            .map((movement: any) => (
              <div
                key={movement.id}
                className="my-2 pr-4 flex justify-between items-center bg-slate-600"
              >
                <span className="flex items-center">
                  {getIconType(movement.account)}
                  <p className="ml-5">{movement.category}</p>

                </span>
                <span className="flex items-center">
                  <p className="mr-2">{movement.currency}</p>
                  <p className={`my-2 ml-1 ${movement.type === 'Gasto'?' text-red-400':' text-green-400'}`}>
                    {`${movement.type === 'Gasto'?'-':''} ${movement.amount.toLocaleString("es-AR")}`}
                  </p>
                </span>
                {/* <FaEye className="" /> */}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
