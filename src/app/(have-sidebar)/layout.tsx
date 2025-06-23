import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="">
      <div className="fixed z-50">
        <SideBar />
      </div>
      <div>
        <div className="sticky top-0 z-40">
          <NavBar />
        </div>

        <div className="pl-[126px] z-30 relative">
          <div className="container pt-5"> {children} </div>
        </div>
      </div>
    </section>
  );
}
