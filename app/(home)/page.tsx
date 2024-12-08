"use client";

import { Events } from "./components/events";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

import { Hero } from "./components/hero";
import TeamsPage from "./components/team";

export default function Home() {
  return (
    <>
      <div className="flex flex-col wrapper text-primary gap-3">
        <div className="max-w-screen py-20 min-h-screen">
          <Hero />
        </div>
        <Events />
        <TeamsPage />
      </div>
    </>
  );
}
