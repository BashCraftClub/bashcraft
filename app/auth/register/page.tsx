import IDDemo from "@/components/auth/IdDemo";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <>
      <div className="w-full h-screen flex bg-black text-white">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <RegisterForm />
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center bg-black p-8">
          <IDDemo />
        </div>
      </div>
    </>
  );
}
