"use client";
import Age from "@/components/forms/age";
import Gender from "@/components/forms/gender";
import Long from "@/components/forms/long";
import Merch from "@/components/forms/merch";
import Name from "@/components/forms/name";
import Social from "@/components/forms/social";

import { FormType } from "@/lib/types";
import React, { useState } from "react";

const Forms = () => {
  const [step, setStep] = useState(1);
  const [formValue, setFormValue] = useState<FormType>({
    name: "",
    long: "",
    age: "",
    gender: "",
    social: "",
    merch: "",
  });
  const handleChange = (name: string, value: string) => {
    console.log("gere");
    setFormValue((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="h-screen w-full max-w-[50rem] mx-auto rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased z-10">
      <form className="p-4 z-10 flex flex-col gap-2">
        {step === 1 ? (
          <Name formValue={formValue.name} onChange={handleChange} />
        ) : null}
        {step === 2 ? (
          <Gender
            formValue={formValue.gender}
            onChange={handleChange}
            handleBack={handleBack}
          />
        ) : null}
        {step === 3 ? (
          <Age
            formValue={formValue.age}
            onChange={handleChange}
            handleBack={handleBack}
          />
        ) : null}
        {step === 4 ? (
          <Long
            formValue={formValue.long}
            onChange={handleChange}
            handleBack={handleBack}
          />
        ) : null}
        {step === 5 ? (
          <Social
            formValue={formValue.social}
            onChange={handleChange}
            handleBack={handleBack}
          />
        ) : null}
        {step === 6 ? (
          <Merch
            formValue={formValue.merch}
            onChange={handleChange}
            handleBack={handleBack}
          />
        ) : null}
      </form>
    </div>
  );
};

export default Forms;
