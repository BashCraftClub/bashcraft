"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section className="h-full w-full bg-background relative flex items-center justify-center py-16">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight p-5">
            Join our newsletter
            <br />& stay updated
          </h2>
        </div>

        <div className="w-full max-w-md mx-auto lg:ml-48">
          <Link href="https://bashcraft.substack.com">
            <Button className="w-full p-5 font-medium hover:bg-background hover:text-[#40C057]">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
