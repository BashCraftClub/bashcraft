"use client";

import ShimmerButton from "@/components/ui/shimmer-button";
import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Terminal from "./terminal";
import { BorderBeam } from "@/components/ui/border-beam";

export function Hero() {
  const router = useRouter();

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-screen flex flex-col items-center py-20 gap-6">
        <m.h1
          className="flex flex-col md:flex-row text-5xl md:text-7xl font-bold justify-center text-center md:h-max"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        >
          <span className="text-primary-50 leading-none tracking-tight">
            <span className="bg-gradient-to-b from-white via-white to-background bg-clip-text text-transparent">
              BashCraft Club
            </span>{" "}
          </span>
        </m.h1>
        <m.p
          className="text-gray-500 leading-relaxed text-xl"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        >
          The place to collaborate, create, and push the boundaries of what's
          possible
        </m.p>
        <m.div
          className="flex md:flex-col items-center justify-center w-[500px]"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        >
          <div className="grid md:grid-cols-1 place-items-center">
            <ShimmerButton
              className="shadow-2xl transition-all duration-300 gap-2"
              background="radial-gradient(ellipse 80% 70% at 50% 120%, #40C057, #40C057)"
              onClick={() => {
                location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSet2OxNsCdiiDH-U512SJlDNXjHxsLrfaoO1Hh7-9DpFJz01Q/viewform";
              }}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-background lg:text-2xl gap-5">
                We Are Hiring
              </span>
              <ChevronRight className="h-5 w-5 duration-300 ease-in-out transform group-hover:translate-x-1 m-auto text-white" />
            </ShimmerButton>
          </div>
        </m.div>
        <m.div
          className="flex md:flex-col items-center justify-center space-x-4 mt-4 w-[500px]"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        ></m.div>
      </div>

      <m.div
        className="mx-auto max-w-[1200px]"
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <div className=" relative">
            <Terminal />
            <BorderBeam colorFrom="#40C057" colorTo="#40C057" />
          </div>
        </Suspense>
      </m.div>
    </div>
  );
}
