"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import profilepic from "@/assets/profilepic.png"
import Image from "next/image"
import { FiLinkedin, FiArrowUpRight, FiGithub } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

const phrases = ["Shashank Chaubey", "A Tech Freak.", "A Day Debugger.", "A Night Dreamer."]

export const Hero = () => {
    const [displayText, setDisplayText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]

        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplayText(currentPhrase.substring(0, charIndex + 1))
                setCharIndex(charIndex + 1)

                if (charIndex + 1 === currentPhrase.length) {
                    setTimeout(() => setDeleting(true), 1500)
                }
            } else {
                setDisplayText(currentPhrase.substring(0, charIndex - 1))
                setCharIndex(charIndex - 1)

                if (charIndex - 1 === 0) {
                    setDeleting(false)
                    setPhraseIndex((phraseIndex + 1) % phrases.length)
                }
            }
        }, deleting ? 30 : 60)

        return () => clearTimeout(timeout)
    }, [charIndex, deleting, phraseIndex])

    return (
        <motion.section
            id="about"
            className="relative grid min-h-[100svh] place-content-center overflow-hidden px-4 pb-4 pt-20 text-[#f4f1e8] sm:px-6 sm:pb-8 sm:pt-24 lg:pb-10 lg:pt-28"
        >
            <div className="z-10 flex w-full max-w-4xl -translate-y-2 flex-col items-center text-center sm:-translate-y-3">
                <span className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-[#f4f1e8]/15 bg-[#f4f1e8]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8ff63] shadow-[0_0_28px_rgba(216,255,99,0.08)] backdrop-blur-md sm:mb-2 sm:px-4 sm:py-2 sm:text-xs lg:text-sm">
                    <span className="h-2 w-2 rounded-full bg-[#d8ff63] shadow-[0_0_12px_#d8ff63]" />
                    Work with me
                </span>

                <p className="text-3xl font-black leading-none text-[#f4f1e8]/35 sm:text-4xl lg:text-5xl">Hi, I am</p>

                <h1 className="min-h-[2.5rem] w-full max-w-3xl whitespace-nowrap text-[clamp(1.75rem,9vw,4.5rem)] font-black leading-tight tracking-tight text-[#f4f1e8] sm:min-h-[4rem]">
                    {displayText}
                    <span className="animate-pulse text-[#d8ff63]">|</span>
                </h1>

                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                    sizes="(max-width: 640px) 125px, (max-width: 1024px) 165px, 195px"
                    className="h-auto w-[125px] sm:w-[165px] lg:w-[195px]"
                />

                <p className="mb-4 mt-3 max-w-2xl text-center text-sm font-semibold leading-6 text-[#cfd3c8] sm:mb-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                    Passionate about <span className="font-black text-[#d8ff63]">software development</span> and using technology to build impactful applications. I enjoy <span className="text-[#f4f1e8]">solving problems</span>, writing code, and turning ideas into practical products.
                </p>

                {/* Social Buttons */}
                <div className="flex max-w-md flex-wrap justify-center gap-2 sm:gap-3">
                    <motion.a
                        href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-1.5 rounded-full border border-[#f4f1e8]/20 bg-[#f4f1e8]/5 px-2.5 py-1.5 text-xs text-[#f4f1e8] transition hover:border-[#d8ff63] hover:bg-[#d8ff63] hover:text-[#0b0d0a] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        <FiLinkedin />
                        LinkedIn
                        <FiArrowUpRight />
                    </motion.a>
                    <motion.a
                        href="https://github.com/shashank-chaubey"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-1.5 rounded-full border border-[#f4f1e8]/20 bg-[#f4f1e8]/5 px-2.5 py-1.5 text-xs text-[#f4f1e8] transition hover:border-[#d8ff63] hover:bg-[#d8ff63] hover:text-[#0b0d0a] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        <FiGithub />
                        GitHub
                        <FiArrowUpRight />
                    </motion.a>
                    <motion.a
                        href="https://leetcode.com/u/9_shashank/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-1.5 rounded-full border border-[#f4f1e8]/20 bg-[#f4f1e8]/5 px-2.5 py-1.5 text-xs text-[#f4f1e8] transition hover:border-[#d8ff63] hover:bg-[#d8ff63] hover:text-[#0b0d0a] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        <SiLeetcode />
                        LeetCode
                        <FiArrowUpRight />
                    </motion.a>
                </div>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    )
}
