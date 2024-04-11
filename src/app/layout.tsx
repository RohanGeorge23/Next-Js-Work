import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RG NextJS app",
  description: "A Full stack application by RG23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 border-b text-center text-xl font-bold	tracking-wider bg-blue-100	">
          RG NEXT APP

        </div>
        
        {children}
        
        </body>
    </html>
  );
}
