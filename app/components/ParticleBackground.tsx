"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        const mouse = { x: -1000, y: -1000, radius: 150 }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.vx = (Math.random() - 0.5) * 0.4
                this.vy = (Math.random() - 0.5) * 0.4
                this.size = Math.random() * 1.2 + 0.5
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                if (this.x < 0) this.x = canvas!.width
                if (this.x > canvas!.width) this.x = 0
                if (this.y < 0) this.y = canvas!.height
                if (this.y > canvas!.height) this.y = 0

                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distanceSq = dx * dx + dy * dy
                if (distanceSq < mouse.radius * mouse.radius) {
                    const distance = Math.sqrt(distanceSq)
                    const force = (mouse.radius - distance) / mouse.radius
                    this.x -= dx * force * 0.02
                    this.y -= dy * force * 0.02
                }
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const count = Math.floor((canvas.width * canvas.height) / 25000)
            particles = Array.from({ length: count }, () => new Particle())
        }

        const connect = () => {
            const maxDistance = 150
            ctx.lineWidth = 0.5

            for (let i = 0; i < particles.length; i++) {
                let connections = 0
                for (let j = i + 1; j < particles.length && connections < 5; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distSq = dx * dx + dy * dy

                    if (distSq < maxDistance * maxDistance) {
                        connections++
                        const distance = Math.sqrt(distSq)
                        const opacity = (1 - distance / maxDistance) * 0.25
                        ctx.beginPath()

                        ctx.strokeStyle = `rgba(255, 59, 48, ${opacity})`
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "rgba(255, 59, 48, 0.6)"

            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()
            }
            connect()
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const initResize = () => {
            init()
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", initResize)
        init()
        animate()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", initResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [mounted, resolvedTheme])

    if (!mounted) return null

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
            style={{ zIndex: 1, opacity: 0.8 }}
        />
    )
}
