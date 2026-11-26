import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz by Manoj",
  description:
    "PDF Vertical Cut, Manual Horizontal Cut, PDF to Quiz Smart Tool, and Custom Quiz Maker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

