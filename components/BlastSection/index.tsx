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
          Blast your projects with our All-in-one tool
        </h3>
        <p className="mt-7 text-base sm:text-xl">
          Introducing the most comprehensive DEX on BLAST! {"We've"} built a
          user-friendly platform that empowers anyone to launch their projects
          on this blockchain without the need for programming skills. Your
          project, your way <br /> – unleash your creativity effortlessly with
          our all-inclusive DEX.
        </p>
      </div>
    </div>
  );
}
