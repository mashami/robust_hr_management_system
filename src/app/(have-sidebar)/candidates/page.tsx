"use client";

import { ContentSection } from "@/components/Sections/CandidateSections/ContentSection";
import { ProfileSection } from "@/components/Sections/CandidateSections/ProfileSection";
import { ArrowLeft, ArrowRight } from "@/components/Svgs";
import React from "react";

const CandidatesPage = () => {
  return (
    <div className="md:container pb-4 md:pt-0 pt-20">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2 text-xs  ">
          <p className="opacity-50">Candidates</p>
          <ArrowRight />
          <p className="font-semibold">John Doe</p>
        </div>

        <div className="flex md:flex-row flex-row-reverse items-center space-x-1.5 cursor-pointer py-4 group">
          <div className="group-hover:-translate-x-2 duration-300 ease-in-out">
            <ArrowLeft className="md:rotate-0 rotate-180" />
          </div>
          <p className="  text-xs font-semibold md:pr-0 pr-1">Go Back</p>
        </div>
      </div>

      <div className="space-y-4">
        <ProfileSection />

        <ContentSection />
      </div>
    </div>
  );
};

export default CandidatesPage;
