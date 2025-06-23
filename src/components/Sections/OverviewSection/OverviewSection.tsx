"use client";

import { InterviewIcon } from "@/components/Icons";
import { OverviewItem } from "@/components/OverviewItem";
import { PlusSvg } from "@/components/Svgs";
import { Button } from "@/components/ui/button";
import React from "react";

const OverviewSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between space-x-2">
        <h1 className="text-[#071C50] text-[22px] font-semibold pl-5">
          Overview
        </h1>
        <div className="flex items-center space-x-3">
          <Button
            svg={<PlusSvg />}
            text="Add Candidate"
            position="left"
            className="text-white bg-[#4B93E7] hover:bg-[#082777] transition ease-in-out duration-300 rounded-lg px-2"
          />

          <Button
            svg={<PlusSvg />}
            text="Add jobs"
            position="left"
            className="text-white bg-[#4B93E7] hover:bg-[#082777] transition ease-in-out duration-300 rounded-lg px-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 pt-9 pl-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <OverviewItem
            key={index}
            svg={<InterviewIcon />}
            text="Interview Scheduled"
            totalNumber={33}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
