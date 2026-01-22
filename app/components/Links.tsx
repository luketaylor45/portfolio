"use client"

import { Github, Mail, Linkedin, ArrowUpRight, LinkedinIcon } from "lucide-react"
import { motion } from "framer-motion"

const links = [
    { name: "GitHub", icon: Github, url: "https://github.com/luketaylor45" },
    { name: "LinkedIn", icon: LinkedinIcon, url: "www.linkedin.com/in/luke-taylor-b89395376" },
    { name: "Email", icon: Mail, url: "mailto:luketaylor612@gmail.com" },
]

export function Links() {
    return (
        <section id="links" className="py-24 px-4 flex justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap justify-center gap-6"
            >
                {links.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center gap-4 px-10 py-5 bg-secondary/50 dark:bg-zinc-900/50 border border-border rounded-3xl hover:border-primary/50 transition-all duration-300 shadow-sm"
                    >
                        <link.icon className="text-muted group-hover:text-primary transition-colors" size={24} />
                        <span className="font-bold text-sm uppercase tracking-[0.2em]">{link.name}</span>
                        <ArrowUpRight size={16} className="text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />

                        {/* Subtle Glow Effect On Hover */}
                        <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </motion.a>
                ))}
            </motion.div>
        </section>
    )
}
