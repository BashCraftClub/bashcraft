"use client";
import { motion } from "framer-motion";

import { InfiniteMovingCardsDemo } from "./components/events";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Terminal from "./components/terminal";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col wrapper text-primary gap-3">
        <div className="max-w-screen py-20 min-h-screen">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 0.5, 0.36, 1],
            }}
            className={cn(
              "text-[5vh] md:text-[10vh] lg:text-[15vh] font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-white dark:via-neutral-300 dark:to-background",
              font.className
            )}
          >
            BASHCRAFT
          </motion.h1>
          <div className=" relative">
            <Terminal />
            <BorderBeam colorFrom="#40C057" colorTo="#40C057" />
          </div>
        </div>
        <InfiniteMovingCardsDemo />

        <div className="">
          <Link href="/">
            <VelocityScroll
              text="JOIN US NOW!"
              default_velocity={2}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-gray-700 md:text-7xl md:leading-[5rem]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
