import TheMoonAnimation from "@/utils/MoonAnimation";
import Headers from "../Headers";
export default function HeaderSections() {
  return (
    <main className="text-white w-full min-h-screen relative">
      <div className="absolute -z-40 w-full h-full">
        <TheMoonAnimation />
      </div>
      <Headers />
    </main>
  );
}
