"use client";

import React from "react";

const FooterSign = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="font-semibold text-[#4B93E7] text-[12px] underline">
        Release Notes
      </h1>
      <h1 className="text-[#4B93E7] text-[12px] "> version 20.22.11</h1>

      <h1 className="text-[#4B93E7] text-[12px] ">
        Copyright © 2023-{currentYear} HRM and services
      </h1>
    </div>
  );
};

export default FooterSign;
