"use client";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Terminal from "./terminal";
import { BorderBeam } from "@/components/ui/border-beam";
import AnimationContainer from "@/components/animation-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export function Hero() {
  const router = useRouter();

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
        <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-background" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-background"></span>
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
              #WeAreHiring
            </span>
          </button>
          <h1 className="text-white text-center py-6 text-5xl font-bold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
            Welcome to{" "}
            <span className="text-transparent bg-gradient-to-r from-[#40C057] to-green-600 bg-clip-text inline-bloc">
              BashCraft
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-white md:text-xl text-balance">
            The place to collaborate,create and
            <br className="md:block" />
            <span className="md:block">
              push the boundaries of what's possible
            </span>
          </p>
          <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
            <Button asChild>
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSet2OxNsCdiiDH-U512SJlDNXjHxsLrfaoO1Hh7-9DpFJz01Q/viewform"
                }
                className="flex items-center"
              >
                Join Us Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimationContainer>

        <AnimationContainer
          delay={0.2}
          className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
        >
          <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
          <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              colorFrom="#40C057"
              colorTo="#40C057"
            />
            <Terminal />
            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
          </div>
        </AnimationContainer>
      </div>
    </MaxWidthWrapper>
  );
}
