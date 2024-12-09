"use client";

import { Events } from "./_components/events";

import { Hero } from "./_components/hero";
import TeamsPage from "./_components/team";
import NewsletterSection from "./_components/newletter";

export default function Home() {
  return (
    <>
      <div className="flex flex-col wrapper text-primary gap-3">
        <div className="max-w-screen py-20 min-h-screen">
          <Hero />
        </div>
        <Events />
        <TeamsPage />
        <NewsletterSection />
      </div>
    </>
  );
}
