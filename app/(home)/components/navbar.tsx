"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-[99999] border-b border-primary/10 backdrop-blur">
      <div className="flex wrapper justify-between gap-4">
        <Link
          href="/"
          className="items-center font-bold text-primary text-2xl mt-2"
        >
          <Image src="/bash.png" alt="Logo" height={150} width={150}></Image>
        </Link>
        <div className="flex items-centre justify-center gap-5">
          <Button variant="outline" className=" text-white">
            LogIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
