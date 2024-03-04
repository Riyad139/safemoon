"use client";
import { BiLogoTelegram } from "react-icons/bi";
import useTypingEffect from "@/hooks/useTypingEffect";
import { FaXTwitter } from "react-icons/fa6";

export default function Headers() {
  const headerText = useTypingEffect("SAFEMOON");
  return (
    <div className="w-full  px-5 text-center pt-28  min-h-screen sm:pt-48">
      <div>
        <h2 className=" text-6xl sm:text-8xl font-bold">{headerText}</h2>
        <p className="text-2xl uppercase pt-9">
          New Bullrun • New Safemoon • Same Mission
        </p>
        <div className="flex justify-center gap-5">
          <button className="uppercase bg-[#FCFC03] text-black px-3 py-1.5 rounded-sm text-xl  mt-8 ">
            <BiLogoTelegram size={30} />
          </button>
          <button className="uppercase bg-[#FCFC03] text-black px-3 py-1.5 rounded-sm text-xl  mt-8 ">
            <FaXTwitter size={30} />
          </button>
        </div>
      </div>
      <div className="relative mt-[95%] sm:mt-[45%] md:mt-[35%] lg:mt-[25%]">
        <div className="mb-5 max-w-fit  mx-auto relative  px-2 text-2xl xl:text-6xl py-5 bg-[#FCFC03]  text-black ">
          <p className="font-semibold">Contract adress</p>
          <p className=" text-sm sm:text-xl xl:text-3xl">
            EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g
          </p>
        </div>
        <div className="mb-5 max-w-fit  mx-auto relative  px-2 text-2xl xl:text-6xl py-5 bg-[#FCFC03]  text-black ">
          <p className="font-semibold">Lp Burnt</p>
          <p className=" text-sm sm:text-xl xl:text-3xl">
            EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g
          </p>
        </div>
      </div>
    </div>
  );
}
