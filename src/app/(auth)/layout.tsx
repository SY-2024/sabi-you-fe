import {AuthBg} from "images/index";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen overflow-hidden p-4">
      <div className="w-[55%] flex items-center justify-center">{children}</div>
      <div className="w-[45%] h-full">
        <Image
          src={AuthBg}
          alt="auth-background"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
