"use client";

import React from "react";
import Header from "./Header";
import Events from "./Events";

const EventsSection = () => {
  return (
    <section className="px-1 py-5 bg-[#F3F8FF] rounded space-y-5">
      <Header />
      <Events />
    </section>
  );
};

export default EventsSection;
