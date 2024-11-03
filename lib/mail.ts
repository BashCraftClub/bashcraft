import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `https://bashcraft.club/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: "onboarding@bashcraft.club",
    to: email,
    subject: "Please Verify Your Email",
    react: EmailTemplate({ verificationLink: confirmLink }),
  });
};
