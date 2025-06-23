"use client";

import { cn } from "@/lib/utils";
import { EventItemProps } from "@/utils/types";
import React from "react";

const EventItem = ({
  startTime,
  endTime,
  name,
  position,
  phase,
  active = false
}: EventItemProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-10 bg-[#A0DBF457] rounded border-r-[5px] border-[#4B93E7] w-full",
        active && "bg-[#B0F1B65C] border-[#2B570880]"
      )}
    >
      <div className="border-r border-[#1B5CBE70] px-6 grid col-span-2 place-content-center">
        <p
          className={cn(
            "text-[#1B5CBE] font-semibold text-[12px] py-4",
            active && "text-[#2B5708]"
          )}
        >
          {startTime}
        </p>
      </div>

      <p
        className={cn(
          "text-[#1B5CBE] text-[10px] col-span-8 place-content-center px-2 py-1 ",
          active && "text-[#2B5708]"
        )}
      >
        <span className="font-semibold pr-1">{name} ;</span>
        <span className="font-light pr-px">
          {position}; {phase}{" "}
          <b
            className={cn(
              "font-semibold border-l px-1 border-[#4B93E7]",
              active && "border-[#2B5708] "
            )}
          >
            {startTime} - {endTime}
          </b>
        </span>
      </p>
    </div>
  );
};

export default EventItem;
