"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] overflow-x-clip px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-32">
        <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
            className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
            <div className="min-w-0 space-y-8 sm:space-y-12">
              <motion.h2
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.6, delay:0.2 }}
                className="text-4xl font-black tracking-tight text-gray-200 sm:text-5xl md:text-7xl"
              >
                Get in <span className="bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">touch</span>
              </motion.h2>

              <p className="-mt-4 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
                Have an idea, opportunity, or just want to talk technology? My inbox is always open.
              </p>

              <motion.div
                initial={{ opacity:0, x:-20 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.6, delay:0.4 }}
                className="glass space-y-7 rounded-2xl p-5 sm:space-y-8 sm:p-8"
              >
                <div className="space-y-2">
                  <p className="text-lg text-purple-500">Phone</p>
                  <a
                    href="tel:+918837345053"
                    aria-label="Call Shashank at +91 8837345053"
                    className="group flex items-center gap-3 rounded-xl border border-purple-300/20 bg-purple-300/[0.06] p-3 text-base font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-purple-300/10 hover:text-purple-200 sm:p-4 sm:text-xl"
                  >
                    <span className="rounded-lg bg-purple-300/10 p-2 text-purple-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">+91 7022093427</span>
                    <ArrowUpRight className="h-5 w-5 text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-lg text-purple-500">Email</p>
                  <a
                    href="mailto:sashankchaubey2002@gmail.com"
                    aria-label="Email Shashank at sashankchaubey2002@gmail.com"
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-purple-300/20 bg-purple-300/[0.06] p-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-purple-300/10 hover:text-purple-200 sm:p-4 sm:text-lg"
                  >
                    <span className="shrink-0 rounded-lg bg-purple-300/10 p-2 text-purple-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 break-all">sashankchaubey2002@gmail.com</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              <div className="space-y-2">
                <p className="text-lg text-purple-500 mb-2">Social</p>
                <div className="flex gap-6 text-3xl text-white">
                  <a
                    href="https://github.com/shashank-chaubey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-lg text-purple-400">
                    <MapPin className="h-5 w-5" />
                    Location
                  </p>
                  <p className="text-base font-semibold text-gray-200 sm:text-xl">Bangalore, India</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6, delay: 0.6 }}
              className="h-[320px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-full lg:min-h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps?q=Bangalore,India&output=embed"
                title="Map showing Bangalore, India"
                width="100%"
                height="100%"
                style={{ border:0 }}
                allowFullScreen
                loading="lazy"
              >


              </iframe>
            </motion.div>
        </motion.div>
    </section>
  )
}
