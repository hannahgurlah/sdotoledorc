import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schools Division of Toledo City Research Congress 2026",
  description:
    "Official event portal for the Schools Division of Toledo City Research Congress 2026 on December 7, 2026, hosted by DepEd Schools Division of Toledo City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-red-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
