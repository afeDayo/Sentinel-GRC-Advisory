import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const navItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseLink =
    "font-semibold text-[20px] xl:text-[22px] 2xl:text-[24px] transition-all duration-300 ease-in-out";
  const activeLink =
    "px-4 py-2 flex items-center justify-center rounded-[25px] bg-[#040B74] text-[#F5F5DC] scale-105";
  const inactiveLink =
    "px-4 py-2 flex items-center justify-center text-[#040B74] hover:bg-[#040B74]/10 hover:rounded-[25px] hover:scale-105";

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-[#F39B1F] bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="mx-auto flex h-[101px] lg:h-28 xl:h-32 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-5 sm:pt-0">
        {/* Logo */}
        <NavLink
          to="/"
          className="shrink-0 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/Sentinel LOGO 12.png"
            alt="Sentinel GRC Advisory logo"
            className="h-14 lg:h-16 xl:h-auto w-auto transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#040B74] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[533px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#F39B1F]`}
      >
        <div className="flex flex-col px-6 py-[100px] gap-2 text-center bg-[#18234AF0]">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 text-[18px] font-semibold rounded-[15px] transition-all duration-200 ${
                  isActive
                    ? "bg-[#040B74] text-[#F5F5DC]"
                    : "text-[#F5F5DC] hover:bg-[#040B74]/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
