"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
export default function TheMoonAnimation() {
  return (
    <div>
      <Image
        src={"/moon.png"}
        alt="moon"
        width={500}
        height={500}
        quality={100}
        className="w-full absolute -z-50 h-full"
      />
      <Spline
        className="-z-30 absolute"
        scene="https://prod.spline.design/aY63NfAHCZjF1sm8/scene.splinecode"
      />
    </div>
  );
}
