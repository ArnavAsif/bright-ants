import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-pc.svg";
import mobileLogo from "../../assets/logo-mobile.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import downArrow from "../../assets/drop-down-mobile.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to /contact route if not on homepage
      navigate("/contact");
    }
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileOpen || menuClosing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileOpen, menuClosing]);

  // Handle closing with animation
  const handleCloseMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setIsMobileOpen(false);
      setMenuClosing(false);
    }, 300); // duration should match Tailwind animation
  };

  return (
    <nav className="max-w-[1344px] font-figtree py-5 sticky top-0 z-[999] bg-[#1A191C] mx-auto">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <button className="lg:hidden" onClick={() => setIsMobileOpen(true)}>
            <img
              src={menuIcon}
              alt="Open Menu"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </button>

          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 hidden lg:block"
            />
          </Link>
          <Link to="/">
            <img
              src={mobileLogo}
              alt="Mobile Logo"
              className="h-7 sm:h-8 md:h-9 lg:hidden"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-xs sm:text-sm md:text-base tracking-wide uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 transition"
                  : "hover:text-red-500 transition text-white"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 transition"
                  : "hover:text-red-500 transition text-white"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition text-white">
              Blog
            </a>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 transition"
                  : "hover:text-red-500 transition text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <button
            onClick={handleClick}
            className="bg-[#EA1B26] text-white font-bold transition-all duration-200
                 text-xs sm:text-sm md:text-base xl:text-lg 
                 px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 
                 hover:bg-white hover:text-[#EA1B26]"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide-Up Animation */}
      {isMobileOpen && (
        <div
          className={`
                        fixed top-0 left-0 w-full h-full bg-zinc-900 text-white px-4 py-6 z-[100] overflow-y-auto
                        transform transition-transform duration-300 ease-in-out
                        ${
                          menuClosing
                            ? "-translate-y-full opacity-0"
                            : "translate-y-0 opacity-100"
                        }
                    `}
        >
          <div className="flex justify-between items-center mb-6">
            <img
              src={logo}
              alt="Logo"
              className="h-[24px] sm:h-[26px] md:h-[28px]"
            />
            <button onClick={handleCloseMenu}>
              <img
                src={closeIcon}
                alt="Close"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </button>
          </div>

          <ul className="flex flex-col gap-5 text-base md:text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                onClick={handleCloseMenu}
                className="hover:text-red-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleCloseMenu}
                className="hover:text-red-500"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <div className="flex items-center justify-between w-full">
                {/* Services link */}
                <NavLink
                  to="/service"
                  onClick={handleCloseMenu}
                  className={`transition ${
                    isServicesOpen
                      ? "pb-2 relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-2 after:border-[#EA1B26]"
                      : ""
                  }`}
                >
                  Services
                </NavLink>

                {/* Dropdown toggle */}
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="ml-2"
                >
                  <img
                    src={downArrow}
                    alt="Toggle"
                    className={`w-3 h-2 transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown menu */}
              {isServicesOpen && (
                <ul className="mt-4 space-y-2 font-normal">
                  <li>
                    <NavLink
                      to="/service/graphicsDesign"
                      onClick={handleCloseMenu}
                      className="hover:text-red-500"
                    >
                      Graphics Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/digitalMediaDesign"
                      onClick={handleCloseMenu}
                      className="hover:text-red-500"
                    >
                      Digital Media Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/webDesign"
                      onClick={handleCloseMenu}
                      className="hover:text-red-500"
                    >
                      Web Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/UIandUX"
                      onClick={handleCloseMenu}
                      className="hover:text-red-500"
                    >
                      UI and UX
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service/wordPress"
                      onClick={handleCloseMenu}
                      className="hover:text-red-500"
                    >
                      WordPress
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#"
                onClick={handleCloseMenu}
                className="hover:text-red-500"
              >
                Blog
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleCloseMenu}
                className="hover:text-red-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
