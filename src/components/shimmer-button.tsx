import React from "react";

interface IProps {
  title: string;
  onClick: () => void;
}

const ShimmerButton = ({ title, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="shadow-[inset_0_0_0_2px_#616467] cursor-pointer font-sans text-black px-12 py-4 rounded-lg tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
    >
      {title}
    </button>
  );
};

export default ShimmerButton;
