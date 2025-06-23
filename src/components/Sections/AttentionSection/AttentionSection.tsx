"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { Jobs } from "./Jobs";
import { Candidates } from "./Candidates";
import { Onboardings } from "./Onboardings";

const AttentionSection = () => {
  const [componentShow, setComponentShow] = useState<
    "jobs" | "candidates" | "onboardings"
  >("jobs");
  return (
    <section className="">
      <div className="space-y-4">
        <h1 className="text-[22px] font-semibold text-[#071C50] pl-5">
          Require Attention
        </h1>

        <div className="space-y-3">
          <div className="flex shrink-0 pl-5">
            <Navbar
              componentShow={componentShow}
              setComponentShow={setComponentShow}
            />
          </div>
          <div className="pt-2">
            {componentShow === "jobs" && <Jobs />}
            {componentShow === "candidates" && <Candidates />}
            {componentShow === "onboardings" && <Onboardings />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttentionSection;
