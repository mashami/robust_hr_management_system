"use client";

import { PlusSvg } from "@/components/Svgs";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center space-x-2 pl-3">
      <p className="text-[#071C50] font-semibold">Upcoming Meetings</p>
      <PlusSvg className="fill-[#4B93E7]" />
    </div>
  );
};

export default Header;
