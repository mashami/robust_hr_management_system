"use client";

import React from "react";
import EventItem from "./EventItem";
import { eventPeriods } from "@/types/helper";

const Events = () => {
  return (
    <div className="space-y-6">
      {eventPeriods.map((period, periodIndex) => (
        <div key={periodIndex} className="space-y-2">
          <h2 className="text-[12px] font-semibold   opacity-50 md:pl-1 pl-0">
            {period.period}
          </h2>

          <div className="grid gap-2">
            {period.events.map((event, eventIndex) => (
              <EventItem
                key={`${periodIndex}-${eventIndex}`}
                startTime={event.startTime}
                endTime={event.endTime}
                name={event.name}
                position={event.position}
                phase={event.phase}
                active={event.active}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
