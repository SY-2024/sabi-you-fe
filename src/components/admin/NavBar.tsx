import React from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";
import {Logo} from "images/index";

export default function NavBar() {
  return (
    <aside className="h-full min-w-[227px] max-w-[227px] bg-fa p-3 pt-5 flex flex-col">
      <Image src={Logo} width={54} height={40} alt="logo" />

      <NavMenu />
    </aside>
  );
}
