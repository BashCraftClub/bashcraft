"use client";
import { Button } from "@/components/ui/button";
import FileUpload from "./FileUpload";
import { useRouter } from "next/navigation";

export function BashIDForm() {
  const router = useRouter();
  return (
    <div>
      <div>
        <FileUpload />
      </div>
      <Button
        onClick={() => router.push("/bashID")}
        className="w-full bg-[#40C057] hover:bg-[#2f9e48] text-white font-semibold"
      >
        Get ID
      </Button>
    </div>
  );
}
