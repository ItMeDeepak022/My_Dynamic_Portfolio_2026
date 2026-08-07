import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
}

const itemUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function ShowData() {

    const [text] = useTypewriter({
        words: ["Frontend Developer...", "Web Developer...", "MERN Stack Developer..."],
        loop: true,
        delaySpeed: 200,
    })

    let [profileData, setprofileData] = useState([])
    let [resumeData, setresumeData] = useState([])

    let getmyProfile = () => {

        axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/profile-data')
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setprofileData(finalRes.data)
            })
    }

    let getmyResume = () => {

        axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/resume-data')
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setresumeData(finalRes.data)
            })
    }

    useEffect(() => {
        getmyProfile(),
            getmyResume()
    }, [])

    return (

        <>
            <div className="w-full relative mt-2 sm:py-15 py-5 mx-auto flex sm:flex-row flex-col-reverse sm:gap-0 gap-10 justify-around items-center h-auto bg-gray-100 sm:px-8 overflow-hidden">

                {/* Left Part */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="sm:max-w-[70%] max-w-[100%] text-black sm:text-start text-center"
                >
                    <motion.h1 variants={itemUp} className="sm:text-5xl text-4xl font-bold sm:mb-4 sm:mt-0 mt-3 mb-0">
                        Hi, I'm <span className="text-blue-500">Deepak Kushwaha</span>
                    </motion.h1>

                    <motion.div variants={itemUp} className="sm:text-3xl text-2xl sm:font-semibold font-bold sm:p-[15px_0px] sm:p-0 p-2">
                        <span className="text-purple-500 font-bold sm:text-[40px] text-[25px]">
                            {text}
                            <Cursor />
                        </span>
                    </motion.div>
                    <motion.p variants={itemUp} className="w-full text-gray-700 mt-1 ">
                        Passionate about creating beautiful & full responsive & functional web experiences.
                    </motion.p>
                    <motion.div variants={itemUp} className='BTNs w-[80%] sm:w-[50%] mx-auto  mt-4 flex justify-center sm:gap-10 gap-5 items-center py-3'>
                        {/* GitHub */}
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: -8 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                            <a href={'https://github.com/ItMeDeepak022'}><FaGithub className='text-[32px]' /></a>
                        </motion.div>

                        {/* LinkedIn */}
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                            <a href="https://www.linkedin.com/in/deepakkushwaha022/"><FaLinkedinIn className='text-[32px]' /></a>
                        </motion.div>

                        {/* Instagram */}
                        <motion.div
                            whileHover={{ scale: 1.15, rotate: -8 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:text-[red] hover:bg-white transition-colors duration-300 cursor-pointer"
                        >
                            <a href="https://www.instagram.com/___its_silentboy/"><FaInstagram className='text-[32px]' /></a>
                        </motion.div>
                    </motion.div>


                    {
                        resumeData.map((obj, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemUp}
                                    className='flex justify-center items-center gap-3 text-white font-bold sm:mt-5 mt-5 group-hover:active:select-all'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.06, boxShadow: "0 0 20px rgba(34,211,238,0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className='cursor-pointer px-4 sm:py-3 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:text-cyan-400 transition-colors duration-300'
                                    > <a href="#Contact" >Get Touch</a> </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.06, boxShadow: "0 0 20px rgba(34,211,238,0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className='cursor-pointer px-4 sm:py-3 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:text-cyan-400 transition-colors duration-300'
                                    > <a href={obj.resumeLetter}
                                    >Download CV</a> </motion.button>
                                </motion.div>
                            )
                        })
                    }

                </motion.div>

                {/* Right Part */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="sm:max-w-[30%] max-w-[100%] flex justify-center"
                >
                    {
                        profileData.map((obj, index) => {

                            return (

                                <motion.div
                                    key={index}
                                    animate={{ y: [0, -14, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    // whileHover={{ scale: 1.04 }}
                                    className="relative sm:w-80 w-70 sm:h-80 h-70 rounded-full border-4 border-blue-500 hover:border-purple-500 transition-colors duration-300 overflow-hidden bg-gray-100 flex items-start justify-center"
                                >
                                    <img
                                        src={obj.profileImg}
                                        alt="Profile"
                                        className="w-full  object-contain object-top
                                        absolute top-[-15px] left-[-5px]  
                                        "
                                    />
                                </motion.div>
                            )
                        })
                    }
                </motion.div>


            </div>
        </>




    )
}
