"use client"

import Link from "next/link";
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Stack", path: "#stack" },
    { title: "Upcoming", path: "#upcoming" },
    { title: "Contact", path:"#contact" }
];
export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }
    return (
        <nav aria-label="Main navigation" className="fixed z-50 flex w-full justify-center px-4 text-white font-bold">
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl 
            hidden md:flex items-center justify-center p-2 max-w-[520px] mx-auto">
                <ul className="flex flex-row p-2 space-x-7">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="transform hover:text-white/50 transistion-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                type="button"
                onClick={toggleNav}
                aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={nav}
                className="absolute right-5 top-5 z-50 rounded-lg border border-white/70 p-2 text-white/70 md:hidden"
            >
                {nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
            </button>

            <div
                aria-hidden={!nav}
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${nav ? 'translate-x-0' : 'pointer-events-none -translate-x-full'}`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav} className="text-2xl transition-colors duration-300 hover:text-white/50">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
