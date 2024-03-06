"use client";
import { BiLogoTelegram } from "react-icons/bi";
import useTypingEffect from "@/hooks/useTypingEffect";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Headers() {
  return (
    <div className="w-full  px-5 text-center pt-28  min-h-screen sm:pt-48">
      <div className="relative mt-[140%] sm:mt-[68%] md:mt-[53%] lg:mt-[40%]">
        <div className="flex mb-7 justify-center gap-4">
          <Link
            target="_blank"
            href={"#"}
            className="uppercase bg-[#FCFC03] text-black px-5 py-2 rounded-sm text-5xl  mt-8 "
          >
            Buy
          </Link>
          <Link
            target="_blank"
            href={"#"}
            className="uppercase bg-[#FCFC03] text-black px-5 py-2  text-5xl rounded-sm   mt-8 "
          >
            chart
          </Link>
        </div>
        <div className="mb-5 max-w-fit  mx-auto relative  px-2 text-2xl xl:text-6xl py-5 bg-[#FCFC03]  text-black ">
          <p className="font-semibold">Contract adress</p>
          <p className=" text-sm sm:text-xl xl:text-3xl">
            EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g
          </p>
        </div>
      </div>
    </div>
  );
}
