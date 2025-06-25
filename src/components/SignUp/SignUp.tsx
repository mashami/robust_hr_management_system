/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import { Button } from "../ui/button";
import { GoogleSvg } from "../Svgs";
import { useAppContext } from "@/utils/context/AppContext";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { signIn } from "next-auth/react";
import { signUp } from "@/services/user";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !repassword) {
      return toast({
        variant: "destructive",
        description: "All fields are required"
      });
    }
    if (password !== repassword) {
      return toast({
        variant: "destructive",
        description: "password are not match"
      });
    }

    setIsLoading(true);

    try {
      const result = await signUp({
        email,
        password,
        name: firstName + " " + lastName,
        retypePassword: repassword
      });
      if (result?.error) {
        toast({
          variant: "destructive",
          description: result.message
        });
        setIsLoading(false);

        return;
      }
      const resultSign = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      if (resultSign?.error) {
        toast({
          variant: "destructive",
          description: resultSign.error
        });
        setIsLoading(false);

        return;
      }

      return router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occured. Please try again."
      });
      setIsLoading(false);
      return;
    }
  };

  return (
    <form action="onSubmit" onSubmit={onSubmitHandler}>
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
          loading={isLoading}
          disabled={isLoading}
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
    </form>
  );
};

export default SignUp;
