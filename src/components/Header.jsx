export default function Header() {
  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center space-x-12">
        {/* Left side */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
          <a href="#about" className="hover:text-red-600 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-red-600 transition-colors">
            Projects
          </a>
        </nav>

        <h1 className="text-3xl font-bold text-red-600">
          Rilyn Griffin
        </h1>

        {/* Right side */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
          <a href="#resume" className="hover:text-red-600 transition-colors">
            Resume
          </a>
          <a href="#contact" className="hover:text-red-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
