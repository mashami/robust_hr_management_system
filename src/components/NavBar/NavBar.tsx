"use client";

import React from "react";
import { SearchInput } from "../SearcInput";
import { Profile } from "../Profile";
import { User } from "@prisma/client";

interface NavBarType {
  user: Pick<User, "id" | "name" | "role">;
}

const NavBar = ({ user }: NavBarType) => {
  return (
    <nav className="pl-[126px] bg-white">
      <div
        className="py-5  px-4 flex items-center justify-between"
        style={{
          boxShadow: "0px 4px 20px 0px #5B5B5B21"
        }}
      >
        <div>
          <SearchInput />
        </div>

        <div>
          <Profile name={user.name} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
