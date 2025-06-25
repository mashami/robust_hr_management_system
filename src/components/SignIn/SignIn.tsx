/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { GoogleSvg } from "../Svgs";
import { useAppContext } from "@/utils/context/AppContext";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { signIn } from "next-auth/react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { fetchUser } = useAppContext();

  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return toast({
        variant: "destructive",
        description: "All fields are required"
      });
    }
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          description: "User with this email doesn't found"
        });

        setIsLoading(false);

        return;
      }

      fetchUser();

      return router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occured. Please try again."
      });
      setIsLoading(false);
    }
  };

  return (
    <form action="onSubmit" onSubmit={onSubmitHandler}>
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
          loading={isLoading}
          disabled={isLoading}
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
    </form>
  );
};

export default SignIn;
