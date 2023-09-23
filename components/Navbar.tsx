import Link from "next/link";
import * as React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav className="flex items-center justify-between px-4 list-none text-lg font-medium relative">
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <li>
        <Link href={"/"}>How it works</Link>
      </li>
      <li>
        <Link href={"/"}>About us</Link>
      </li>
      <li className="unique-Link">
        <Link
          href={"/"}
          className="flex flex-col items-center gap-1 text-xl font-normal translate-y-6"
        >
          Sentiment <span>Analyzer</span>
        </Link>
      </li>
      <li>
        <Link href={"/"}>Contact us</Link>
      </li>
      <li>
        <Link href={"/"}>FAQ’s</Link>
      </li>
    </nav>
  );
};

export default Navbar;
