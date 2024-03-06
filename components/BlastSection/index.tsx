import RoundAnimation from "@/utils/RoundAnimation";
import Image from "next/image";

export default function BlastSection() {
  return (
    <div className="text-white w-full min-h-[50vh] relative">
      <div className="absolute flex justify-center h-full w-full -z-20">
        <Image
          src={"/donut.gif"}
          className=" object-cover h-full"
          width={500}
          height={500}
          alt=""
        />
      </div>

      <div className="uppercase max-w-[60rem] relative px-5 text-center mx-auto py-36 text-white">
        <h3 className=" text-4xl sm:text-6xl border-t-4 pt-11 font-semibold">
          it’s Solana meme coin season
        </h3>
        <p className="mt-7 text-base sm:text-xl text-left">
          If it’s your first time back to crypto since 2021 : Solana in this
          bull run is like what BNB was last bull run <br />
          <br />
          Safemoon was the biggest Memecoin with a 17Billion $ Market cap before
          it went to 0 <br />
          <br />
          Our goal is to surpass the success of the old Safemoon.
          <br />
          <br />
          LP BURNT 🔥 Contract Renounced 🔐
        </p>
      </div>
    </div>
  );
}
