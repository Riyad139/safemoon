"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
export default function TheMoonAnimation() {
  return (
    <div className="w-full h-full ">
      <Spline scene="https://prod.spline.design/V-gLmuZzOhHTDX0R/scene.splinecode" />
    </div>
  );
}
