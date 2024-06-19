import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import {Logo} from "images/index";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forgot Password | Sabi you",
  description: "",
};
export default function ForgotPassword() {
  return (
    <main className="w-[491px]">
      <Image src={Logo} width={54} height={40} alt="logo" />
      <p className="mt-8 text-32 text-text-primary mb-2">Reset Your Password</p>
      <p className="text-lg  text-text-secondary/70 mb-10">
        Enter the email address you registered with.
      </p>
      <ForgotPasswordForm />
    </main>
  );
}
