import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({isOpen, handleOpen}) => {

    // Toggle the mobile menu
    const toggleMenu = () => {
        handleOpen();
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // element.scrollIntoView({ behavior: 'smooth' });
            const yOffset = -80;  // Offset value (height of the navbar)
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-50 shadow-md z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 border-b-gray-500">
                <div className="flex items-center justify-between h-16">
            
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">
                            <button onClick={() => scrollToSection('landing')} className="text-gray-800 hover:text-purple-900 tracking-widest">
                                KV
                            </button>
                        </h1>
                    </div>

                    {/* Links for large screens */}
                    <div className="hidden lg:flex space-x-8">
                        <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-purple-900">
                            ABOUT ME
                        </button>
                        <button onClick={() => scrollToSection('experience')} className="text-gray-800 hover:text-purple-900">
                            EXPERIENCE
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-800 hover:text-purple-900">
                            PROJECTS
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-purple-900">
                            CONTACT
                        </button>
                    </div>

                    {/* Hamburger Menu Icon for small screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {/* Hamburger Icon (bars) */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
            </div>
        </div>

        {/* Mobile Menu (Animated) */}
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-neutral-50 shadow-lg px-4 pb-6
            flex flex-col gap-1"
            >
                
                <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-purple-900">
                    ABOUT ME
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-800 hover:text-purple-900">
                    EXPERIENCE
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-800 hover:text-purple-900">
                    PROJECTS
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-purple-900">
                    CONTACT
                </button>
                
            </motion.div>
        )}
        </nav>
    );
};

export default Navbar;
