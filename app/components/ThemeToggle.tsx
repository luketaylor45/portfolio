"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-[100px] h-9 rounded-full bg-secondary animate-pulse" />
    }

    const themes = [
        { id: "light", icon: Sun },
        { id: "system", icon: Monitor },
        { id: "dark", icon: Moon },
    ]

    const activeIndex = themes.findIndex((t) => t.id === theme)

    return (
        <div className="relative flex items-center bg-secondary/80 p-1 rounded-full border border-border overflow-hidden h-9">
            {/* Animated Background Slider - Fixed Offset/Width */}
            <motion.div
                className="absolute h-7 w-[30px] bg-white dark:bg-zinc-800 rounded-full shadow-sm z-0"
                animate={{
                    x: activeIndex * 31 // Fixed width steps
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />

            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`relative z-10 w-[30px] h-7 flex items-center justify-center transition-colors ${theme === t.id ? 'text-primary' : 'text-muted hover:text-foreground'
                        }`}
                    aria-label={t.id}
                >
                    <t.icon size={14} strokeWidth={2.5} />
                </button>
            ))}
        </div>
    )
}
