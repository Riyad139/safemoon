import Headers from "@/components/Headers";
import TheMoonAnimation from "@/utils/MoonAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white w-full min-h-screen relative">
      <div className="absolute -z-40 w-full h-full">
        <TheMoonAnimation />
        <Image
          src={"/moon.png"}
          alt="moon"
          width={500}
          height={500}
          quality={100}
          className="w-[100%] h-full object-cover absolute -z-50 "
        />
      </div>
      <Headers />
    </main>
  );
}
