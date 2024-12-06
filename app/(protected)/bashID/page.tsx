"use client";
import React from "react";
import ID from "@/app/(protected)/_components/id";
import useCurrentUser from "@/hooks/use-current-user";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import useCurrentProfile from "@/hooks/use-current-profile";
import { Loader2 } from "lucide-react";

export default function BashID() {
  const user = useCurrentUser();
  const profileImage = useCurrentProfile();
  const router = useRouter();

  // Check if either user or profileImage is still loading
  const isLoading = !user || !profileImage;

  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div className="flex gap-2 justify-center items-center h-[calc(100vh-100px)]">
          <Loader2 className="animate-spin text-[#40C057]" size={48} />
          <div className=" flex text-white items-center justify-center">
            Generating Your ID
          </div>
        </div>
      ) : (
        <div className="h-full w-full">
          <div className="bg-black p-8 flex items-center justify-between">
            <CircleArrowLeft
              onClick={() => router.push("/dashboard")}
              className="text-[#40C057]"
            />
          </div>
          <ID
            user={{
              userName: user.name || "",
              profileImage: profileImage,
            }}
          />
        </div>
      )}
    </div>
  );
}
