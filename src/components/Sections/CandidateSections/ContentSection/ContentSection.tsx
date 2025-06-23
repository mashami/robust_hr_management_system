"use clinet";

import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  DocumentsPage,
  EducationPage,
  EvaluationsPage,
  EventsPage,
  ExperiencePage,
  GeneralPage,
  MessagesPage
} from "./Pages";

const ContentSection = () => {
  const [componentShow, setComponentShow] = useState<
    | "general"
    | "evaluations"
    | "experience"
    | "education"
    | "events"
    | "documents"
    | "messages"
  >("general");
  return (
    <div className=" bg-[#F3F8FF] rounded-lg px-4">
      <div className="w-full py-4 border-b-[2px] border-[#E5EDF9]">
        <Navbar
          componentShow={componentShow}
          setComponentShow={setComponentShow}
        />
      </div>

      <div>
        {componentShow === "general" && <GeneralPage />}
        {componentShow === "evaluations" && <EvaluationsPage />}
        {componentShow === "education" && <EducationPage />}
        {componentShow === "experience" && <ExperiencePage />}
        {componentShow === "documents" && <DocumentsPage />}
        {componentShow === "messages" && <MessagesPage />}
        {componentShow === "events" && <EventsPage />}
      </div>
    </div>
  );
};

export default ContentSection;
