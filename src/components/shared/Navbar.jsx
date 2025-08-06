import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import mobileLogo from '../../assets/mobile-logo.png';
import menuIcon from '../../assets/menu-icon.png';
import closeIcon from '../../assets/close-icon.png';
import downArrow from '../../assets/dropDown.png';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="w-full text-white font-figtree py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-10">
            <div className="max-w-[1344px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                {/* Logo + Mobile Button */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <button className="lg:hidden" onClick={() => setIsMobileOpen(true)}>
                        <img src={menuIcon} alt="Open Menu" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </button>

                    <img src={logo} alt="Logo" className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 hidden lg:block" />
                    <img src={mobileLogo} alt="Mobile Logo" className="h-7 sm:h-8 md:h-9 lg:hidden" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 xl:gap-10 text-xs sm:text-sm md:text-base tracking-wide uppercase">
                    <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
                    <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
                    <li><a href="#" className="hover:text-red-500 transition">Services</a></li>
                    <li><a href="#" className="hover:text-red-500 transition">Blog</a></li>
                    <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
                </ul>

                {/* CTA Button */}
                <div>
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#EA1B26] text-white font-bold transition-all duration-200
                                   text-xs sm:text-sm md:text-base xl:text-lg 
                                   px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 
                                   hover:bg-white hover:text-[#EA1B26]"
                    >
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white px-4 py-6 z-50 transition-all duration-300 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <img src={logo} alt="Logo" className="h-[24px] sm:h-[26px] md:h-[28px]" />
                        <button onClick={() => setIsMobileOpen(false)}>
                            <img src={closeIcon} alt="Close" className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-5 sm:gap-6 text-sm sm:text-base md:text-lg font-semibold">
                        <li><a href="#" className="hover:text-red-500">Home</a></li>
                        <li><a href="#" className="hover:text-red-500">About Us</a></li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                <span className={`transition ${isServicesOpen ? 'pb-2 relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-2 after:border-[#EA1B26]' : ''}`}>Services</span>
                                <img
                                    src={downArrow}
                                    alt="Toggle"
                                    className={`w-3 h-2 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {isServicesOpen && (
                                <ul className="mt-4 space-y-2 font-normal text-xs sm:text-sm">
                                    <li><a href="#" className="hover:text-red-500">Graphics Design</a></li>
                                    <li><a href="#" className="hover:text-red-500">Digital Media Design</a></li>
                                    <li><a href="#" className="hover:text-red-500">Web Design</a></li>
                                    <li><a href="#" className="hover:text-red-500">UI and UX</a></li>
                                    <li><a href="#" className="hover:text-red-500">WordPress</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#" className="hover:text-red-500">Blog</a></li>
                        <li><a href="#" className="hover:text-red-500">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
