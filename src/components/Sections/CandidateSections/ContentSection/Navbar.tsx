"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  setComponentShow: React.Dispatch<
    React.SetStateAction<
      | "general"
      | "evaluations"
      | "experience"
      | "education"
      | "events"
      | "documents"
      | "messages"
    >
  >;
  componentShow:
    | "general"
    | "evaluations"
    | "experience"
    | "education"
    | "events"
    | "documents"
    | "messages";
}

const TABS: (
  | "general"
  | "evaluations"
  | "experience"
  | "education"
  | "events"
  | "documents"
  | "messages"
)[] = [
  "general",
  "evaluations",
  "experience",
  "education",
  "events",
  "documents",
  "messages"
];

const Navbar = ({ setComponentShow, componentShow }: NavbarProps) => {
  return (
    <div className="flex flex-wrap flex-row items-center gap-6 ">
      {TABS.map((tab) => (
        <div
          key={tab}
          onClick={() => setComponentShow(tab)}
          className="relative cursor-pointer"
        >
          <p
            className={cn(
              "px-1",
              componentShow === tab
                ? "text-[#071C50] font-semibold"
                : "text-[#071C50] font-light opacity-65"
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </p>

          {componentShow === tab && (
            <motion.div
              layoutId="underline"
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F7AC25]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
