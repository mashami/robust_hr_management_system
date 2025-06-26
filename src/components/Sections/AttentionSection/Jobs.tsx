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
import { jobData } from "@/types/helper";
import { JobCaseSvg } from "@/components/Svgs";
import { Job } from "@prisma/client";
import { getAllJobs } from "@/services/user";

export const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAlljobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllJobs();

      if (response.success && response.data) {
        setJobs(response.data);
      } else {
        setError(response.message || "Failed to fetch jobs");
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlljobs();
  }, []);

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
        {jobs.map((job, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <JobCaseSvg />
              <div className="space-y-1">
                <p className="  font-semibold">{job.title}</p>
                <p className="  font-light text-xs">
                  {job.postedDate &&
                    new Date(job.postedDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                </p>
              </div>
            </TableCell>

            <TableCell className="text-center">{job.openings}</TableCell>
            <TableCell className="text-center">{job.applicantsCount}</TableCell>
            <TableCell className="text-center">{job.interviewed}</TableCell>
            <TableCell className="text-center">{job.rejected}</TableCell>
            <TableCell className="text-center">{job.feedbackPending}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
