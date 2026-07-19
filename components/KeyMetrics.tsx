"use client"

import { motion, useInView } from 'framer-motion';
import React from 'react'


const metrics = [
    {
        id: 1,
        value: 'Building experience',
        label: 'Another day another experience',
        description: 'Dedicated to be best at what I do'
    },
    {
        id: 2,
        value: '9+',
        label: 'Projects completed',
        description: 'From data analytics to web applications'
    },
    {
        id: 3,
        value: '5+',
        label: 'Technologies Mastered',
        description: 'Proficient in various programming languages and frameworks'
    },
    {
        id: 4,
        value: '100+',
        label: 'Commits on GitHub',
        description: 'Contributor to open-source and personal projects.',
    },
]
export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

  return (
    <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y:50 }}
        transition={{ duration:0.8 }}
        className="px-4 py-20 text-[#f4f1e8] sm:px-6 sm:py-24 lg:py-32"
    >
        <div className="container mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y:0 } : { opacity:20, y:20 }}
                transition={{ delay:0.2, duration: 0.6 }}
                className="mb-10 text-4xl font-black tracking-tight sm:text-5xl lg:mb-12 lg:text-6xl"
            >
                Development Journey
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity:0, y:20 }}
                        animate={isInView ? { opacity:1, y:0 } : {opacity:0, y:20 }}
                        transition={{ delay:0.4 + index * 0.1, duration: 0.6 }}
                        className="flex flex-col rounded-2xl border border-[#f4f1e8]/10 bg-[#f4f1e8]/[0.035] p-5 sm:p-6"
                    >
                    <motion.h3
                        initial={{ scale: 0.5 }}
                        animate={isInView ? { scale:1 } : { scale: 0.5 }}
                        transition={{ delay:0.6 + index * 0.1, duration:0.4, type: 'spring'}}
                        className="mb-2 break-words text-3xl font-black text-[#d8ff63] sm:text-4xl lg:text-5xl"
                        >
                        {metric.value}
                    </motion.h3>

                    <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay:0.8 + index*0.1, duration:0.4}}
                            className="mb-2 text-xl font-semibold text-[#f4f1e8]"
                    >
                            {metric.label}
                    </motion.p>

                    <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay:1 + index*0.1, duration:0.4}}
                            className="text-[#a6aaa0]"
                    >
                            {metric.description}
                    </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}
