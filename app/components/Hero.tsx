"use client"

import { motion } from "framer-motion"
import { TechGraphic } from "./TechGraphic"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const langIcons = [
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg" },
    { name: "Lua", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg" },
    { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
    { name: "CSharp", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { name: "CPP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
]

export function Hero() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    return (
        <section className="min-h-[95vh] flex flex-col justify-center items-center relative overflow-hidden px-4 md:px-12 pt-16">
            <div className="z-10 container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter mb-4 leading-[0.9]"
                    >
                        Luke <br /><span className="text-gradient-red">Taylor</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-xl md:text-2xl text-muted font-medium mb-10 tracking-tight"
                    >
                        Software and Game Developer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-3 mb-14 max-w-md"
                    >
                        {langIcons.map((lang, i) => (
                            <div key={lang.name} className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + i * 0.04 }}
                                    whileHover={{ scale: 1.2, zIndex: 10 }}
                                    className="w-10 h-10 glass rounded-xl flex items-center justify-center p-2 cursor-help transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={lang.icon}
                                        alt={lang.name}
                                        className={`w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${isDark ? 'invert' : ''}`}
                                        style={{ filter: isDark ? 'invert(1) grayscale(1) opacity(0.6)' : 'grayscale(1) opacity(0.6)' }}
                                    />
                                </motion.div>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-20">
                                    {lang.name}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        className="flex gap-4"
                    >
                        <a href="#projects" className="px-10 py-3.5 hero-btn-glass text-foreground hover:bg-white/20 dark:hover:bg-black/40 rounded-full font-bold uppercase tracking-widest text-[11px] hover:scale-[1.05] active:scale-95 transition-all">
                            View Portfolio
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full flex justify-center lg:justify-end"
                >
                    <TechGraphic />
                </motion.div>

            </div>
        </section>
    )
}
