"use client";
import "./globals.css";
import NavBar from "./components/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40 bg-gray-900 text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
