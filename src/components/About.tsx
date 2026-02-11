"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/20 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-red-500 font-mono">01.</span> About Me
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I am a software engineer and game developer with a passion for building efficient applications and immersive game experiences.
                                With a deep background in both web and game development, my creations include both interactive design and robust backend systems.
                            </p>
                            <p>
                                I started young, my journey began with a curiosity for how games worked, leading me to dive deep into programming with game engines like Source and Unity.
                                Today, I apply those same problem-solving skills and programming abilities to full-stack web development as well as game development, which I still frequently do in my spare time.
                            </p>
                            <p>
                                When I'm not coding, I'm likely working on a side project, or designing complex game mechanics in my free time; however, I do thoroughly enjoy the hardware of computer systems.
                                I always had an interest within the mechanics and inner workings of a computer and still frequently practice this on my own devices or my servers.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-black/50 border-white/10 overflow-hidden font-mono text-sm relative group hover:border-red-500/30 transition-colors duration-300">
                            <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <CardContent className="p-6 pt-10 text-green-400">
                                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span> {'{'}</p>
                                <p className="pl-4">
                                    <span className="text-purple-400">constructor</span>() {'{'}
                                </p>
                                <p className="pl-8">
                                    <span className="text-red-400">this</span>.name = <span className="text-green-300">"Luke Taylor"</span>;
                                </p>
                                <p className="pl-8">
                                    <span className="text-red-400">this</span>.location = <span className="text-green-300">"Earth"</span>;
                                </p>
                                <p className="pl-8">
                                    <span className="text-red-400">this</span>.traits = [<span className="text-green-300">"Creative"</span>, <span className="text-green-300">"Analytical"</span>, <span className="text-green-300">"Efficient"</span>];
                                </p>
                                <p className="pl-4">{'}'}</p>
                                <br />
                                <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">work</span>() {'{'}</p>
                                <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-300">"Building the Check Components..."</span>;</p>
                                <p className="pl-4">{'}'}</p>
                                <p>{'}'}</p>
                            </CardContent>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
