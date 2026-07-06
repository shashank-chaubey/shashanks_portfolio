"use client"

import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import project1 from "@/assets/project1.png"
import tableau1 from "@/assets/tableau1.png"
import tableau2 from "@/assets/tableau2.png"
import tableau3 from "@/assets/tableau3.png"
import RProject1 from "@/assets/RProject1.png"
import { motion } from 'framer-motion'
import { ArrowUpDown, ArrowUpRight, Bot, MessageSquare, Video, Youtube } from 'lucide-react'

type Project = {
    id: number
    category: string
    title: string
    description: string
    image?: StaticImageData
    link: string
}

const projects: Project[] = [
    { 
        id:1, 
        category: 'Data Analytics',
        title: 'Ecommerce Year-to-Date (YTD) sales analysis using Tableau', 
        description: 'This visualization provides key insights into business performance, including total sales and profit, order volumes, category-wise sales distribution, and monthly customer acquisition trends across various markets.', 
        image: tableau1,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/ECOMMERCEANALYSIS_17236946835530/Dashboard1'
    },
    { 
        id:2, 
        category: 'Data Analytics',
        title: 'Data Science job market trends using Tableau', 
        description: 'Global Data Science job trends by role, salary and location', 
        image: tableau2,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/DataScienceJobMarketTrends/Dashboard1'
    },
    { 
        id:3, 
        category: 'Data Analytics',
        title: 'Breaking Bad Episode Analytics in Tableau',
        description: 'Comprehensive dashboard visualizing episode data, ratings, and viewership trends of Breaking Bad', 
        image: tableau3,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/BreakingBad_17353206913580/Dashboard1'
    },
    { 
        id:4, 
        category: 'Next.js & Web',
        title: 'AI content generator using Next.js', 
        description: 'An AI tool that helps you supercharge your creativity by helping you to write, innovate and ideate like never before', 
        image: project1,
        link: 'https://github.com/sh4sh4nk-9/AI-content-generator'
    },
    {
        id:5, 
        category: 'Data Analytics',
        title: 'Apple products Visualization in R', 
        description: 'A dataset of 60+ apple products that Visualizes, Star Ratings by RAM, Sale Price and Top 15 Apple Products by Star Rating using R libraries like ggplot2 and dplyr.', 
        image: RProject1,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7331397678754361345/'  
    },
    {
        id:6,
        category: 'Next.js & Web',
        title: 'YouTube Sort Extension',
        description: 'A browser extension created to make sorting YouTube content simpler and more convenient.',
        link: 'https://github.com/shashank-chaubey/youtube_sort_extension'
    },
    {
        id:7,
        category: 'Next.js & Web',
        title: 'ChatAI',
        description: 'ChatAI is a full-stack platform for running video meetings with custom AI agents. Create an agent with its own instructions, start a recorded call, and receive a transcript and AI-generated summary when the meeting ends. You can then revisit the meeting and chat with the agent using the meeting context.',
        link: 'https://github.com/shashank-chaubey/chatai'
    }
]

const categories = ['Data Analytics', 'Next.js & Web']

export const Portfolio = () => {
  return (
    <motion.section 
        id="projects" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden py-20 text-white sm:py-24 lg:py-32"
    >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(126,34,206,0.09),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 max-w-2xl sm:mb-14">
                <p className="mb-3 bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-sm font-black uppercase tracking-[0.3em] text-transparent">Selected work</p>
                <h2 className="text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
                    My <span className="bg-gradient-to-r from-white/40 to-purple-300 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                    A collection of dashboards, data stories, and applications built to turn ideas and information into useful experiences.
                </p>
            </div>

            <div className="space-y-16">
                {categories.map((category) => (
                    <div key={category}>
                        <div className="mb-6 flex items-center gap-4">
                            <h3 className="shrink-0 text-xl font-black tracking-tight text-gray-100 sm:text-2xl">{category}</h3>
                            <div className="h-px w-full bg-gradient-to-r from-purple-300/35 to-transparent" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
                            {projects.filter((project) => project.category === category).map((project, index) => (
                                <motion.article
                                    key={project.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.18 }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-purple-300/35 hover:bg-white/[0.055]"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                            />
                                        ) : project.id === 7 ? (
                                            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_58%)]">
                                                <div className="relative flex h-28 w-40 items-center justify-center rounded-3xl border border-purple-300/20 bg-black/45 shadow-2xl sm:h-32 sm:w-48">
                                                    <Video className="h-12 w-12 text-purple-300 sm:h-14 sm:w-14" />
                                                    <span className="absolute -left-4 -top-4 rounded-xl border border-white/10 bg-zinc-900 p-2.5 text-purple-300 shadow-xl">
                                                        <Bot className="h-5 w-5" />
                                                    </span>
                                                    <span className="absolute -bottom-4 -right-4 rounded-xl bg-purple-300 p-2.5 text-black shadow-xl">
                                                        <MessageSquare className="h-5 w-5" />
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_55%)]">
                                                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-black/40 shadow-2xl sm:h-32 sm:w-32">
                                                    <Youtube className="h-14 w-14 text-red-500 sm:h-16 sm:w-16" />
                                                    <span className="absolute -bottom-3 -right-3 rounded-xl bg-purple-300 p-2.5 text-black shadow-xl">
                                                        <ArrowUpDown className="h-5 w-5" />
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                    </div>

                                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                                        <h4 className="bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-xl font-black leading-snug tracking-tight text-transparent sm:text-2xl">
                                            {project.title}
                                        </h4>
                                        <p className="mt-3 text-sm font-medium leading-7 text-gray-400 sm:text-base">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-300/35 bg-purple-300/10 px-4 py-3 text-sm font-bold text-purple-200 transition hover:bg-purple-300 hover:text-black sm:w-fit sm:rounded-full sm:px-5"
                                        >
                                            View project
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}
