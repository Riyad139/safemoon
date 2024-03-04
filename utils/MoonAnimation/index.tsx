"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
export default function TheMoonAnimation() {
  return (
    <div className="w-full ">
      <Spline
        className="-z-30 absolute"
        scene="https://prod.spline.design/aY63NfAHCZjF1sm8/scene.splinecode"
      />
    </div>
  );
}
