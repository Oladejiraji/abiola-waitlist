import React, { useState } from "react";
import Right from "@/lib/svgs/right";
import { cn } from "@/lib/utils";

interface IProps {
  formValue: string;
  onChange: (name: string, value: string) => void;
}

const Name = ({ formValue, onChange }: IProps) => {
  const [value, setValue] = useState(formValue);
  const isDisabled = !!value === false;
  return (
    <div className="flex flex-col items- gap-6">
      <label className="relative text-2xl md:text-3xl leading-6.5 md:leading-normal  bg-clip-text text-transparent bg-white text-center font-sans font-bold">
        What is your full name?
      </label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="bg-[#1E1E1E] rounded-[8px] h-12 w-[280px] px-6"
      />
      <div className="flex justify-center">
        <button
          className={cn(
            "flex justify-center items-center bg-white  p-1 rounded-full gap-2 cursor-pointer",
            {
              "bg-[lightgrey]": isDisabled,
            }
          )}
          type="button"
          onClick={() => {
            if (!isDisabled) onChange("name", value);
          }}
        >
          <Right color="#333" />
        </button>
      </div>
    </div>
  );
};

export default Name;
