import React from "react";
import {Avatar1, Wave} from "images/index";
import Image from "next/image";
import Cookies from "js-cookie";
import {NotificationsIcon, SearchIcon} from "icons/dashboard";
import {DownArrowOutline} from "icons/shapes";

export default function Header() {
  const user = Cookies.get("user");
  const userData = user ? JSON.parse(user) : {};
  return (
    <header className="px-6 py-3 flex gap-6 items-center justify-between shadow-[0px_1px_0px_0px_rgba(0,0,0,0.10)] w-full">
      <div className="flex gap-3.5">
        <p className="text-2xl text-text-secondary flex gap-2 items-center">
          <span>Hello, Olawale</span>
          <span className="">
            <Image src={Wave} width={24} height={24} alt="wave" />
          </span>
        </p>
        <div className="relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className="w-[400px] h-11 border border-e1 rounded-lg py-4 px-3 bg-white pl-10 text-sm focus:outline-none"
          />
          <span className="absolute top-3.5 left-4">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="flex divide-x divide-e7e7e9">
        <button className="relative mr-4">
          <NotificationsIcon />
          <div className="w-4 h-4 rounded-full bg-brand-bgRed absolute top-2 -right-1.5 flex items-center justify-center text-white text-[10px] font-medium">
            4
          </div>
        </button>
        <div className="pl-4 flex gap-2 cursor-pointer hover:bg-primary/10 p-2 rounded transition-colors duration-300">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src={Avatar1} width={200} height={200} alt="avatar" />
          </div>
          <div className="">
            <p className="text-sm font-medium text-text-secondary">
              Olawale Owootomo
            </p>
            <div className="flex justify-between">
              <p className="text-xs text-text-secondary/70">Super Admin</p>
              <DownArrowOutline />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
