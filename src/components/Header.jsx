import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinksLeft = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  const navLinksRight = [
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center">
        {/* Left nav for desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
          {navLinksLeft.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Name */}
        <h1 className="text-3xl font-bold text-red-600 mx-6 md:mx-12">
          Rilyn Griffin
        </h1>

        {/* Right nav for desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
          {navLinksRight.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden ml-auto text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-3 flex flex-col uppercase text-center">
          {navLinksLeft.concat(navLinksRight).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)} 
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
