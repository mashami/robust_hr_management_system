"use clinet";

import { ExperienceItemProps } from "@/utils/types";
import React from "react";

const ExperienceItem = ({
  periodTime,
  position,
  workDescription
}: ExperienceItemProps) => {
  return (
    <div className="text-[#071C50]">
      <div>
        <div className="space-y-2">
          <div className="space-y-2 font-light border-l-[12px] border-[#E5EDF9] rounded-lg pl-2">
            <h1>{position}</h1>
            <span className="flex items-center space-x-4">
              <p>Alight</p>
              <p className="opacity-50">({periodTime} )</p>
            </span>
          </div>

          <div className="font-light pl-5 space-y-1">
            <h1>Responsible for;</h1>
            <ul className="opacity-50 font list-decimal list-outside pl-6">
              {workDescription.map((work, i) => {
                return <li key={i}>{work}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
