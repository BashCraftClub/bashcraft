import React from "react";
import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className=" bg-black text-white h-full w-full">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <div className=" flex items-center justify-center">
          <button type="submit" className="text-[#40C057] mt-10 font-bold">
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
