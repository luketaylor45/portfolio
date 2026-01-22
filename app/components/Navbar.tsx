"use client"

import { ThemeToggle } from "./ThemeToggle"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Navbar() {
    const { scrollY } = useScroll()
    const { resolvedTheme } = useTheme()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
    }, [scrollY])

    const isDark = resolvedTheme === "dark"

    return (
        <motion.header
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full flex justify-center pointer-events-none"
        >
            <div className={`flex items-center gap-1 px-1.5 py-1.5 pointer-events-auto ${isScrolled ? "glass shadow-xl border-border/50" : "bg-secondary/40 border-transparent"
                } rounded-full transition-all duration-500`}>

                <div className="flex items-center">
                    <a href="#projects" className={`px-5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 ${isDark
                            ? "text-zinc-400 hover:text-white hover:bg-white/10"
                            : "text-zinc-500 hover:text-zinc-900 hover:bg-black/5"
                        }`}>
                        Projects
                    </a>
                    <a href="#links" className={`px-5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 ${isDark
                            ? "text-zinc-400 hover:text-white hover:bg-white/10"
                            : "text-zinc-500 hover:text-zinc-900 hover:bg-black/5"
                        }`}>
                        Connect
                    </a>
                </div>

                <div className="w-[1px] h-4 bg-border/50 mx-1.5" />

                <ThemeToggle />
            </div>
        </motion.header>
    )
}
