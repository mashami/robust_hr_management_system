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
import { candidatesData } from "@/types/helper";
import { ProfileSvg } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Candidates = () => {
  return (
    <Table className="bg-white rounded-lg">
      <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
          <TableHead className="w-[250px]"></TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Onboarded On
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Training
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Documentation
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Supervisor
          </TableHead>
          <TableHead className="text-[#071C50] font-light opacity-65 text-center">
            Project
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidatesData.map((candidate, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <ProfileSvg />
              <div className="space-y-1">
                <p className="text-[#071C50] font-semibold">{candidate.name}</p>
                <p className="text-[#071C50] font-light text-xs">
                  {candidate.title}
                </p>
              </div>
            </TableCell>

            <TableCell className="text-center">
              {candidate.onboardedOn}
            </TableCell>
            <TableCell className="text-center">{candidate.training}</TableCell>
            <TableCell className="text-center">
              {candidate.documentation}
            </TableCell>
            <TableCell className={cn("text-center")}>
              {candidate.supervisor === "Not allocated" ? (
                <span
                  className={
                    "text-[#FC5858] bg-[#D73F3F2E] rounded-2xl py-1 px-4 text-[12px] font-semibold"
                  }
                >
                  {candidate.supervisor}
                </span>
              ) : (
                <span className="flex items-center space-x-6 bg-[#DDEAFB] rounded-2xl text-center">
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
                      "text-[##071C50] flex self-end text-center rounded-r-2xl py-1 text-[12px] font-semibold"
                    }
                  >
                    {candidate.supervisor}
                  </span>
                </span>
              )}
            </TableCell>
            <TableCell className="text-center">
              <div
                className={cn(
                  "rounded-2xl py-1 px-4 text-[12px] font-semibold w-full",
                  candidate.project === "Not Allocated"
                    ? "text-[#FC5858] bg-[#D73F3F2E] w-full"
                    : "bg-[#B0F1B6] text-[#087213] w-full"
                )}
              >
                {" "}
                {candidate.project}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
