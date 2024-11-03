"use client";
import ID from "@/app/auth/id";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const SettingsPage = () => {
  const session = useSession();
  const name = session.data?.user.name || "";
  const image = session.data?.user.image || "";
  console.log(session);
  const onClick = () => {
    signOut();
  };

  return (
    <div className=" bg-black text-white h-full w-full flex">
      <div>
        <ID
          user={{
            userName: name,
            profileImage: image,
          }}
        />
      </div>

      <div className=" flex items-center justify-center">
        <button
          type="submit"
          onClick={onClick}
          className="text-[#40C057] mt-10 font-bold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
