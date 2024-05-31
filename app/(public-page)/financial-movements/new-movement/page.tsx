'use client';

import SelectCustom from "@/app/share/components/SelectCustom";
import React from "react";
import Select from "react-select"
import { categories } from "./mock";
export default function NewMovement() {
  const [account, setAccount] = React.useState("")
  const [amount, setAmount] = React.useState("")
  console.log(amount)
  const [category, setCategory] = React.useState("")
  const [date, setDate] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [type, setType] = React.useState("")
  const [paid, setPaid] = React.useState("")
  const [currency, setCurrency] = React.useState("")

  return (
    <div>
      <form>
        <div className="flex justify-start flex-col m-5">
                <SelectCustom
                  label="Categoria"
                  value={category}
                  placeHolder="Seleccionar SI o NO"
                  setValue={setCategory}
                  options={categories.map((category:string)=>(
                    { value: category, label: category}
                  ) )}
                />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex justify-start flex-col m-5">
          <label>Amount</label>
          <input className=" text-gray-700 p-1 pl-3 rounded-l" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
      </form>
    </div>
  );
}
