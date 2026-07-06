"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import profilepic from "@/assets/profilepic.png"
import Image from "next/image"
import { FiLinkedin, FiArrowUpRight, FiGithub } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"
import { Code2, Sparkles } from "lucide-react"

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
            className="relative grid min-h-[100svh] place-content-center overflow-hidden bg-[radial-gradient(125%_125%_at_50%_0%,#09070f_48%,#6d28d9)] px-4 pb-4 pt-20 text-gray-200 sm:px-6 sm:pb-8 sm:pt-24 lg:pb-10 lg:pt-28"
        >
            <div className="z-10 flex w-full max-w-4xl -translate-y-2 flex-col items-center text-center sm:-translate-y-3">
                <span className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-purple-300/25 bg-purple-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-200 shadow-[0_0_28px_rgba(216,180,254,0.12)] backdrop-blur-md sm:mb-2 sm:px-4 sm:py-2 sm:text-xs lg:text-sm">
                    <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_10px_#d8b4fe]" />
                    Aspiring Software Engineer
                </span>

                <p className="text-3xl font-black leading-none text-white/40 sm:text-4xl lg:text-5xl">Hi, I am</p>

                <h1 className="min-h-[2.75rem] max-w-3xl break-words bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-4xl font-black leading-tight text-transparent sm:min-h-[4rem] sm:text-6xl lg:min-h-[4.75rem] lg:text-7xl">
                    {displayText}
                    <span className="animate-pulse text-white">|</span>
                </h1>

                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                    sizes="(max-width: 640px) 125px, (max-width: 1024px) 165px, 195px"
                    className="h-auto w-[125px] sm:w-[165px] lg:w-[195px]"
                />

                <div className="mb-3 mt-1 grid max-w-3xl gap-2 text-center sm:mb-4 sm:mt-2 sm:grid-cols-2 sm:gap-3">
                    <div className="group relative overflow-hidden rounded-xl border border-purple-300/20 bg-gradient-to-br from-purple-300/[0.11] to-white/[0.025] p-3 shadow-[0_18px_55px_rgba(88,28,135,0.16)] backdrop-blur-md sm:rounded-2xl sm:p-4 lg:p-5">
                        <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-purple-400/15 blur-2xl transition group-hover:bg-purple-400/25" />
                        <span className="mx-auto mb-2 inline-flex rounded-lg bg-purple-300/15 p-1.5 text-purple-200 ring-1 ring-purple-200/20 sm:mb-3 sm:rounded-xl sm:p-2">
                            <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <p className="relative text-justify text-xs font-semibold leading-[1.35rem] tracking-[-0.01em] text-gray-100 sm:text-sm sm:leading-6 lg:text-base">
                            Passionate about <span className="bg-gradient-to-r from-purple-100 to-purple-400 bg-clip-text font-black text-transparent">software development</span> and using technology to build impactful applications. I enjoy <span className="text-purple-200">solving problems</span>, writing code, and turning ideas into practical products.
                        </p>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl border border-purple-300/15 bg-gradient-to-br from-purple-400/[0.08] to-white/[0.025] p-3 shadow-[0_18px_55px_rgba(88,28,135,0.12)] backdrop-blur-md sm:rounded-2xl sm:p-4 lg:p-5">
                        <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-purple-400/15 blur-2xl transition group-hover:bg-purple-400/25" />
                        <span className="mx-auto mb-2 inline-flex rounded-lg bg-purple-300/10 p-1.5 text-purple-200 ring-1 ring-purple-200/15 sm:mb-3 sm:rounded-xl sm:p-2">
                            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <p className="relative text-justify text-xs font-medium leading-[1.35rem] text-gray-300 sm:text-sm sm:leading-6 lg:text-base">
                            Currently strengthening my skills in system design, efficient algorithms, modern development frameworks and always open to connecting, collaborating, and learning with other developers.
                        </p>
                    </div>
                </div>

                {/* Social Buttons */}
                <div className="flex max-w-md flex-wrap justify-center gap-2 sm:gap-3">
                    <motion.a
                        href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-1.5 rounded-full border border-purple-300/45 px-2.5 py-1.5 text-xs shadow-[0_4px_24px_rgba(192,132,252,0.22)] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
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
                        className="flex w-fit items-center gap-1.5 rounded-full border border-purple-300/45 px-2.5 py-1.5 text-xs shadow-[0_4px_24px_rgba(192,132,252,0.22)] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
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
                        className="flex w-fit items-center gap-1.5 rounded-full border border-purple-300/45 px-2.5 py-1.5 text-xs shadow-[0_4px_24px_rgba(192,132,252,0.22)] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
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
