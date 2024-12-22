"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex justify-center w-full">
      <ul className="flex items-center justify-center gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-sky-500 ${pathname === link.href ? "bg-sky-100 text-sky-600" : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
