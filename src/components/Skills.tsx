"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Layers, Cpu, Terminal, Layout, Server } from "lucide-react"

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "HTML/CSS"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Go (Golang)", "PostgreSQL", "REST APIs", "GraphQL", "Authentication"],
    },
    {
        category: "Game Dev",
        icon: Cpu,
        items: ["Lua (GLua)", "Unity", "C#", "Game Logic", "UI/UX Design", "Networking"],
    },
    {
        category: "DevOps & Tools",
        icon: Terminal,
        items: ["Git", "Docker", "Linux", "VS Code", "CI/CD", "Cloud Services"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                    <span className="text-red-500 font-mono">02.</span> Core Skills
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-white/5 p-6 rounded-lg hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-red-500/10 rounded text-red-500 group-hover:text-white group-hover:bg-red-500 transition-colors">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg">{skill.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
