"use client";
import Left from "@/lib/svgs/left";
import Right from "@/lib/svgs/right";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface IProps {
  formValue: string;
  onChange: (name: string, value: string) => void;
  handleBack: () => void;
}

const Social = ({ formValue, onChange, handleBack }: IProps) => {
  const [value, setValue] = useState(formValue);
  const isDisabled = !!value === false;
  return (
    <div className="flex flex-col gap-6 items-center">
      <label className="relative text-2xl md:text-3xl leading-6.5 md:leading-normal bg-clip-text text-transparent bg-white text-center font-sans font-bold">
        Which social media do you follow Just Abiola on?
      </label>
      <input
        type="text"
        name="social"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="bg-[#1E1E1E] rounded-[8px] h-12 w-[280px] px-6"
      />
      <div className="flex justify-center gap-2">
        <button
          className={cn(
            "flex justify-center items-center bg-white  p-1 rounded-full gap-2 cursor-pointer"
          )}
          type="button"
          onClick={handleBack}
        >
          <Left color="#333" />
        </button>
        <button
          className={cn(
            "flex justify-center items-center bg-white  p-1 rounded-full gap-2 cursor-pointer",
            {
              "bg-[lightgrey]": isDisabled,
            }
          )}
          type="button"
          onClick={() => {
            if (!isDisabled) onChange("social", value);
          }}
        >
          <Right color="#333" />
        </button>
      </div>
    </div>
  );
};

export default Social;
