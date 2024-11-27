"use client";
import useCurrentUser from "@/hooks/use-current-user";

export function WelcomeLetter() {
  const user = useCurrentUser();
  return (
    <div className="space-y-6 bg-black p-8 rounded-lg shadow-lg gap-10">
      <h2 className="text-3xl font-bold text-[#40C057]">
        Welcome to Bashcraft
      </h2>
      <div className="space-y-4 text-gray-300">
        <p>Dear {user?.name},</p>
        <p>
          We're thrilled to have you join our community of bash enthusiasts.
          Bashcraft is a place where command-line wizards come together to share
          knowledge, compete in challenges, and push the boundaries of shell
          scripting.
        </p>
        <p>
          Get ready to embark on an exciting journey filled with terminals,
          scripts, and the occasional segmentation fault. Don't forget to grab
          your BashID to participate in our events!
        </p>
        <p>Happy bashing!</p>
      </div>
      <div className="mt-8 flex items-center justify-start space-x-4">
        <div>
          <p className="text-[#40C057] font-semibold">Aditya Joshi</p>
          <p className="text-gray-400 text-sm">President</p>
        </div>
      </div>
    </div>
  );
}
