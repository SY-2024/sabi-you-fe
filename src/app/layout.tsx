import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/components/auth/Providers";

export const metadata: Metadata = {
  title: "Sabi you",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
