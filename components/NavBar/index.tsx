import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center mx-5 sm:mx-16 md:mx-32 justify-between">
      <Image
        src={"/logo.png"}
        className="w-16"
        alt="logo"
        width={500}
        height={500}
      />
      <button className="uppercase bg-[#FCFC03] text-black px-5 py-3 text-xl  mt-8 ">
        Buy
      </button>
    </div>
  );
}
