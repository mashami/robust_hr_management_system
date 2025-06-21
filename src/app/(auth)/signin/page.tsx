"use client";

import { FooterSign } from "@/components/FooterSign";
import { SignIn } from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";
import { FolderSvg } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const SignInPage = () => {
  const [show, setShow] = useState<"signin" | "signup">("signin");
  return (
    <div className="w-screen min-h-screen flex items-center justify-center relative">
      <div
        className="rounded-lg p-12 min-w-[562px]"
        style={{
          background: "#E6EEF8",
          boxShadow:
            "16px 16px 40px 0px #BBC3CE99, -16px -16px 40px 0px #FDFFFFCC"
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <svg
            width={25}
            height={40}
            viewBox="0 0 25 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4584 29.6423C6.07558 22.9555 -2.86035 11.0269 12.4584 16.8065V29.6423Z"
              stroke="#4B93E7"
              strokeWidth="7.81129"
            />
            <path
              d="M12.4584 29.6423C18.8412 22.9555 27.7771 11.0269 12.4584 16.8065V29.6423Z"
              stroke="#4B93E7"
              strokeWidth="7.81129"
            />
            <path
              d="M12.4584 29.6423C6.07558 22.9555 -2.86035 11.0269 12.4584 16.8065V29.6423Z"
              fill="#082777"
            />
            <path
              d="M12.4583 29.6423C18.8411 22.9555 27.777 11.0269 12.4583 16.8065V29.6423Z"
              fill="#F7AC25"
            />
            <ellipse
              cx="12.5554"
              cy="5.93116"
              rx="5.95146"
              ry="5.20753"
              fill="#4B93E7"
            />
          </svg>

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
