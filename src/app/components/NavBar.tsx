"use client";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="w-full">
      <div className="flex justify-end items-center space-x-4 px-4 py-2">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-white no-underline hover:text-gray-300 transition-colors duration-300">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
