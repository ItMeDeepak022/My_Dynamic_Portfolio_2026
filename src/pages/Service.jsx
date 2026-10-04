import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Workflow, Layers, ArrowUpRight } from 'lucide-react'
import useScrollDirection from '../hooks/useScrollDirection'
import { scaleVariants, staggerContainer, fadeVariants, scrollViewport } from '../hooks/scrollVariants'

export default function Service() {
    const direction = useScrollDirection()

    const services = [
        {
            title: "Frontend Development",
             
            lightBg: "bg-blue-50 text-blue-600 border-blue-200/60",
            accentGlow: "hover:border-blue-300 hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)]",
            topLine: "bg-gradient-to-r from-blue-500 to-indigo-500",
            description: "I build responsive and modern user interfaces using React.js, Tailwind CSS, and JavaScript, focusing on clean design, smooth user experience, and optimized performance across all devices.",
            tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI", "Next.js","React Native"] 
        },
        {
            title: "Backend Development",
            
            lightBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
            accentGlow: "hover:border-emerald-300 hover:shadow-[0_12px_28px_rgba(16,185,129,0.12)]",
            topLine: "bg-gradient-to-r from-emerald-500 to-teal-500",
            description: "I develop secure and scalable backend systems using Node.js and Express, managing databases like MongoDB, building REST APIs, and handling authentication with efficient server performance.",
            tags: ["Node.js", "Express.js", "MongoDB", "Auth & Security"]
        },
        {
            title: "API Integration",
             
            lightBg: "bg-cyan-50 text-cyan-600 border-cyan-200/60",
            accentGlow: "hover:border-cyan-300 hover:shadow-[0_12px_28px_rgba(6,182,212,0.12)]",
            topLine: "bg-gradient-to-r from-cyan-500 to-blue-500",
            description: "I integrate REST APIs to connect frontend and backend seamlessly, handling real-time data, improving application functionality, and ensuring fast and reliable user experiences.",
            tags: ["REST APIs", "Axios", "Data Sync", "Async Flow"]
        },
        {
            title: "MERN Stack Development",
             
            lightBg: "bg-purple-50 text-purple-600 border-purple-200/60",
            accentGlow: "hover:border-purple-300 hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)]",
            topLine: "bg-gradient-to-r from-purple-500 to-pink-500",
            description: "I build full-stack web applications using MongoDB, Express, React, and Node.js, creating scalable solutions with seamless frontend-backend integration and efficient data handling.",
            tags: ["MongoDB", "Express", "React", "Node.js","Next.js"]
        }
    ]

    return (
        <section id='Service' className="w-full sm:py-20 py-14 bg-gradient-to-b from-white via-slate-50/50 to-white text-black overflow-hidden">
            <div className="max-w-[1320px]  mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                     

                    <motion.h2
                        variants={fadeVariants(direction, 40)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-3xl sm:text-4xl   text-slate-900 tracking-tight"
                    >
                        My Services
                    </motion.h2>

                    <motion.p
                        variants={fadeVariants(direction, 30)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-gray-600 text-sm sm:text-base mt-3"
                    >
                        Delivering clean, responsive, and robust web solutions with modern technologies.
                    </motion.p>
                </div>

                {/* Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport(0.15)}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-5"
                >
                    {services.map((item, index) => {
                         
                        return (
                            <motion.div
                                key={index}
                                variants={scaleVariants(direction, 40)}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className={`group relative flex flex-col justify-between p-6 sm:p-4 rounded-2xl bg-white border border-gray-200/90 ${item.accentGlow} shadow-sm transition-all duration-300`}
                            >
                                {/* Top Gradient Highlight Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl   opacity-80 group-hover:opacity-100 transition-opacity`} />

                                <div>
                                    
                                     

                                    {/* Title */}
                                    <h3 className="text-[20px] text-center   text-[#2B7FFF] group-hover:text-blue-600 font-semibold mb-3 transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[14px] text-justify leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50/70 group-hover:text-blue-700 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}
