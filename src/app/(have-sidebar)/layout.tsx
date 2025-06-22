import { SideBar } from "@/components/SideBar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="">
      <div>
        <SideBar />
      </div>
      <div className="pl-[126px]">{children}</div>
    </section>
  );
}
