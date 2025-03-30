"use client";

import Left from "@/lib/svgs/left";
import Right from "@/lib/svgs/right";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Label from "../shared/label";
import Option from "../shared/option";

const genderOptions = [
  { id: 1, value: "male", label: "Male" },
  { id: 1, value: "female", label: "Female" },
  { id: 1, value: "abstain", label: "I prefer not to answer" },
];

interface IProps {
  formValue: string;
  onChange: (name: string, value: string) => void;
  handleBack: () => void;
}

const Gender = ({ formValue, onChange, handleBack }: IProps) => {
  const [value, setValue] = useState(formValue);
  const isDisabled = !!value === false;

  return (
    <div className="flex flex-col gap-6">
      <Label title="What is your gender?" />
      <div className="flex flex-col gap-2 items-center">
        {genderOptions.map((opt, i) => {
          return <Option opt={opt} setValue={setValue} value={value} key={i} />;
        })}
      </div>
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
            if (!isDisabled) onChange("gender", value);
          }}
        >
          <Right color="#333" />
        </button>
      </div>
    </div>
  );
};

export default Gender;
