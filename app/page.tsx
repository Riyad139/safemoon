import Headers from "@/components/Headers";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="text-white min-h-screen relative   ">
      <Image
        src={"/bag.gif"}
        width={500}
        className="min-h-[100%] -z-50 brightness-75 absolute  min-w-[100%] object-cover"
        height={500}
        alt="background"
      />
      <Headers />
    </main>
  );
}
