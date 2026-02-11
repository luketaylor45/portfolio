"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, Terminal } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card"

interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    longDescription: string
    features: string[]
    link?: string
    github?: string
    status: "Live" | "In Development" | "Archived"
}

const getStatusColor = (status: Project["status"]) => {
    switch (status) {
        case "Live":
            return "bg-green-500/10 text-green-500 border-green-500/20"
        case "In Development":
            return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
        case "Archived":
            return "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
        default:
            return "bg-white/5 text-white/50 border-white/5"
    }
}

const projects: Project[] = [
    {
        id: "atlas",
        title: "Atlas Control Panel",
        description: "A high-performance service hosting daemon and panel for managing Docker containers.",
        tags: ["Go", "Docker", "React", "WebSocket"],
        status: "In Development",
        longDescription: "Atlas is a modern server management solution designed to handle game servers and web services. It utilizes a Go-based daemon for low-level Docker interactions and real-time stats streaming.",
        features: [
            "Real-time Console Streaming",
            "Docker Container Management",
            "Resource Usage Monitoring",
            "Secure API Authentication"
        ],
        github: "https://github.com/luketaylor45/atlas",
        link: "#"
    },
    {
        id: "flowt",
        title: "Flowt",
        description: "A modern, sleek, and self-hosted project management application built for data ownership.",
        tags: ["Next.js", "Prisma", "Tailwind CSS", "PostgreSQL"],
        status: "Live",
        longDescription: "Flowt is a performance-driven project management platform designed for teams who value data ownership. It offers a premium user experience with features like dynamic Kanban boards and rich task tracking.",
        features: [
            "Dynamic Kanban Boards",
            "Granular Role-Based Access",
            "Real-time Activity Streams",
            "Local & Remote Database Support"
        ],
        github: "https://github.com/luketaylor45/flowt",
        link: "#"
    },
    {
        id: "bullseye",
        title: "Bullseye",
        description: "A modern darts scoring and statistics application designed for high-performance and mobile use.",
        tags: ["Next.js", "Framer Motion", "IndexedDB", "P2P"],
        status: "In Development",
        longDescription: "Bullseye is a high-performance darts scoring application designed for mobile use. It features real-time statistics tracking, P2P multiplayer support, and an offline-first architecture using IndexedDB.",
        features: [
            "Real-time Score Tracking",
            "Player Statistics & Heatmaps",
            "P2P Local Multiplayer",
            "Offline-first with Dexie.js"
        ],
        github: "https://github.com/luketaylor45/darts-app",
        link: "#"
    },
    {
        id: "sentinel",
        title: "Sentinel",
        description: "Advanced administration and security system for game servers and community management.",
        tags: ["Next.js", "React", "Security", "Admin Tools"],
        status: "In Development",
        longDescription: "Sentinel acts as a guardian for game servers, providing administrators with powerful tools to monitor player activity, detect anomalies, and enforce rules automatically via a modern dashboard.",
        features: [
            "Automated Threat Detection",
            "Admin Logging & Reporting",
            "Visual Admin Dashboard",
            "Player Reputation System"
        ],
        github: "https://github.com/luketaylor45/sentinel",
        link: "#"
    },
    {
        id: "birdcam",
        title: "BirdCam",
        description: "A local birdcam application for personal use, featuring motion detection and secure streaming.",
        tags: ["Next.js", "Raspberry Pi", "Video.js"],
        status: "Live",
        longDescription: "BirdCam is a smart monitoring solution designed to capture and archive footage from a birdbox. Built with a Raspberry Pi and a custom web interface, it provides motion detection and instant notifications.",
        features: [
            "Motion Detection & Recording",
            "Secure Live Streaming",
            "Instant Mobile Notifications",
            "Organized Video Archives"
        ],
        github: "https://github.com/luketaylor45/birdcam",
        link: "#"
    }
]

export function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    const selectedProject = projects.find(p => p.id === selectedId)

    return (
        <section id="projects" className="py-24 bg-black/40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                    <span className="text-red-500 font-mono">03.</span> Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-zinc-900/50 border-white/5 hover:border-red-500/50 transition-all hover:bg-zinc-900/80 group cursor-pointer" onClick={() => setSelectedId(project.id)}>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-xl group-hover:text-red-400 transition-colors">{project.title}</CardTitle>
                                        <span className={cn("text-xs font-mono px-2 py-1 rounded border", getStatusColor(project.status))}>{project.status}</span>
                                    </div>
                                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-red-500/80 bg-red-500/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-black border border-red-500/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl shadow-red-900/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/50">
                                <div className="flex items-center gap-3">
                                    <Terminal className="text-red-500" size={20} />
                                    <h3 className="text-2xl font-bold font-mono text-white">Project Protocol: {selectedProject.title}</h3>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedId(null)}>
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <h4 className="text-sm text-red-500 font-mono mb-2">&gt; SYSTEM.READ_DESCRIPTION()</h4>
                                    <p className="text-white/80 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm text-red-500 font-mono mb-2">&gt; SYSTEM.LIST_FEATURES()</h4>
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {selectedProject.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                                                <span className="w-1.5 h-1.5 bg-red-500 rounded-sm"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm text-red-500 font-mono mb-2">&gt; SYSTEM.GET_STACK()</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-yellow-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    {selectedProject.github && (
                                        <Button variant="outline" className="gap-2 w-full">
                                            <Github size={16} /> Source Code
                                        </Button>
                                    )}
                                    {selectedProject.link && (
                                        <Button variant="default" className="gap-2 w-full bg-red-600 hover:bg-red-700">
                                            <ExternalLink size={16} /> Live Demo
                                        </Button>
                                    )}
                                    <Button variant="secondary" className="gap-2 w-full" onClick={() => setSelectedId(null)}>
                                        Close Terminal
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
