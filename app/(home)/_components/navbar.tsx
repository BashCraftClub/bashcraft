"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/use-current-user";

const Navbar = () => {
  const router = useRouter();
  const user = useCurrentUser();
  return (
    <div className="sticky top-0 left-0 w-full z-[99999] border-b border-primary/10 backdrop-blur">
      <div className="flex wrapper justify-between gap-4">
        <Link href="/" className="items-center font-bold text-primary text-2xl">
          <Image src="/bash.png" alt="Logo" height={200} width={200}></Image>
        </Link>
        <div className="flex items-centre justify-center gap-5">
          {user ? (
            <Button
              variant="outline"
              onClick={() => router.push("/dashboard")}
              className=" text-white"
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => router.push("/auth/login")}
              className=" text-white"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
