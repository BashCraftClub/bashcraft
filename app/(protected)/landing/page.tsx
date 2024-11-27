"use client";
import { WelcomeLetter } from "@/components/id/WelcomeLetter";
import { BashIDForm } from "@/components/id/BashIDForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleArrowLeft } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CircleArrowLeft
              onClick={() => router.push("/")}
              className=" text-[#40C057] "
            />
            <WelcomeLetter />
          </div>
          <div>
            <h2 className="mb-6 items-center justify-center lg:ml-48 ml-20">
              <Image
                src="/BASHID.png"
                height={200}
                width={200}
                alt="bashID"
              ></Image>
            </h2>
            <BashIDForm />
          </div>
        </div>
      </div>
    </div>
  );
}
