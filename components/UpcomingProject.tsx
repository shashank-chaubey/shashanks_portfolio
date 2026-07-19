"use client"

import { motion } from "framer-motion"
import { Activity, ArrowUpRight, Bot, GitPullRequest, Github, ScanSearch } from "lucide-react"

const capabilities = [
  {
    title: "Automated code reviews",
    description: "Analyze changes and surface useful feedback before code is merged.",
    icon: ScanSearch,
  },
  {
    title: "GitHub API monitoring",
    description: "Track repository activity, pull requests, and important development signals.",
    icon: Activity,
  },
  {
    title: "Repository insights",
    description: "Bring review activity and project health into one clear workspace.",
    icon: GitPullRequest,
  },
]

export const UpcomingProject = () => {
  return (
    <section id="upcoming" className="scroll-mt-24 px-4 py-20 text-[#f4f1e8] sm:px-6 sm:py-24 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#f4f1e8]/12 bg-[#f4f1e8]/[0.035] p-6 sm:p-10 lg:p-14"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#d8ff63]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-[#f4f1e8]/8 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#d8ff63]/30 bg-[#d8ff63]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#d8ff63]">
                Upcoming project
              </span>
              <span className="flex items-center gap-2 text-sm text-[#f4f1e8]/45">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#d8ff63]" />
                In development
              </span>
            </div>

            <h2 className="text-5xl font-black leading-none sm:text-6xl md:text-7xl">
              Code <span className="text-[#f4f1e8]/35">Reviewer</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a6aaa0] sm:text-xl">
              My next big project: a smarter workspace for reviewing code and monitoring repositories through the GitHub API.
            </p>

            <a
              href="https://github.com/shashank-chaubey/codereviewer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d8ff63] px-5 py-3 font-bold text-[#0b0d0a] transition hover:bg-[#f4f1e8]"
            >
              Follow the build
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-[#f4f1e8]/10 bg-[#0b0d0a]/55 p-4 shadow-2xl sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#f4f1e8]/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-[#f4f1e8]/10 p-2.5 text-[#f4f1e8]">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Repository monitor</p>
                  <p className="text-xs text-[#f4f1e8]/35">Concept preview</p>
                </div>
              </div>
              <Bot className="h-6 w-6 text-[#d8ff63]" />
            </div>

            <div className="space-y-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 rounded-2xl border border-[#f4f1e8]/10 bg-[#f4f1e8]/[0.04] p-4 sm:p-5"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#d8ff63]" />
                    <div>
                      <h3 className="font-bold text-[#f4f1e8]">{capability.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#a6aaa0]">{capability.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
