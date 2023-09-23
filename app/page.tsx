import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen  p-24">
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl"></div>
      {/* <input className="text-white bg-gradient-to-br from-[#ffffffbb] to-[#ffffffbb]"></input> */}
    </main>
  );
}
