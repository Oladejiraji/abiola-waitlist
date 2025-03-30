import Check from "@/lib/svgs/check";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  setValue: Dispatch<SetStateAction<string>>;
  opt: {
    id: number;
    label: string;
    value: string;
  };
  value: string;
}

const Option = ({ setValue, opt, value }: IProps) => {
  return (
    <button
      onClick={() => {
        setValue(opt.value);
      }}
      className={cn(
        "bg-[#0A0A0A] text-[#494949] border border-[#1B1A1A] rounded-[8px] w-[280px] h-12 cursor-pointer flex items-center justify-between px-4",
        {
          "text-white": opt.value === value,
        }
      )}
      type="button"
    >
      <span>{opt.label}</span>
      {opt.value === value ? <Check /> : null}
    </button>
  );
};

export default Option;
