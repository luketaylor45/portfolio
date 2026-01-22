"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const snippets = {
    TypeScript: "class Developer {\n  name: string = 'Luke';\n  role: string = 'Software Engineer';\n}",
    JavaScript: "class Developer {\n  constructor() {\n    this.name = 'Luke';\n    this.role = 'Software Engineer';\n  }\n}",
    Python: "class Developer:\n    def __init__(self):\n        self.name = 'Luke'\n        self.role = 'Software Engineer'",
    Java: "public class Developer {\n    String name = \"Luke\";\n    String role = \"Software Engineer\";\n}",
    Lua: "const Developer = {\n    name = \"Luke\",\n    role = \"Software Engineer\"\n}",
    PHP: "class Developer {\n    public $name = 'Luke';\n    public $role = 'Software Engineer';\n}",
    "C#": "public class Developer {\n    public string Name = \"Luke\";\n    public string Role = \"Software Engineer\";\n}",
    "C++": "class Developer {\npublic:\n    string name = \"Luke\";\n    string role = \"Software Engineer\";\n};",
    Rust: "struct Developer {\n    name: String,\n    role: String,\n}\n// impl ...",
    Go: "type Developer struct {\n    Name string\n    Role string\n}"
}

export function TechGraphic() {
    const [lang, setLang] = useState<keyof typeof snippets>("TypeScript")
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        setMounted(true)
    }, [])

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    if (!mounted) {
        return <div className="w-full max-w-[500px] h-[320px] bg-secondary animate-pulse rounded-3xl" />
    }

    const isDark = resolvedTheme === "dark"
    const containerClasses = isDark
        ? "bg-zinc-900/95 border-white/10"
        : "bg-white/95 border-black/10 shadow-xl"
    const textClasses = isDark ? "text-white/90" : "text-zinc-800"
    const barClasses = isDark ? "bg-black/40 border-white/5" : "bg-zinc-100/80 border-black/10"

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="relative w-full max-w-[500px] h-[320px] preserve-3d py-4"
            style={{ perspective: "1500px" }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
            >
                <div className={`absolute inset-0 rounded-3xl p-[1px] shadow-2xl overflow-hidden transition-all duration-500 ${isDark ? 'glossy-red' : 'bg-zinc-300'}`}>
                    <div className={`w-full h-full backdrop-blur-xl rounded-[1.4rem] flex flex-col transition-colors duration-500 ${containerClasses} border`}>
                        {/* Selector Bar */}
                        <div className={`flex items-center gap-1 p-2 overflow-x-auto no-scrollbar transition-colors duration-500 ${barClasses} border-b`}>
                            {Object.keys(snippets).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setLang(key as any)}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter transition-all ${lang === key
                                        ? "bg-primary text-white shadow-md shadow-primary/30"
                                        : `text-muted hover:${isDark ? 'bg-white/10' : 'bg-black/5'}`
                                        }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 p-6 font-mono text-sm overflow-hidden flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={lang}
                                    initial={{ opacity: 0, scale: 0.98, x: -5 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`leading-relaxed whitespace-pre font-medium transition-colors duration-500 ${textClasses}`}
                                >
                                    {snippets[lang]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="absolute bottom-4 right-6 flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-primary animate-pulse' : 'bg-zinc-400'}`} />
                            <span className={`text-[9px] font-bold tracking-widest uppercase transition-colors duration-500 ${isDark ? 'text-primary/70' : 'text-zinc-500'}`}>
                                active
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
