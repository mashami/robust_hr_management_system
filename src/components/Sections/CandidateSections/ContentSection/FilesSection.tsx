"use client";

import React from "react";
import FileItem, { FileItemProps } from "./FileItem";
import { Button } from "@/components/ui/button";

const Files: FileItemProps[] = [
  { name: "Cover_letter.pdf", period: "2d ago" },
  { name: "My_resume.docx", period: "2d ago" },
  { name: "Oct_payslip.pdf", period: "2d ago" },
  { name: "Degree.pdf", period: "2d ago" }
];

const FilesSection = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <h1 className="text-[#071C50] font-medium">Candidate Files</h1>

        <span className="text-[#7D9BE7] text-[12px] cursor-pointer font-semibold underline hover:text-blue-500 transition-all duration-200 ease-in-out">
          Edit
        </span>
      </div>

      <div className="flex items-center justify-between space-x-3 pt-4">
        {Files.map((file, i) => {
          return <FileItem key={i} name={file.name} period={file.period} />;
        })}
      </div>
      <div className="flex justify-end pt-1">
        <Button
          text="View All"
          className="hover:bg-transparent px-0 underline text-[#7D9BE7] hover:text-blue-500 duration-300 ease-in-out "
          variant={"ghost"}
        />
      </div>
    </div>
  );
};

export default FilesSection;
