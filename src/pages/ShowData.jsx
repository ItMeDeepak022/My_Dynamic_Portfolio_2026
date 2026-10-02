import apiClient from '../services/apiClient';
import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion'
import useScrollDirection from '../hooks/useScrollDirection'
import { staggerContainer, fadeVariants, scrollViewport } from '../hooks/scrollVariants'

export default function ShowData() {
    const direction = useScrollDirection()

    const [text] = useTypewriter({
        words: ["Frontend Developer...", "Web Developer...", "MERN Stack Developer..."],
        loop: true,
        delaySpeed: 200,
    })

    let [profileData, setprofileData] = useState([])
    let [resumeData, setresumeData] = useState([])

    let getmyProfile = () => {
        apiClient.get('/profile-data')
            .then((res) => res.data)
            .then((finalRes) => {
                setprofileData(finalRes.data)
            })
    }

    let getmyResume = () => {
        apiClient.get('/resume-data')
            .then((res) => res.data)
            .then((finalRes) => {
                setresumeData(finalRes.data)
            })
    }

    useEffect(() => {
        getmyProfile(),
            getmyResume()
    }, [])

    return (
        <>
            <div className="w-full relative mt-2 py-8 sm:py-12 md:py-16 mx-auto bg-gray-100 px-4 sm:px-8 md:px-12 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-10 justify-between items-center">

                    {/* Left Part */}
                    <motion.div
                        variants={staggerContainer(0.18, 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.3)}
                        className="w-full md:flex-1 text-black md:text-start text-center"
                    >
                        <motion.h1 variants={fadeVariants(direction, 30)} className="text-3xl sm:text-4xl md:text-5xl sm:mb-4 sm:mt-0 mt-3 mb-0">
                            Hi, I'm <span className="text-blue-500">Deepak Kushwaha</span>
                        </motion.h1>

                        <motion.div variants={fadeVariants(direction, 30)} className="text-2xl sm:text-3xl md:text-3xl sm:p-[15px_0px] sm:p-0 p-2">
                            <span className="text-purple-500 text-2xl sm:text-3xl md:text-[38px]">
                                {text}
                                <Cursor />
                            </span>
                        </motion.div>
                        <motion.p variants={fadeVariants(direction, 30)} className="w-full text-gray-700 mt-2 max-w-xl md:mx-0 mx-auto">
                            Passionate about creating beautiful & full responsive & functional web experiences.
                        </motion.p>
                        <motion.div variants={fadeVariants(direction, 30)} className='BTNs w-full mt-4 flex md:justify-start justify-center gap-5 sm:gap-6 items-center py-3'>
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: -8 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                            >
                                <a href={'https://github.com/ItMeDeepak022'}><FaGithub className='text-[28px] sm:text-[32px]' /></a>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 8 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 cursor-pointer"
                            >
                                <a href="https://www.linkedin.com/in/deepakkushwaha022/"><FaLinkedinIn className='text-[28px] sm:text-[32px]' /></a>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.15, rotate: -8 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-300 hover:text-[red] hover:bg-white transition-colors duration-300 cursor-pointer"
                            >
                                <a href="https://www.instagram.com/___its_silentboy/"><FaInstagram className='text-[28px] sm:text-[32px]' /></a>
                            </motion.div>
                        </motion.div>

                        {
                            resumeData.map((obj, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeVariants(direction, 30)}
                                        className='flex md:justify-start justify-center items-center gap-3 text-white mt-5'
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.06, boxShadow: "0 0 20px rgba(34,211,238,0.6)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className='cursor-pointer px-4 sm:px-5 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:text-cyan-400 transition-colors duration-300'
                                        > <a href="#Contact" >Get Touch</a> </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.06, boxShadow: "0 0 20px rgba(34,211,238,0.6)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className='cursor-pointer px-4 sm:px-5 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:text-cyan-400 transition-colors duration-300'
                                        > <a href={obj.resumeLetter}
                                        >Download CV</a> </motion.button>
                                    </motion.div>
                                )
                            })
                        }

                    </motion.div>

                    {/* Right Part */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={scrollViewport(0.3)}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-auto flex justify-center shrink-0"
                    >
                        {
                            profileData.map((obj, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        animate={{ y: [0, -14, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-blue-500 hover:border-purple-500 transition-colors duration-300 overflow-hidden bg-gray-100 flex items-start justify-center"
                                    >
                                        <img
                                            src={obj.profileImg}
                                            alt="Profile"
                                            className="w-full object-contain object-top absolute top-[-33px] left-[0px]"
                                        />
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>

                </div>
            </div>
        </>
    )
}