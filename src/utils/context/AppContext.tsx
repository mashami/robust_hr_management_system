"use client";

import { createContext, useContext, useState } from "react";

import { getUserInfo } from "@/services/user";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "../enums";

interface AppContextData {
  fetchUser: () => void;
  userInfo: User | null;
}

const AppContext = createContext<AppContextData | null>(null);

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const result = await getUserInfo();
      const user = result?.user || result;

      if (!user || !user.id) {
        return NextResponse.json(
          { error: true, message: `Invalid user response}` },
          { status: HttpStatusCode.BAD_REQUEST }
        );
      }

      setUserInfo(user);
    } catch (error) {
      // console.error("Error fetching user info:", error);
      return NextResponse.json(
        { error: true, message: `Error fetching user info:, ${error}` },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }
  };

  const value: AppContextData = {
    userInfo,
    fetchUser
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
