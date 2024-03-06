"use client";
import TheMoonAnimation from "@/utils/MoonAnimation";
import Headers from "../Headers";
import useTypingEffect from "@/hooks/useTypingEffect";
export default function HeaderSections() {
  const headerText = useTypingEffect("SAFEMOON");
  return (
    <main className="text-white w-full min-h-screen relative">
      <div className="absolute  -top-[10%] -z-40 w-full h-full">
        <h2 className=" text-6xl top-[38%] absolute z-40 left-[50%] -translate-x-[50%] -translate-y-[50%] mt-28 sm:text-8xl font-bold">
          {headerText}
        </h2>
        <TheMoonAnimation />
      </div>
      <Headers />
    </main>
  );
}
