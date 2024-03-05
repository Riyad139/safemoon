import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex  mx-5 items-center sm:mx-16 md:mx-32 justify-between">
      <Image
        src={"/logo.png"}
        className="w-16"
        alt="logo"
        width={500}
        height={500}
      />
    </div>
  );
}
