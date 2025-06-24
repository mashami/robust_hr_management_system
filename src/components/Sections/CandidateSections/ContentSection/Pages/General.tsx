"use client";

import React from "react";
import FilesSection from "../FilesSection";
import Experiences from "../Experiences";
import RightBar from "../RightBar";

const GeneralPage = () => {
  return (
    <section className="grid md:grid-cols-7 grid-cols-1 gap-4 pt-8">
      <div className="md:col-span-5">
        <FilesSection />
        <Experiences />
      </div>

      <div className="md:col-span-2">
        <div className="">
          <RightBar />
        </div>
      </div>
    </section>
  );
};

export default GeneralPage;
