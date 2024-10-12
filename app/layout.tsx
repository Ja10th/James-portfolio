import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Oluwaleye Portfolio",
  description: "Show the work James has done in technical writing and front end development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased slim-font">
        {children}
      </body>
    </html>
  );
}
