import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fern Does Stuff",
  description: "My Personal Homepage :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={MontserratFont.className}
      >
        {children}
      </body>
    </html>
  );
}
