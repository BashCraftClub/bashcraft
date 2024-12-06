"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/use-current-user";
export default function Dashboard() {
  const router = useRouter();
  const user = useCurrentUser();
  const name = user?.name || "";
  return (
    <div className=" flex items-center gap-10 justify-center flex-col bg-black text-white h-full w-full">
      <h1>Welcome, {name}</h1>
      <div className=" flex items-center justify-center gap-5">
        <Button onClick={() => signOut()}>Logout</Button>
        <Button onClick={() => router.push("/bashID")}>Your ID</Button>
        <Button onClick={() => router.push("/")}>Home</Button>
      </div>
    </div>
  );
}
