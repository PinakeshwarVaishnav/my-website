"use client";
import NavBar from "./components/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
