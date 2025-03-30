"use client";
import ShimmerButton from "@/components/shimmer-button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10 flex flex-col gap-2">
        <h1 className="relative text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto  text-md leading-5 text-center relative font-sans">
          Be the First to Get Exclusive{" "}
          <span className="font-extrabold">Just Abiola Merch!</span> Exciting
          things are coming! Just Abiola is launching an exclusive merchandise
          store, and you don’t want to miss out. Sign up for our waiting list to
          get early access to limited-edition drops, special discounts, and
          behind-the-scenes updates. Join the community and be part of something
          special—because the best things are worth the wait!
        </p>
        <div className="mt-5 flex justify-center">
          <ShimmerButton
            title="Next"
            onClick={() => {
              router.push("/forms");
            }}
          />
        </div>
      </div>
    </div>
  );
}
