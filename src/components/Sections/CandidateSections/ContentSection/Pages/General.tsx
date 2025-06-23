"use client";

import React from "react";
import FilesSection from "../FilesSection";
import Experiences from "../Experiences";
import RightBar from "../RightBar";

const GeneralPage = () => {
  return (
    <section className="grid grid-cols-7 gap-4 pt-8">
      <div className="col-span-5">
        <FilesSection />
        <Experiences />
      </div>

      <div className="col-span-2">
        <div>
          <RightBar />
        </div>
      </div>
    </section>
  );
};

export default GeneralPage;
