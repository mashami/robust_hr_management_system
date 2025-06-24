"use client";

import { DocsSvg, PdfSvg } from "@/components/Svgs";
import React from "react";

export interface FileItemProps {
  name: string;
  period: string;
}
const FileItem = ({ name, period }: FileItemProps) => {
  return (
    <div className="bg-[#E7F1FF] border border-[#071C5026] rounded-[7px] flex items-center space-x-3 px-3 py-2 w-fit">
      {name.includes(".pdf") && <PdfSvg />}
      {name.includes(".doc") && <DocsSvg />}

      <p className="  text-sm font-light">{name}</p>

      <p className=" /50 text-xs font-light">{period}</p>
    </div>
  );
};

export default FileItem;
