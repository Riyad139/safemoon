"use client";

import useTypingEffect from "@/hooks/useTypingEffect";

export default function Headers() {
  const headerText = useTypingEffect("SAFEMOON");
  return (
    <div className="w-full px-5 text-center pt-28 sm:pt-48">
      <h2 className="text-6xl font-bold">{headerText}</h2>
      <p className="text-xl pt-9">NEW BULL RUN • SAME MISSION • NEW TEAM</p>

      {/* <div className="uppercase space-x-9 flex w-full  justify-center mt-44">
        <div>
          <p className="text-5xl font-semibold">00</p>
          <p>Days</p>
        </div>
        <div>
          <p className="text-5xl font-semibold">00</p>
          <p>Hours</p>
        </div>
        <div>
          <p className="text-5xl font-semibold">00</p>
          <p>minutes</p>
        </div>
        <div>
          <p className="text-5xl font-semibold">00</p>
          <p>second</p>
        </div>
      </div> */}
      {/* <div className="flex justify-center mt-28 space-x-16">
        <div className="border-r py-3 px-5">
          <p className="text-3xl font-semibold">Web development</p>
          <p className="text-xl">Lorem ipsum dolor sit amet dolor sit amet </p>
          <p className="text-xl">Lorem ipsum dolor sit </p>
        </div>
        <div className="border-r py-3 px-5">
          <p className="text-3xl font-semibold">App Mobile Design</p>
          <p className="text-xl">Lorem ipsum dolor sit amet dolor sit amet </p>
          <p className="text-xl">Lorem ipsum dolor sit </p>
        </div>
        <div className=" py-3 px-5">
          <p className="text-3xl font-semibold">Cloud Security</p>
          <p className="text-xl">Lorem ipsum dolor sit amet dolor sit amet </p>
          <p className="text-xl">Lorem ipsum dolor sit </p>
        </div>
      </div> */}
    </div>
  );
}
