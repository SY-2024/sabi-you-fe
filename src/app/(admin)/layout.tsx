import NavBar from "@/components/admin/NavBar";
import Header from "@/components/admin/header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <NavBar />
      <div className="flex-grow h-full overflow-hidden flex flex-col">
        <Header />
        <div className="flex-grow w-full">{children}</div>
      </div>
    </div>
  );
}
