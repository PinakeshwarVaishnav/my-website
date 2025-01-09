"use client";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
