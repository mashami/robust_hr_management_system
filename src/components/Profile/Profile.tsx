"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { DownArrow } from "../Svgs";
import { signOut } from "next-auth/react";

interface ProfileType {
  name: string;
}
const Profile = ({ name }: ProfileType) => {
  const firstName = name.split(" ")[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-3 outline-none">
        <div className="w-10 aspect-square rounded-full overflow-hidden relative">
          <Image
            src={"/images/Ellipse.png"}
            className="w-full h-full absolute"
            alt="profile-image"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        <div className="flex items-center space-x-2">
          <p className="  font-semibold">{firstName}</p>
          <DownArrow />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/signin" })}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
