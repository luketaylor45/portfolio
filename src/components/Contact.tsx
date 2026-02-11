"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
    return (
        <footer id="contact" className="py-24 border-t border-white/5 relative bg-black">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl font-bold font-mono">
                        <span className="text-red-500">04.</span> Contact
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Currently open for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center gap-6">
                        <a href="mailto:contact@luketaylor.dev" className="text-white hover:text-red-500 transition-colors">
                            <Mail size={32} />
                            <span className="sr-only">Email</span>
                        </a>
                        <a href="https://github.com/luketaylor45" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                            <Github size={32} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition-colors">
                            <Linkedin size={32} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>

                    <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white" asChild>
                        <a href="mailto:contact@luketaylor.dev">Say Hello</a>
                    </Button>

                    <div className="pt-24 pb-8 text-sm text-zinc-600 font-mono">
                        <p>Designed & Built by Luke Taylor</p>
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </footer>
    )
}
