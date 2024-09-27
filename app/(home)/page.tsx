import { ModeToggle } from "@/components/ui/theme-toggle";
import React from "react";
import Navbar from "./components/navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" max-w-7xl mx-auto p-5">
        <Navbar />
        <div className="">{"visitor@bashcraft:~$"}</div>
      </div>
    </div>
  );
}
