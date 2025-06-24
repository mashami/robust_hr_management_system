"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { onboardingsData } from "@/types/helper";
import { ProfileSvg } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Onboardings = () => {
  return (
    <Table className="bg-white rounded-lg">
      <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
          <TableHead className="w-[250px]"></TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Applied On
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Interview Round
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Assigned to
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Score
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {onboardingsData.map((onboarding, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <ProfileSvg />
              <div className="space-y-1">
                <p className="text-[#071C50] font-semibold">
                  {onboarding.name}
                </p>
                <p className="text-[#071C50] font-light text-xs">
                  {onboarding.role}
                </p>
              </div>
            </TableCell>

            <TableCell className="text-center">
              {onboarding.appliedOn}
            </TableCell>
            <TableCell className="text-center">
              {onboarding.interviewRound}
            </TableCell>

            <TableCell
              className={cn("text-center flex items-center justify-center")}
            >
              {onboarding.assignedTo === "Not allocated" ? (
                <span
                  className={
                    "text-[#FC5858] bg-[#D73F3F2E] rounded-2xl py-1 px-4 text-[12px] font-semibold"
                  }
                >
                  {onboarding.assignedTo}
                </span>
              ) : (
                <span className="flex flex-wrap items-center justify-center shrink-0 self-center  bg-[#DDEAFB] rounded-2xl w-fit text-center">
                  <span className="w-[22px] aspect-square rounded-full ring-4 ring-[#BDD4F3] overflow-hidden relative">
                    <Image
                      alt="image"
                      src={"/images/profile.png"}
                      className="w-full h-full absolute"
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </span>
                  <span
                    className={
                      "text-[##071C50] flex self-end text-center rounded-r-2xl py-1 text-[12px] font-semibold px-5"
                    }
                  >
                    {onboarding.assignedTo}
                  </span>
                </span>
              )}
            </TableCell>
            <TableCell className="text-center">{onboarding.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
