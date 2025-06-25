/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
// import { candidatesData } from "@/types/helper";
import { ProfileSvg } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getAllCandidates } from "@/services/user";
import { CandidateResponse } from "@/utils/types";

export const Candidates = () => {
  const [candidates, setCandidates] = useState<CandidateResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllCandidates = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllCandidates();

      if (response.success && response.data) {
        setCandidates(response.data);
      } else {
        setError(response.message || "Failed to fetch candidates");
        setCandidates([]);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
      setCandidates([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCandidates();
  }, []);

  return (
    <Table className="bg-white rounded-lg">
      <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
          <TableHead className="w-[250px]"></TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Onboarded On
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Training
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Documentation
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Supervisor
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Project
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidates.map((candidate, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <ProfileSvg />
              <div className="space-y-1">
                <p className="  font-semibold">{candidate.name}</p>
                <p className="  font-light text-xs">{candidate.position}</p>
              </div>
            </TableCell>

            <TableCell className="text-center">
              {candidate.onboardedOn &&
                new Date(candidate.onboardedOn).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                })}
            </TableCell>
            <TableCell className="text-center">{candidate.training}</TableCell>
            <TableCell className="text-center">
              {candidate.documentation}
            </TableCell>
            <TableCell className={cn("text-center")}>
              {candidate.supervisor === "Not allocated" ? (
                <span
                  className={
                    "text-[#FC5858] bg-[#D73F3F2E] flex flex-shrink-0 rounded-2xl py-1 px-4 text-[12px] font-semibold"
                  }
                >
                  {candidate.supervisor}
                </span>
              ) : (
                <span className="flex flex-wrap items-center space-x-6 bg-[#DDEAFB] rounded-2xl text-center">
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
