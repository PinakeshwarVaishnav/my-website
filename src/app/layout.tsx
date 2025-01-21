"use client";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "next-themes";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
