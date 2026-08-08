import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useScrollDirection from '../hooks/useScrollDirection'
import { fadeVariants, staggerContainer, popVariants, scrollViewport } from '../hooks/scrollVariants'

export default function About() {
    let [profileData, setprofileData] = useState([])
    const direction = useScrollDirection()

    let getmyProfile = () => {

        axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/profile-data')
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setprofileData(finalRes.data)
            })
    }

    useEffect(() => {
        getmyProfile()
    }, [])

    return (

        <>
            <section id='About' className="  w-full py-9 sm:py-10 bg-white text-black overflow-hidden">
                <motion.h2
                    variants={fadeVariants(direction, 40)}
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport(0.6)}
                    className="text-center text-4xl font-bold sm:m-10 mt-9 mb-9 text-black"
                >
                    About Me
                </motion.h2>
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center sm:gap-15 gap-10">

                    {/* Left Side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={scrollViewport(0.3)}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="sm:max-w-[30%] max-w-[100%] flex justify-center"
                    >
                        {
                            profileData.map((obj, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                    
                                        className="relative sm:w-80 w-70 sm:h-80 h-70 rounded-full border-4 border-blue-500 hover:border-purple-500 transition-colors duration-300 overflow-hidden bg-gray-100 flex items-start justify-center"
                                    >
                                        <img
                                            src={obj.profileImg}
                                            alt="Profile"
                                            className="w-full  object-contain object-top
                                        absolute top-[-22px] left-[3px] "
                                        />
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>

                    {/* Right Side - About Content */}
                    <motion.div
                        variants={fadeVariants(direction, 60, 0.7)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.3)}
                        className="md:w-full sm:text-justify p-2 text-lg text-justify"
                    >

                        <p className="text-gray-800 sm:leading-relaxed mb-3 ">
                            Hi, I'm <span className="text-purple-500 font-semibold">Deepak Kushwaha</span>,
                            a passionate <span className="text-purple-500">Frontend Developer</span>,
                            <span className="text-purple-500"> MERN Stack Developer</span>, and
                            <span className="text-purple-500"> Web Developer</span>.
                            I specialize in building responsive, modern, and user-friendly web applications
                            using technologies like React.js, JavaScript, Tailwind CSS, Node.js, Express, and MongoDB.
                        </p>

                        <p className="text-gray-700 mb-4">
                            I have strong experience in <span className="text-purple-500 font-medium">API Integration </span>
                            and working with <span className="text-purple-500 font-medium">REST APIs</span>, connecting frontend
                            with backend to create dynamic and real-time applications. I focus on clean UI,
                            smooth user experience, and performance optimization.
                        </p>

                        <p className="text-gray-700 mb-6">
                            I am continuously improving my skills in full-stack development, problem-solving,
                            and modern web technologies. I enjoy building real-world projects and turning ideas
                            into scalable applications.
                        </p>

                        {/* Skills / Keywords */}
                        <motion.div
                            variants={staggerContainer(0.06)}
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollViewport(0.5)}
                            className="flex flex-wrap justify-center md:justify-start gap-3"
                        >
                            {[
                                ["Frontend Developer", "bg-blue-600 text-white"],
                                ["MERN Stack", "bg-purple-600 text-white"],
                                ["React.js", "bg-green-600 text-white"],
                                ["API Integration", "bg-pink-600 text-white"],
                                ["JavaScript", "bg-yellow-400 text-black"],
                                ["Tailwind CSS", "bg-indigo-600 text-white"],
                                ["Node.js", "bg-red-500 text-white"],
                                ["MongoDB", "bg-gray-800 text-white"],
                            ].map(([label, cls]) => (
                                <motion.span
                                    key={label}
                                    variants={popVariants(direction, 16)}
                                    whileHover={{ scale: 1.12, y: -3 }}
                                    className={`px-3 py-1 ${cls} rounded-full text-sm`}
                                >
                                    {label}
                                </motion.span>
                            ))}
                        </motion.div>

                    </motion.div>

                </div>

            </section>
        </>



    )
}
