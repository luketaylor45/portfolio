"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
    const [text, setText] = useState("")
    const fullText = "console.log('WELCOME TO MY PORTFOLIO');"

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setText(fullText.slice(0, i))
            i++
            if (i > fullText.length) {
                clearInterval(interval)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="z-10 text-center space-y-6 max-w-4xl px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-sm mb-4">
                    <Terminal size={14} />
                    <span>STATUS: ONLINE</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                    <span className="block text-white mb-2">LUKE TAYLOR</span>
                    <span className="block text-red-500 glitch-effect" data-text="FULL STACK DEVELOPER">
                        FULL STACK DEVEL<span className="text-white">OPER</span>
                    </span>
                </h1>

                <div className="h-8 font-mono text-lg text-white/60">
                    <span className="text-red-500">&gt;</span> {text}
                    <span className="terminal-cursor"></span>
                </div>

                <p className="max-w-xl mx-auto text-white/60 text-lg">
                    Building software applications and immersive game experiences.
                    Specializing in modern web technologies and game development.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Button variant="terminal" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full sm:w-auto font-mono text-white/70 hover:text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    )
}
