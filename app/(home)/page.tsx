"use client";

import { InfiniteMovingCardsDemo } from "./components/events";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

import { Hero } from "./components/hero";
import { FocusCardsDemo } from "./components/teams";

export default function Home() {
  return (
    <>
      <div className="flex flex-col wrapper text-primary gap-3">
        <div className="max-w-screen py-20 min-h-screen">
          <Hero />
        </div>
        <InfiniteMovingCardsDemo />
        <div className="">
          <VelocityScroll
            text="JOIN US NOW!"
            default_velocity={2}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-gray-700 md:text-7xl md:leading-[5rem]"
          />
        </div>
      </div>
    </>
  );
}
