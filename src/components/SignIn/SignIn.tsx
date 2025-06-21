"use client";

import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { GoogleSvg } from "../Svgs";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <FloatingInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <FloatingInput
            label="Password"
            value={password}
            type="password"
            showPasswordToggle={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" defaultChecked />
              <Label htmlFor="terms" className="text-[#082777] text-[12px]">
                Remember
              </Label>
            </div>
            <h1 className="text-[12px] text-[#082777]">Forgot Password?</h1>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col gap-4">
        <Button
          text="Login"
          className=" bg-[#F7AC258F]/100 hover:bg-[#F7AC258F]/75 transition ease-in-out duration-300 rounded-[8px] text-white w-full"
          style={{
            boxShadow: "0px 4px 8px 0px #00000029 inset"
          }}
        />

        <Button
          text="Login with Google"
          className=" bg-[#4B93E78F]/100 hover:bg-[#4B93E78F]/75 transition ease-in-out duration-300 rounded-[8px] text-white w-full"
          style={{
            boxShadow: "0px 4px 8px 0px #00000029 inset"
          }}
          svg={<GoogleSvg />}
        />
      </div>
    </div>
  );
};

export default SignIn;
