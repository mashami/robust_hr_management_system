"use client";

import React from "react";
import ExperienceItem from "./ExperienceItem";
import { lastExperience } from "@/types/helper";

const Experiences = () => {
  return (
    <div className="space-y-3 pb-5">
      <div className="flex items-center space-x-2">
        <h1 className="text-[#071C50] font-medium">Last Experience</h1>

        <span className="text-[#7D9BE7] text-[12px] cursor-pointer font-semibold underline hover:text-blue-500 transition-all duration-200 ease-in-out">
          Edit
        </span>
      </div>

      <div className="space-y-6">
        {lastExperience.map((experience, i) => {
          return (
            <ExperienceItem
              key={i}
              periodTime={experience.periodTime}
              position={experience.position}
              workDescription={experience.workDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
