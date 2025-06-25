/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionUser = await getCurrentUser();

  if (!sessionUser) {
    throw new Error("User not found");
  }

  const user = (await prisma.user.findFirst({
    where: { id: sessionUser?.id },
    select: {
      id: true,
      name: true,
      role: true
    }
  })) as any;

  if (!user) {
    throw new Error("User not found");
  }
  return (
    <section className="">
      <div className="fixed z-50">
        <SideBar />
      </div>
      <div>
        <div className="sticky top-0 z-40 md:block hidden">
          <NavBar user={user} />
        </div>

        <div className="md:pl-[126px] pl-0 z-30 relative">
          <div className="container pt-5"> {children} </div>
        </div>
      </div>
    </section>
  );
}
