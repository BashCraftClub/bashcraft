"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Events() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden mb-10">
      <h1 className="font-semibold text-4xl text-white bg-clip-text text-transparent py-10">
        EVENTS GALLERY
      </h1>
      <InfiniteMovingCards items={events} direction="right" speed="slow" />
      <InfiniteMovingCards items={events} direction="left" speed="slow" />
    </div>
  );
}

const events = [
  {
    imageurl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894141/bash/sc2_max52a.jpg",
    title: "EVENT-1",
  },
  {
    imageurl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894281/bash/image7_me0cmv.jpg",
    title: "EVENT-2",
  },
  {
    imageurl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894047/bash/B5_iqxqmw.jpg",
    title: "EVENT-3",
  },
  {
    imageurl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894472/bash/IMG_5055_zpkt3q.jpg",
    title: "EVENT-4",
  },
  {
    imageurl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727967532/bash/image5_c3junl.png",
    title: "EVENT-5",
  },
];
