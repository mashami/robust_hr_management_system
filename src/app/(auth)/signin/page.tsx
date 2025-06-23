"use client";

import { FooterSign } from "@/components/FooterSign";
import { SignIn } from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";
import {
  BackgroundSvgLeft,
  BackgroundSvgRight,
  FolderSvg,
  LogoSvg
} from "@/components/Svgs";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const SignInPage = () => {
  const [show, setShow] = useState<"signin" | "signup">("signin");
  return (
    <div className="w-screen min-h-screen flex items-center justify-center relative">
      <div className="fixed inset-0 -z-40 overflow-hidden">
        <div className="absolute" />
        <div className="absolute top-32 right-32 w-[1319.28px] h-[592.5px] ">
          <BackgroundSvgRight />
        </div>
        <div className="absolute translate-x-1/4 bottom-28 w-3/5 h-3/5 rotate-8 ">
          <BackgroundSvgLeft />
        </div>
      </div>

      <div
        className="rounded-lg p-12 min-w-[562px]"
        style={{
          background: "#E6EEF8",
          boxShadow:
            "16px 16px 40px 0px #BBC3CE99, -16px -16px 40px 0px #FDFFFFCC"
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <LogoSvg />

          <h1 className="text-[#082777] text-[24px] font-">HR Management</h1>
        </div>

        <div className="flex items-center justify-center space-x-8 pt-6">
          <div>
            <FolderSvg />
          </div>

          <div className="border-l border-[#D3E2F4] pl-8">
            <div className="flex items-center space-x-5">
              <div className="cursor-pointer" onClick={() => setShow("signin")}>
                <h1
                  className={cn(
                    show == "signin"
                      ? "text-[#4B93E7] font-semibold text-[40px]"
                      : "font-normal text-[24px] text-[#4B93E7] opacity-50"
                  )}
                >
                  Login
                </h1>
                {show === "signin" && (
                  <div className="h-1 w-[39px] bg-[#F7AC25] rounded-[5px]"></div>
                )}
              </div>

              <div className="w-[2px] h-[32px] bg-[#D3E2F4] rounded-[4px]"></div>

              <div className="cursor-pointer" onClick={() => setShow("signup")}>
                <p
                  className={cn(
                    show == "signup"
                      ? "text-[#4B93E7] font-semibold text-[40px]"
                      : "font-normal text-[24px] text-[#4B93E7] opacity-50"
                  )}
                >
                  Sign Up
                </p>
                {show === "signup" && (
                  <div className="h-1 w-[39px] bg-[#F7AC25] rounded-[5px]"></div>
                )}
              </div>
            </div>

            <div className="pt-8">
              {show == "signin" ? (
                <div className="">
                  <SignIn />
                </div>
              ) : (
                <div>
                  <SignUp />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-3 right-1/2 translate-x-1/2">
        <FooterSign />
      </div>
    </div>
  );
};

export default SignInPage;
