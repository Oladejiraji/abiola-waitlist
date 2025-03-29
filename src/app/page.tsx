"use client";
import React from "react";

export default function Home() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          **Be the First to Get Exclusive Just Abiola Merch!** Exciting things
          are coming! Just Abiola is launching an exclusive merchandise store,
          and you don’t want to miss out. Sign up for our waiting list to get
          early access to limited-edition drops, special discounts, and
          behind-the-scenes updates. Join the community and be part of something
          special—because the best things are worth the wait!
        </p>
      </div>
    </div>
  );
}
