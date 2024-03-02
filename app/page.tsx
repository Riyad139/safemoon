import Headers from "@/components/Headers";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="text-white min-h-screen relative   ">
      <video
        src="/bag.mp4"
        className="min-h-[100%] -z-50 brightness-75 absolute  min-w-[100%] object-cover"
        autoPlay
        muted
        loop
      />
      {/* <div className="flex justify-between px-10 py-8">
        <div className="flex space-x-5">
          <p className="border-r px-3">90 queen St melbounce</p>
          <p className="border-r px-3">+1-202-555-0192</p>
          <p>info@email</p>
        </div>
        <div className="flex space-x-5 text-xl">
          <FaFacebook />
          <FaLinkedin />
          <FaXTwitter />
        </div>
      </div> */}
      <Headers />
    </main>
  );
}
