"use client";
import React from "react";
import dayjs from "dayjs";
import { Checkbox } from "../checkbox";
import { FaEye } from "react-icons/fa";
import es from "dayjs/locale/es";
import { IoIosAddCircle } from "react-icons/io";
export interface MovementViewModel {
  month: string;
  movements: Movement[];
}

export interface Movement {
  account: string;
  type: string;
  description: string;
  currency: string;
  category: string;
  paid: boolean;
  date: string;
  amount: number;
  id: string;
  hola: boolean;
}

export const TableMovements = ({ movements }: MovementViewModel) => {
  dayjs.locale(es);
  const [isPaid, setIsPaid] = React.useState(true);

  const handleFilterChange = (value: boolean) => {
    setIsPaid(value);
  };
  return (
    <div className=" px-5">
      <Checkbox onChange={handleFilterChange} label="Ver pendientes" />
      {movements.map((item: any) => (
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
                <p className="mx-2">{movement.category}</p>
                <p className="">{movement.currency}</p>
                <p className="my-2 ml-1">
                  {movement.amount.toLocaleString("es-AR")}
                </p>
                <p className="">{movement.account}</p>
                <FaEye className="" />
              </div>
            ))}
        </div>
      ))}      
    </div>
  );
};
