import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ID from "./ID";

export default function Auth() {
  return (
    <>
      <div className="w-full h-screen flex bg-black text-white">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="mt-2 text-sm text-white">
                Enter your email below to login to your account
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[#40C057] placeholder-[#40C057] text-white bg-black focus:outline-none focus:ring-[#40C057] focus:border-[#40C057] focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="sr-only">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[#40C057] placeholder-[#40C057] text-white bg-black focus:outline-none focus:ring-[#40C057] focus:border-[#40C057] focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-white focus:ring-[#40C057] border-background rounded bg-black"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-white"
                  >
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-white hover:text-[#40C057]"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#40C057] hover:bg-[#40C057] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40C057]"
                >
                  Sign in
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-white">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-[#40C057] rounded-md shadow-sm bg-black/80 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40C057]"
                >
                  <span className="sr-only">Sign in with Google</span>

                  <span className="ml-2">Google</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center bg-black p-8">
          <ID />
        </div>
      </div>
    </>
  );
}
