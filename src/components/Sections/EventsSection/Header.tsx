"use client";

import { DownArrow, PlusSvg } from "@/components/Svgs";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Events from "./Events";

const Header = () => {
  return (
    <>
      <div className="md:flex hidden items-center space-x-2 pl-3">
        <p className="text-[#071C50] font-semibold text-[16px]">
          Upcoming Meetings
        </p>
        <span className="">
          <PlusSvg className="fill-[#4B93E7]" />
        </span>
      </div>

      <div className="md:hidden block">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none pt-5">
            <div className="md:hidden flex items-center space-x-2">
              <p className="text-[#071C50] font-semibold text-[16px]">
                Upcoming Meetings
              </p>
              <span className="">
                <DownArrow className="md:hidden block" />
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="container py-4">
            <Events />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Header;
