"use client";

import React from "react";
import {
  CalendarSvg,
  CandidatesSvg,
  HomeSvg,
  JobSvg,
  LogoSvg,
  Menu,
  ReportSvg
} from "../Svgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const SideBar = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="fixed hidden md:flex flex-col items-center left-0 w-[126px] h-screen top-0 bottom-0 bg-[#082777] px-4 py-4 rounded-r-[18px]">
        <div className="">
          <LogoSvg />
        </div>

        <div className="pt-32 space-y-6">
          <Link
            href={"/dashboard"}
            className={cn(
              "flex flex-col group items-center space-y-1 cursor-pointer opacity-40 hover:opacity-100 ease-in-out duration-300 relative",
              path.includes("dashboard") && "opacity-100"
            )}
          >
            {path.includes("dashboard") && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -left-5 top-0 bg-[#F7AC25] w-2 h-full rounded-r-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            <HomeSvg />
            <p className="text-[#CFD8DC] font-semibold">Home</p>
          </Link>

          <Link
            href={"/jobs"}
            className={cn(
              "flex flex-col items-center space-y-1 cursor-pointer opacity-40 hover:opacity-100 ease-in-out duration-300 relative",
              path.includes("jobs") && "opacity-100"
            )}
          >
            {path.includes("jobs") && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -left-5 top-0 bg-[#F7AC25] w-2 h-full rounded-r-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <JobSvg />
            <p className="text-[#CFD8DC] font-semibold">Jobs</p>
          </Link>

          <Link
            href={"/candidates"}
            className={cn(
              "flex flex-col items-center space-y-1 cursor-pointer opacity-40 hover:opacity-100 ease-in-out duration-300 relative",
              path.includes("candidates") && "opacity-100"
            )}
          >
            {path.includes("candidates") && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -left-5 top-0 bg-[#F7AC25] w-2 h-full rounded-r-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <CandidatesSvg />
            <p className="text-[#CFD8DC] font-semibold">Candidates</p>
          </Link>

          <Link
            href={"/reports"}
            className={cn(
              "flex flex-col items-center space-y-1 cursor-pointer opacity-40 hover:opacity-100 ease-in-out duration-300 relative",
              path.includes("reports") && "opacity-100"
            )}
          >
            {path.includes("reports") && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -left-5 top-0 bg-[#F7AC25] w-2 h-full rounded-r-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <ReportSvg />
            <p className="text-[#CFD8DC] font-semibold">Reports</p>
          </Link>

          <Link
            href={"/calendar"}
            className={cn(
              "flex flex-col items-center space-y-1 cursor-pointer opacity-40 hover:opacity-100 ease-in-out duration-300 relative",
              path.includes("calendar") && "opacity-100"
            )}
          >
            {path.includes("calendar") && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -left-5 top-0 bg-[#F7AC25] w-2 h-full rounded-r-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <CalendarSvg />
            <p className="text-[#CFD8DC] font-semibold">Calendar</p>
          </Link>
        </div>
      </div>

      <div className="md:hidden bg-white start-0 flex  items-center justify-between py-5 w-screen px-4">
        <LogoSvg />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-3 outline-none">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard")}
              className={cn(
                "py-2 hover:bg-blue-300 transition duration-200 ease-in-out",
                path.includes("dashboard") && "bg-blue-200"
              )}
            >
              Home
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/jobs")}
              className={cn(
                "py-2 hover:bg-blue-300 transition duration-200 ease-in-out",
                path.includes("jobs") && "bg-blue-200"
              )}
            >
              Jobs
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/candidates")}
              className={cn(
                "py-2 hover:bg-blue-300 transition duration-200 ease-in-out",
                path.includes("candidates") && "bg-blue-200"
              )}
            >
              Candidates
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/reports")}
              className={cn(
                "py-2 hover:bg-blue-300 transition duration-200 ease-in-out",
                path.includes("reports") && "bg-blue-200"
              )}
            >
              Reports
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/calendar")}
              className={cn(
                "py-2 hover:bg-blue-300 transition duration-200 ease-in-out",
                path.includes("calendar") && "bg-blue-200"
              )}
            >
              Calender
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SideBar;
