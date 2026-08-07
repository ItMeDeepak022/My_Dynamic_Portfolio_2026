import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { motion } from 'framer-motion'

export default function Header() {
    let [show, setshow] = useState(true)

    let toggleBtn = () => {
        setshow(!show)
    }

    let navbar = ["About", "Service", "Skills", "Internship", "Projects", "Certificates", "Contact"]

    const navContainer = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.15 }
        }
    }

    const navItem = {
        hidden: { opacity: 0, y: -14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    }

    return (
        <motion.section
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20'
        >

            <header className="sm:max-w-[90%] max-w-[95%] mx-auto rounded-full mt-2 bg-white backdrop-blur-lg border border-white hover:border-blue-600 transition duration-300 shadow-[0_0_3px_rgba(0,0,0,0.2)] text-black">

                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="text-2xl font-bold text-blue-400 cursor-pointer"
                        >
                            <a href="#top">Portfolio.in</a>
                        </motion.div>

                        {/* Desktop Menu */}
                        <motion.ul
                            variants={navContainer}
                            initial="hidden"
                            animate="show"
                            className="sm:flex hidden gap-10"
                        >
                            <motion.li variants={navItem}>
                                <a
                                    href={`#top`}
                                    className="relative capitalize text-lg text-blue-500 hover:text-blue-800 transition-colors duration-300 group"
                                >
                                    Home
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </motion.li>
                            {
                                navbar.map((obj, index) => (
                                    <motion.li key={index} variants={navItem}>
                                        <a
                                            href={`#${obj}`}
                                            className="relative capitalize text-lg text-blue-500 hover:text-blue-800 transition-colors duration-300 group"
                                        >
                                            {obj}
                                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </motion.li>
                                ))
                            }
                        </motion.ul>

                        {/* Mobile Icon */}
                        <motion.div whileTap={{ scale: 0.85, rotate: 90 }} transition={{ duration: 0.25 }}>
                            {
                                show ?
                                    <CgMenuRightAlt onClick={toggleBtn} className='text-[30px] sm:hidden block cursor-pointer' />
                                    :
                                    <MdCancel onClick={toggleBtn} className='text-[30px] sm:hidden block cursor-pointer' />
                            }
                        </motion.div>

                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`absolute top-[59px] sm:hidden block
                 ${show ? 'translate-x-[-100%]' : 'translate-x-0'} 
                transition-all duration-800
                w-full h-screen bg-white shadow`}>

                <motion.ul
                    variants={navContainer}
                    initial="hidden"
                    animate={show ? "hidden" : "show"}
                    className="flex flex-col gap-3  m-10"
                >
                    <motion.li variants={navItem}>
                        <a
                            href={`#top`}
                            onClick={() => setshow(true)}
                            className="block px-3 py-2 capitalize bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-300"
                        >
                            Home
                        </a>
                    </motion.li>
                    {
                        navbar.map((obj, index) => (
                            <motion.li key={index} variants={navItem}>
                                <a
                                    href={`#${obj}`}
                                    onClick={() => setshow(true)}
                                    className="block px-3 py-2 capitalize bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-300"
                                >
                                    {obj}
                                </a>
                            </motion.li>
                        ))
                    }
                </motion.ul>

            </div>

        </motion.section>
    )
}
