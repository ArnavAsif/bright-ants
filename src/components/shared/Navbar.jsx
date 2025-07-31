import React, { useState } from 'react';
import logo from '../../assets/logo.png'; // Desktop logo
import mobileLogo from '../../assets/mobile-logo.png';
import menuIcon from '../../assets/menu-icon.png';
import closeIcon from '../../assets/close-icon.png';
import downArrow from '../../assets/dropDown.png';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    
    return (
        <nav className="w-full text-white pt-[18px] pb-[19px] font-figtree">
            <div className="max-w-[1344px] mx-auto flex justify-between items-center">
                {/* Logo and Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={() => setIsMobileOpen(true)}>
                        <img src={menuIcon} alt="Open" className="w-6 h-6" />
                    </button>

                    {/* Logos */}
                    <img src={logo} alt="Logo" className="h-10 hidden lg:block" />
                    <img src={mobileLogo} alt="Mobile Logo" className="h-8 lg:hidden" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-[60px] text-base tracking-wide uppercase">
                    <li><a href="#" className="hover:text-red-500">Home</a></li>
                    <li><a href="#" className="hover:text-red-500">About Us</a></li>
                    <li><a href="#" className="hover:text-red-500">Services</a></li>
                    <li><a href="#" className="hover:text-red-500">Blog</a></li>
                    <li><a href="#" className="hover:text-red-500">Contact</a></li>
                </ul>

                {/* CTA Button (Desktop and Mobile) */}
                <div>
                    <a
                        href="#"
                        className="bg-[#EA1B26] hover:bg-white hover:text-[#EA1B26] text-white px-[25px] py-[9px] font-bold text-lg transition-all duration-200"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white p-6 z-50 transition-all duration-300">
                    <div className="flex justify-between items-center mb-6">
                        {/* Show desktop logo in mobile menu */}
                        <img src={logo} alt="Logo" className="h-[26px]" />
                        <button onClick={() => setIsMobileOpen(false)}>
                            <img src={closeIcon} alt="Close" className="w-6 h-6" />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-[30px] text-lg font-semibold">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                <span className={`${isServicesOpen ? 'pb-[13px] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-[#EA1B26]' : ''}`}>Services</span>
                                <img
                                    src={downArrow}
                                    alt="Toggle"
                                    className={`w-3 h-2 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {isServicesOpen && (
                                <ul className="mt-[18px] space-y-2 font-normal">
                                    <li><a href="#">Graphics Design</a></li>
                                    <li><a href="#">Digital Media Design</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">UI and UX</a></li>
                                    <li><a href="#">WordPress</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
