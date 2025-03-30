"use client";
import Left from "@/lib/svgs/left";
import Right from "@/lib/svgs/right";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Label from "../shared/label";

interface IProps {
  formValue: string;
  onChange: (name: string, value: string) => void;
  handleBack: () => void;
}

const Age = ({ formValue, onChange, handleBack }: IProps) => {
  const [value, setValue] = useState(formValue);
  const isDisabled = !!value === false;
  return (
    <div className="flex flex-col items-center gap-6">
      <Label title="How old are you?" />
      <input
        type="number"
        name="age"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="bg-[#1E1E1E] rounded-[8px] h-12 w-[280px] px-6 overflow-hidden"
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
            if (!isDisabled) onChange("age", value);
          }}
        >
          <Right color="#333" />
        </button>
      </div>
    </div>
  );
};

export default Age;
