import LoginForm from "@/components/auth/LoginForm";
import {Logo} from "images/index";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login | Sabi you",
  description: "",
};
export default function Login() {
  return (
    <main className="w-[491px]">
      <Image src={Logo} width={54} height={40} alt="logo" />
      <p className="mt-8 text-32 text-text-primary mb-2">Welcome Back</p>
      <p className="text-lg text-text-secondary/70 mb-10">
        Welcome back! Please enter your details below
      </p>

      <LoginForm />
    </main>
  );
}
