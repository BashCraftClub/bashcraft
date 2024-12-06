"use client";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SettingsPage = () => {
  const user = useCurrentUser();
  const name = user?.name || "";
  const image = user?.image || "";
  const router = useRouter();

  const onClick = () => {
    signOut();
  };

  return (
    <div className=" bg-black text-white h-full w-full flex items-center justify-center">
      <div></div>
      <div className=" flex flex-col p-10">
        <Image src={image} alt="profile" width={100} height={100} />
      </div>

      <div className=" flex items-center flex-col justify-center gap-5">
        <Button onClick={onClick}>Logout</Button>
        <Button onClick={() => router.push("/landing")}>Get ID</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
