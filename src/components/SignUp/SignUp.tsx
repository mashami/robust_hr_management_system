"use client";

import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import { Button } from "../ui/button";
import { GoogleSvg } from "../Svgs";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repassword, setRepassword] = useState("");
  return (
    <div>
      <div className="flex flex-col gap-3">
        <FloatingInput
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FloatingInput
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FloatingInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FloatingInput
          label="Password"
          value={password}
          type="password"
          showPasswordToggle={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FloatingInput
          label="Re-enter Password"
          value={repassword}
          type="password"
          showPasswordToggle={true}
          onChange={(e) => setRepassword(e.target.value)}
        />
      </div>

      <div className="pt-8 flex flex-col gap-4">
        <Button
          text="Sign up"
          className=" bg-[#F7AC258F]/100 hover:bg-[#F7AC258F]/75 transition ease-in-out duration-300 rounded-[8px] text-white w-full"
          style={{
            boxShadow: "0px 4px 8px 0px #00000029 inset"
          }}
        />

        <Button
          text="sign up with Google"
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

export default SignUp;
