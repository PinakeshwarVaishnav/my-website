"use client";
import "./globals.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-4 lg:mt-8 mb-20 lg:mb-40 bg-gray-900 text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-gray-900 to-gray-900">
        {children}
      </body>
    </html>
  );
}
