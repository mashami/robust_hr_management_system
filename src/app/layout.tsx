import type { Metadata } from "next";
import "../styles/globals.scss";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "HR Management System",
  description: "Modern HR Management Platform"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,

          "min-h-screen"
        )}
        style={{
          background: "linear-gradient(68.83deg, #DCE5F2 4.49%, #F1F4F9 98.4%)"
        }}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
