import { LoginForm } from "@/components/auth/login-form";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
const IDDemo = dynamic(() => import("@/components/auth/IdDemo"), {
  ssr: false,
});
export default function LoginPage() {
  return (
    <>
      <div className="w-full h-screen flex bg-black text-white">
        <Link href={"/"}>
          <CircleArrowLeft className="text-[#40C057] mx-10 my-10" />
        </Link>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <LoginForm />
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center bg-black p-8">
          <IDDemo />
        </div>
      </div>
    </>
  );
}
