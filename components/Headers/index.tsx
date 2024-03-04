"use client";

import useTypingEffect from "@/hooks/useTypingEffect";

export default function Headers() {
  const headerText = useTypingEffect("SAFEMOON");
  return (
    <div className="w-full px-5 text-center pt-28 sm:pt-48">
      <h2 className="text-8xl font-bold">{headerText}</h2>
      <p className="text-2xl pt-9">NEW BULL RUN • SAME MISSION • NEW TEAM</p>
      <button className="uppercase bg-[#FCFC03] text-black px-5 py-3 text-xl  mt-8 ">
        Launch App
      </button>
    </div>
  );
}
