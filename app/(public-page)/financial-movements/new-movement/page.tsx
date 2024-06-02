"use client";

import SelectCustom from "@/app/share/components/SelectCustom";
import React from "react";
import DatePicker from "react-datepicker";
import { categories } from "./mock";
import "react-datepicker/dist/react-datepicker.css";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { MdAccessibilityNew, MdCancel, MdCheckCircle } from "react-icons/md";
import { AddMovement } from "../application/post/getAllMovements";
import dayjs from "dayjs";
import { BsCashStack } from "react-icons/bs";
import { SiGroupon, SiMercadopago, SiNaver } from "react-icons/si";

interface Option {
  value: string | number | boolean;
  label: string;
}

export default function NewMovement() {
  const [account, setAccount] = React.useState({
    value: "Efectivo",
    label: "Efectivo",
  });
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState<Option | null>(null);
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState({
    value: "Gasto",
    label: "Gasto",
  });
  const [paid, setPaid] = React.useState({
    value: true,
    label: "Si",
  });
  const [currency, setCurrency] = React.useState({
    value: "$",
    label: "$",
  });

  const [submit, setSubmit] = React.useState(false)

  const handleChangeAmount = (value: string) => {
    const newValue: number = Number(value.replace(/\D/g, ""));
    setAmount(newValue.toLocaleString("es-AR"));
  };

  const validateForm = () => {
    if (
      !account ||
      !amount ||
      !category ||
      !date ||
      !description ||
      !type ||
      !paid ||
      !currency
    ) {
      return false;
    }
    return true;
  };

  const handleAdd = async() => {
    setSubmit(true)
    if (validateForm()) {
      const response:boolean = await AddMovement({
        category:category?.value as string,
        account: account.value,
        amount: Number(amount.replace(/\D/g, "")),
        currency: currency.value,
        date: dayjs(date).format("YYYY-MM-DD"),
        description,
        paid: paid.value,
        type: type.value,
      })
      if(response){
        window.location.href = "/financial-movements"
      }
    } 
  }
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
    <div className=" w-full flex justify-center pb-[75px]">
      <form className=" w-full max-w-[900px]">
        <div className="flex justify-start flex-col m-5">
          <label>Fecha</label>
          <DatePicker
            withPortal
            portalId="root-portal"
            className="text-gray-700 p-1 pl-3 rounded-l w-full rounded-[5px]"
            selected={date}
            name={"test"}
            placeholderText={"Seleccione una fecha"}
            dateFormat="dd/MM/yyyy"
            onChange={(update) => {
              console.log(update);
              if (update) setDate(update);
            }}
          />
        </div>
        <div className="flex justify-start flex-col m-5">
          <SelectCustom
            label="Tipo de cuenta"
            value={account}
            placeHolder="Seleccionar"
            setValue={setAccount}
            options={[
              "Efectivo",
              "Banco Galicia",
              "Tarjeta Naranja",
              "Mercado Pago",
            ].map((account: string) => ({
              value: account,
              label: `${account}`,
            }))}
          />
        </div>
        <div className="flex justify-start flex-col m-5">
          <SelectCustom
            label="Categoria"
            value={category}
            placeHolder="Seleccionar"
            setValue={setCategory}
            options={categories.map((category: string) => ({
              value: category,
              label: category,
            }))}
          />
          {
            submit && !category && <p className="text-red-500">Campo requerido</p>
          }
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Descripcion</label>
          <input
            className=" text-gray-700 p-1 pl-3  rounded-[5px]"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {
            submit && !description && <p className="text-red-500">Campo requerido</p>
          }
        </div>
        <div className="flex flex-col justify-start  m-5">
          <div className="flex">

          <div className="flex w-[150px]">
            <SelectCustom
              label="Moneda"
              value={currency}
              placeHolder="Seleccionar"
              setValue={setCurrency}
              options={["USD", "$"].map((currency: string) => ({
                value: currency,
                label: currency,
              }))}
            />
          </div>
          <div className="flex justify-start flex-col w-full">
            <label>Monto</label>
            <input
              className=" text-gray-700 p-[9px] pl-4 rounded-l"
              type="text"
              value={amount}
              onChange={(e) => handleChangeAmount(e.target.value)}
            />
            
          </div>
          </div>
          {
            submit && !amount && <p className="text-red-500">Campo requerido</p>
          }
        </div>
        <div className="flex justify-start flex-col m-5">
          <SelectCustom
            label=" Ingreso / Gasto"
            value={type}
            placeHolder="Seleccionar"
            setValue={setType}
            options={["Ingreso", "Gasto"].map((account: string) => ({
              value: account,
              label: account,
            }))}
          />
        </div>
        <div className="flex justify-start flex-col m-5">
          <SelectCustom
            label="Pagado"
            value={paid}
            placeHolder="Seleccionar"
            setValue={setPaid}
            options={[
              {
                value: true,
                label: "Si",
              },
              {
                value: false,
                label: "No",
              },
            ]}
          />
        </div>
      </form>
      <div className=" flex justify-center items-start fixed bottom-0 w-full  h-[40px] bg-slate-800">
        <Link href={"/financial-movements"} className="flex items-center">
          <MdCancel size={50} className="mt-[-25px] bg-red-400 rounded-full" />
        </Link>
        <div className="w-[80px]"></div>
        <div onClick={handleAdd} className="flex items-center cursor-pointer">
          <MdCheckCircle
            size={50}
            className="mt-[-25px] bg-green-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
