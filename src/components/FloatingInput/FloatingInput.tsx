"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FloatingInputProps {
  label: string;
  type?: "text" | "password" | "email" | "tel" | "number";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  showPasswordToggle?: boolean;
}

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  showPasswordToggle = false
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFloating = isFocused || value.length > 0;
  const shouldShowToggle = type === "password" && showPasswordToggle;
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFloating ? placeholder : ""}
          className={`
            w-full px-4 py-2 text-base
            bg-blue-50/40 border border-blue-200/60 rounded-xl
            
            focus:outline-none 
            placeholder:text-blue-400/60
            ${shouldShowToggle ? "pr-12" : ""}
            ${type === "password" ? "font-mono tracking-wider" : ""}
          `}
        />

        <label
          className={`
            absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
            ${
              isFloating
                ? "-top-2 bg-[#E6EEF8] px-2 text-xs text-blue-500/70 font-medium"
                : "top-3 text-xs text-blue-500/70"
            }
          `}
        >
          {label}
        </label>

        {shouldShowToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-2 text-blue-400 hover:text-blue-600 transition-colors focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default FloatingInput;
