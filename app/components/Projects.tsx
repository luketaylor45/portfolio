"use client"

import { motion } from "framer-motion"
import { Github, Globe } from "lucide-react"
import { useTheme } from "next-themes"

const projects = [
    {
        title: "Bird Cam",
        category: "Real-time Monitoring",
        description: "Low-latency streaming platform for real-time environment observation with archive management.",
        tags: ["Next.js", "Video.js", "HLS"],
        link: "https://birdcam.tayr.dev",
        github: "https://github.com/luketaylor45/birdcam"
    },
    {
        title: "Portfolio",
        category: "Web Development",
        description: "My portfolio to properly display my work, skills and provide all the possibly links you could use to contact me.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "#",
        github: "https://github.com/luketaylor45/portfolio"
    }
]

export function Projects() {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark"

    return (
        <section id="projects" className="py-40 px-6 max-w-6xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-primary mb-4 opacity-70">Case Studies</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tight">Work</h3>
            </motion.div>

            <div className="flex flex-col gap-24">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="group relative flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20"
                    >
                        {/* Minimalist Index */}
                        <div className="hidden lg:block absolute -left-16 top-0 text-7xl font-black text-primary/5 select-none pointer-events-none">
                            0{i + 1}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                                    {project.category}
                                </span>
                                <h4 className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-primary transition-colors duration-500">
                                    {project.title}
                                </h4>
                            </div>

                            <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-3xl ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 py-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[11px] font-bold uppercase tracking-tight text-muted">
                                        /{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Project Buttons */}
                            <div className="flex flex-wrap gap-5 pt-8">
                                {project.link !== "#" && (
                                    <motion.a
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.link}
                                        className="flex items-center gap-3 px-8 py-3.5 glossy-red text-white text-[11px] font-extrabold uppercase tracking-widest rounded-full transition-all shadow-xl"
                                    >
                                        <Globe size={15} strokeWidth={3} /> Launch Demo
                                    </motion.a>
                                )}
                                {project.github !== "#" && (
                                    <motion.a
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.github}
                                        className="flex items-center gap-3 px-8 py-3.5 bg-secondary text-foreground text-[11px] font-extrabold uppercase tracking-widest rounded-full transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-border/50"
                                    >
                                        <Github size={15} strokeWidth={3} /> Repository
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
