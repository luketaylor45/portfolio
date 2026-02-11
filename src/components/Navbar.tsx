"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
]

export function Navbar() {
    const [active, setActive] = React.useState("HOME")

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-mono text-xl font-bold tracking-tighter text-red-500">
                    <span className="text-white">&lt;</span>LUKE TAYLOR<span className="text-white">/&gt;</span>
                </div>

                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setActive(item.name)}
                                className={cn(
                                    "font-mono text-sm tracking-widest transition-colors hover:text-red-500",
                                    active === item.name ? "text-red-500" : "text-white/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    {/* Mobile menu placeholder */}
                    <span className="text-red-500 font-mono">MENU</span>
                </div>
            </div>
        </nav>
    )
}
