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
import { jobData } from "@/types/helper";
import { JobCaseSvg } from "@/components/Svgs";

export const Jobs = () => {
  return (
    <Table className="bg-white rounded-lg">
      <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
          <TableHead className="w-[250px]"></TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Positions Left
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Applications
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Interviewed
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Rejected
          </TableHead>
          <TableHead className="  font-light opacity-65 text-center">
            Feedback Pending
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobData.map((job, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <JobCaseSvg />
              <div className="space-y-1">
                <p className="  font-semibold">{job.title}</p>
                <p className="  font-light text-xs">{job.postedDate}</p>
              </div>
            </TableCell>

            <TableCell className="text-center">{job.positionsLeft}</TableCell>
            <TableCell className="text-center">{job.applications}</TableCell>
            <TableCell className="text-center">{job.interviewed}</TableCell>
            <TableCell className="text-center">{job.rejected}</TableCell>
            <TableCell className="text-center">{job.feedbackPending}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
