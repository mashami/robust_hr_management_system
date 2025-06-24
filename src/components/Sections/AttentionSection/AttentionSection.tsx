"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { Jobs } from "./Jobs";
import { Candidates } from "./Candidates";
import { Onboardings } from "./Onboardings";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AttentionSection = () => {
  const [componentShow, setComponentShow] = useState<
    "jobs" | "candidates" | "onboardings"
  >("jobs");
  return (
    <section className="w-full">
      <div className="space-y-4 ">

        <h1 className="text-[22px] font-semibold   md:pl-5 pl-0 ">

          Require Attention
        </h1>

        <div className="space-y-3">
          <div className="flex shrink-0 md:pl-5 ">
            <Navbar
              componentShow={componentShow}
              setComponentShow={setComponentShow}
            />
          </div>
          <div className="pt-2 md:block hidden">
            {componentShow === "jobs" && <Jobs />}
            {componentShow === "candidates" && <Candidates />}
            {componentShow === "onboardings" && <Onboardings />}
          </div>

          <ScrollArea className="scrollbar-hide md:hidden block w-[350px] overflow-hidden">
            {componentShow === "jobs" && <Jobs />}
            {componentShow === "candidates" && <Candidates />}
            {componentShow === "onboardings" && <Onboardings />}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default AttentionSection;
