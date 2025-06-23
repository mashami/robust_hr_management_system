"use client";

import React from "react";
import ScoreCard from "./ScoreCard";
import { criterials } from "@/types/helper";
import { FalseSvg, TrueSvg } from "@/components/Svgs";

const RightBar = () => {
  return (
    <div className="rounded-lg border-2 border-[#E5EDF9] pb-4 pt-12 px-5 space-y-6">
      <div className="flex items-center justify-center">
        <ScoreCard score={75} label="Potential Fit" />
      </div>

      <div className="space-y-3">
        {criterials.map((criterial, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between space-x-2"
            >
              <p className="text-[#071C50] text-[14px] opacity-80 font-light">
                {criterial.title}
              </p>

              {criterial.checked ? <TrueSvg /> : <FalseSvg />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;
