import Link from "next/link";
import * as React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav className="flex items-center justify-between px-4 list-none text-lg font-medium ">
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
