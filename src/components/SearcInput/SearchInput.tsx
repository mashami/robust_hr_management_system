"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div
      className={`
      group relative w-[300px] cursor-pointer 
      transition-all duration-300 ease-in-out
      ${isFocused ? "transform scale-[1.02]" : ""}
    `}
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div
        className={`
        py-3 px-4 rounded-xl border
        bg-gradient-to-r from-[#E5EDF9]/80 to-[#F8FAFF]/60
        backdrop-blur-sm
        flex items-center space-x-3
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-md
        ${
          isFocused
            ? "border-blue-400/60 ring-4 ring-blue-100/50 shadow-lg shadow-blue-100/30"
            : "border-[#0827773D] hover:border-blue-300/50"
        }
      `}
      >
        <Search
          size={18}
          className={`
            transition-all duration-300 ease-in-out
            ${
              isFocused || searchValue
                ? "text-blue-600 transform scale-110"
                : "text-[#071C50]/60 group-hover:text-blue-500"
            }
          `}
        />

        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search"
          className={`
            bg-transparent border-none ring-0 outline-none 
            w-full text-sm font-medium
            placeholder:text-sm placeholder:font-normal
            transition-all duration-300 ease-in-out
            ${
              isFocused
                ? "placeholder:text-blue-400/70 text-gray-800"
                : "placeholder:text-[#071C50]/60 text-gray-700"
            }
          `}
        />

        <button
          onClick={clearSearch}
          className={cn(
            searchValue
              ? "opacity-100  rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95"
              : "opacity-0"
          )}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
