"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion"
import profilepic from "@/assets/profilepic.png"
import obj1 from "@/assets/obj1.png"
import Image from "next/image"
import { FiLinkedin, FiArrowUpRight, FiGithub } from "react-icons/fi"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
const phrases = ["Shashank Chaubey", "A Tech Freak.", "A Day Debugger.", "A Night Dreamer."]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])
    const [displayText, setDisplayText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

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

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            style={{ backgroundImage }}
            id="about"
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for projects.
                </span>

                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>

                <h1 className="max-w-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-xl md:text-7xl min-h-[64px]">
                    {displayText}
                    <span className="animate-pulse text-white">|</span>
                </h1>

                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                />

                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image src={obj1} alt="object" width={30} className="rounded-2xl mx-auto" />
                    <Image src={obj1} alt="object" width={30} className="rounded-2xl mx-auto" />
                    <Image src={obj1} alt="object" width={30} className="rounded-2xl mx-auto" />
                    {/* <p className="font-medium px-2">add clients later</p> */}
                </div>

                <p className="my-6 max-w-xl text-center">You can find me somewhere in Bengaluru.</p>

                {/* Social Buttons */}
                <div className="flex gap-3">
                    <motion.a
                        href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ border, boxShadow }}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                    >
                        <FiLinkedin />
                        LinkedIn
                        <FiArrowUpRight />
                    </motion.a>
                    <motion.a
                        href="https://github.com/sh4sh4nk-9"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ border, boxShadow }}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                    >
                        <FiGithub />
                        GitHub
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
