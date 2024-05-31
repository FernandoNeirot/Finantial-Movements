
import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" flex justify-center items-start fixed bottom-0 w-full  h-[40px] bg-slate-800">
      <Link
        href={"/financial-movements/new-movement"}
        className="flex items-center"
      >
        <IoIosAddCircle
          size={50}
          className="mt-[-25px] bg-slate-600 rounded-full"
        />
      </Link>
    </div>
  );
};
