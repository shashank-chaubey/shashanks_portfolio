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
        <nav aria-label="Main navigation" className="fixed z-50 flex w-full justify-center px-4 font-bold text-[#f4f1e8]">
            <div className="mt-6 hidden max-w-[560px] items-center justify-center rounded-full border border-[#f4f1e8]/15 bg-[#0b0d0a]/70 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:flex">
                <ul className="flex flex-row items-center gap-1">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="rounded-full px-4 py-2 text-sm text-[#f4f1e8]/75 transition-colors duration-300 ease-in-out hover:bg-[#d8ff63] hover:text-[#0b0d0a]">
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
                className="absolute right-5 top-5 z-50 rounded-full border border-[#f4f1e8]/30 bg-[#0b0d0a]/70 p-2 text-[#f4f1e8] backdrop-blur-xl md:hidden"
            >
                {nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
            </button>

            <div
                aria-hidden={!nav}
                className={`fixed inset-0 bg-[#0b0d0a]/98 backdrop-blur-xl transition-transform duration-300 md:hidden ${nav ? 'translate-x-0' : 'pointer-events-none -translate-x-full'}`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav} className="text-2xl transition-colors duration-300 hover:text-[#d8ff63]">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
