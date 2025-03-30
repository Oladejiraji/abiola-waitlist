import React from "react";

const Label = ({ title }: { title: string }) => {
  return (
    <label className="relative text-2xl md:text-3xl leading-6.5 md:leading-normal  bg-clip-text text-transparent bg-white text-center font-sans font-bold">
      {title}
    </label>
  );
};

export default Label;
