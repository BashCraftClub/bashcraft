"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={events} direction="right" speed="slow" />
      <InfiniteMovingCards items={events} direction="left" speed="slow" />
    </div>
  );
}

const events = [
  {
    imageurl: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1717966994/bash/ev1_xrqoug.png",
    title: "EVENT-1",
  },
  {
    imageurl: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1717966995/bash/ev2_udyiul.png",
    title: "EVENT-2",
  },
  {
    imageurl: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1717966995/bash/ev3_oyqdji.png",
    title: "EVENT-3",
  },
  {
    imageurl: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1717966995/bash/ev4_juuvbu.png",
    title: "EVENT-4",
  },
  {
    imageurl: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1717966995/bash/ev5_t50bgo.png",
    title: "EVENT-5",
  },
];
