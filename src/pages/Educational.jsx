import { motion } from 'framer-motion'
import { GraduationCap, CalendarDays, School } from "lucide-react";
import useScrollDirection from '../hooks/useScrollDirection'
import { fadeVariants, scrollViewport } from '../hooks/scrollVariants'

const educationData = [
    {
        title: "High School",
        school: "SHIVAJI INTER College KHUKHUNDU , Deoria",
        year: "2019",
        percentage: "74.83%",
    },
    {
        title: "Intermediate (12th)",
        school: "SHIVAJI INTER College KHUKHUNDU , Deoria",
        year: "2021",
        percentage: "80.6%",
    },
    {
        title: "B.Tech (Computer Science)",
        school: "RR Institute of Modern Technology , Lucknow UP",
        year: "2022 - 2026",
        percentage: " CGPA - 7.82",
    },
];




export default function Education() {
    const direction = useScrollDirection()

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">

            {/* Heading */}
            <motion.h2
                variants={fadeVariants(direction, 40)}
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport(0.6)}
                className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16"
            >
                Education
            </motion.h2>

            <div className="max-w-6xl mx-auto px-5">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollViewport(0.25)}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: direction === 'down' ? 80 : -80,
                                    scale: 0.9
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 100
                                    }
                                }
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200 hover:border-cyan-400 transition-all duration-500"
                        >

                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative p-7">

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6">
                                    <GraduationCap size={28} />
                                </div>

                                {/* Degree */}
                                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                    {edu.title}
                                </h2>

                                {/* School */}
                                <div className="flex items-center gap-2 text-slate-600 mb-4">
                                    <School size={18} />
                                    <span>{edu.school}</span>
                                </div>

                                {/* Bottom */}
                                <div className="flex justify-between items-center mt-8">

                                    <div className="flex items-center gap-2 text-gray-500">
                                        <CalendarDays size={18} />
                                        {edu.year}
                                    </div>

                                    <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold">
                                        {edu.percentage}
                                    </div>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}
