"use client";
import { BiLogoTelegram } from "react-icons/bi";
import useTypingEffect from "@/hooks/useTypingEffect";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Headers() {
  const headerText = useTypingEffect("SAFEMOON");
  return (
    <div className="w-full  px-5 text-center pt-28  min-h-screen sm:pt-48">
      <div className="">
        <h2 className=" text-6xl mt-28 sm:text-8xl font-bold">{headerText}</h2>
        <p className="text-2xl uppercase pt-9">
          New Bullrun • New Safemoon • Same Mission
        </p>
        <div className="flex justify-center gap-5">
          <Link
            target="_blank"
            href={"https://t.me/SafemoonComeback"}
            className="uppercase bg-[#FCFC03] text-black px-3 py-1.5 rounded-sm text-xl  mt-8 "
          >
            <BiLogoTelegram size={30} />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/safemoonsol2024?s=21&t=omkKmJifOvtNJO3oM38jiw"}
            className="uppercase bg-[#FCFC03] text-black px-3 py-1.5 rounded-sm text-xl  mt-8 "
          >
            <FaXTwitter size={30} />
          </Link>
        </div>
      </div>
      <div className="relative mt-[50%] sm:mt-[45%] md:mt-[35%] lg:mt-[23%]">
        <div className="flex mb-7 justify-center gap-4">
          <Link
            target="_blank"
            href={
              "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=3QqNqKFtuiELbf52S4DojskswWzGzuvS3JvHf7CTZ8Xa&fixed=in"
            }
            className="uppercase bg-[#FCFC03] text-black px-5 py-2 rounded-sm text-5xl  mt-8 "
          >
            Buy
          </Link>
          <Link
            target="_blank"
            href={
              "https://birdeye.so/token/3QqNqKFtuiELbf52S4DojskswWzGzuvS3JvHf7CTZ8Xa?chain=solana"
            }
            className="uppercase bg-[#FCFC03] text-black px-5 py-2  text-5xl rounded-sm   mt-8 "
          >
            chart
          </Link>
        </div>
        <div className="mb-5 max-w-fit  mx-auto relative  px-2 text-2xl xl:text-6xl py-5 bg-[#FCFC03]  text-black ">
          <p className="font-semibold">Contract adress</p>
          <p className=" text-sm sm:text-xl xl:text-3xl">
            FF6t6fY6CCVxcfvgJPJ5v7fzcgt3uV8hAoESZzpGrGYB
          </p>
        </div>
      </div>
    </div>
  );
}
