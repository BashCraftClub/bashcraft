import ID from "@/app/auth/id";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <>
      <div className="w-full h-screen flex bg-black text-white">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <LoginForm />
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center bg-black p-8">
          <ID />
        </div>
      </div>
    </>
  );
}
