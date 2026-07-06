"use client"

import { motion } from "framer-motion"
import { Instagram, Github, Linkedin } from "lucide-react";

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
                className="text-4xl font-bold text-gray-300 sm:text-5xl md:text-7xl"
              >
                Get in <span className="text-purple-500">touch</span>
              </motion.h2>

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
                    className="flex items-center gap-2 text-lg font-semibold transition duration-300 hover:text-purple-400 sm:text-2xl"
                  >
                    +91 8837345053
                    <span className="text-gray-500">↗</span>
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-lg text-purple-500">Email</p>
                  <a
                    href="mailto:sashankchaubey2002@gmail.com"
                    className="flex min-w-0 items-center gap-2 break-all text-base font-semibold transition duration-300 hover:text-purple-400 sm:text-xl lg:text-2xl"
                  >
                    sashankchaubey2002@gmail.com
                    <span className="text-gray-500">↗</span>
                  </a>
                </div>

              <div className="space-y-2">
                <p className="text-lg text-purple-500 mb-2">Social</p>
                <div className="flex gap-6 text-3xl text-white">
                  <a
                    href="https://www.instagram.com/shashanktivity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://github.com/sh4sh4nk-9"
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
                  <p className="text-lg text-purple-500">College</p>
                  <address className="text-base not-italic leading-relaxed sm:text-xl">
                    CDSIMER, Dayananda Sagar University<br/>
                    DEVARAKAGGALAHALLI, HAROHALLI<br/>
                    Kanakpura Main Rd<br/>
                    Bengaluru, Karnataka
                  </address>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18871.024989474085!2d77.43663145676635!3d12.65501096392183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae439988d9a405%3A0x9a4892007871393f!2zRHIgQ2hhbmRyYW1tYSBEYXlhbmFuZGEgU2FnYXIgaW5zdGl0dXRlIG9mIE1lZGljYWwgRWR1Y2F0aW9uIGFuZCBSZXNlYXJjaCDgsrjgsr8u4LKh4LK_LuCyuOCziOCyruCysOCzjSBDRFNJTUVS!5e1!3m2!1sen!2sin!4v1747646522461!5m2!1sen!2sin"
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
