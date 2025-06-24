"use client";

import React from "react";

interface OverviewItemType {
  text: string;
  svg: React.ReactNode;
  totalNumber: number;
}
const OverviewItem = ({ text, totalNumber, svg }: OverviewItemType) => {
  return (
    <div className="px-4 py-6 bg-white rounded-lg relative w-full">
      <div className="absolute -top-5 -left-6 flex items-center justify-center w-[76px] h-[82px] bg-white border border-black/30 rounded-[30px] text-2xl   font-semibold">
        {totalNumber}
      </div>

      <div className="flex justify-end">{svg}</div>
      <div className="max-w-[150px]">
        <h1 className="text-black font-light">{text}</h1>
      </div>
    </div>
  );
};

export default OverviewItem;
