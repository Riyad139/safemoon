import Headers from "@/components/Headers";
import TheMoonAnimation from "@/utils/MoonAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white w-full min-h-screen relative">
      <div className="absolute -z-40 w-full h-full">
        <TheMoonAnimation />
      </div>
      <Headers />
    </main>
  );
}
