"use client";
import Left from "@/lib/svgs/left";
import Right from "@/lib/svgs/right";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Label from "../shared/label";
import Option from "../shared/option";

const merchOptions = [
  { id: 1, value: "shrirt", label: "Elegant T-Shirts" },
  { id: 1, value: "hoodie", label: "Stylish Hoodies" },
];

interface IProps {
  formValue: string;
  onChange: (name: string, value: string) => void;
  handleBack: () => void;
}

const Merch = ({ formValue, onChange, handleBack }: IProps) => {
  const [value, setValue] = useState(formValue);
  const isDisabled = !!value === false;
  return (
    <div className="flex flex-col gap-6">
      <Label title="Which type of just Abiola merch are you most excited to wear?" />
      <div className="flex flex-col gap-2 items-center">
        {merchOptions.map((opt, i) => {
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
            if (!isDisabled) onChange("social", value);
          }}
        >
          <Right color="#333" />
        </button>
      </div>
    </div>
  );
};

export default Merch;
