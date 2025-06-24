"use client";

import { InterviewIcon } from "@/components/Icons";
import { OverviewItem } from "@/components/OverviewItem";
import { PlusSvg } from "@/components/Svgs";
import { Button } from "@/components/ui/button";
import React from "react";
import Header from "../EventsSection/Header";

const OverviewSection = () => {
  return (
    <section>
      <div className="flex md:items-center items-start justify-between space-x-2 md:pt-0 pt-24">
        <span className="flex flex-col">
          <h1 className="text-[#071C50] text-[22px] font-semibold md:pl-5">
            Overview
          </h1>
          <div className="md:hidden block">
            <Header />
          </div>
        </span>
        <div className="flex md:flex-row flex-col md:items-center gap-3">
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
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-8 pt-9 md:pl-5">
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
