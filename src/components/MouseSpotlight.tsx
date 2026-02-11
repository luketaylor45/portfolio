"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export function MouseSpotlight() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        mouseX.set(clientX)
        mouseY.set(clientY)
    }

    React.useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener("mousemove", updateMouse)
        return () => window.removeEventListener("mousemove", updateMouse)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 transform-gpu"
            style={{
                background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(239, 68, 68, 0.10),
            transparent 80%
          )
        `,
            }}
        />
    )
}
