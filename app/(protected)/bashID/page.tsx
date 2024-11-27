"use client";
import React from "react";
import ID from "@/app/(protected)/_components/id";
import useCurrentUser from "@/hooks/use-current-user";
export default function BashID() {
  const user = useCurrentUser();
  return (
    <div className="h-full w-full">
      <ID
        user={{
          userName: user?.name || "",
          profileImage: user?.image || "",
        }}
      />
    </div>
  );
}
