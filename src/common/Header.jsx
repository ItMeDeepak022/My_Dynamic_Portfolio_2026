import React, { useState, useEffect } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react';

export default function Header() {
    let [show, setshow] = useState(true)

    let toggleBtn = () => {
        setshow(!show)
    }

    useEffect(() => {
        if (!show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

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
        <>
            {/* Fixed Header Bar */}
            <div className="fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-gray-200/40 shadow-xs transition-all duration-300">
                <motion.header
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[95%] lg:w-[92%] xl:max-w-7xl mx-auto my-2 rounded-full bg-white/95 backdrop-blur-lg border border-gray-200 hover:border-blue-600 transition duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.08)] text-black"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                        <div className="flex justify-between items-center">

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="text-xl sm:text-2xl text-blue-500 font-semibold cursor-pointer"
                            >
                                <a href="#top">Portfolio.in</a>
                            </motion.div>

                            {/* Desktop Menu - visible on large screens */}
                            <motion.ul
                                variants={navContainer}
                                initial="hidden"
                                animate="show"
                                className="hidden lg:flex items-center gap-4 xl:gap-7"
                            >
                                <motion.li variants={navItem}>
                                    <a
                                        href={`#top`}
                                        className="relative capitalize text-sm xl:text-base text-blue-500 hover:text-blue-800 transition-colors duration-300 group"
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
                                                className="relative capitalize text-sm xl:text-base text-blue-500 hover:text-blue-800 transition-colors duration-300 group"
                                            >
                                                {obj}
                                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF4500] transition-all duration-300 group-hover:w-full"></span>
                                            </a>
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>

                            {/* Mobile & Tablet Hamburger Toggle */}
                            <motion.button
                                whileTap={{ scale: 0.85, rotate: 90 }}
                                transition={{ duration: 0.25 }}
                                onClick={toggleBtn}
                                className="block lg:hidden p-1.5 rounded-lg text-gray-800 hover:text-blue-600 focus:outline-none cursor-pointer"
                                aria-label="Toggle navigation menu"
                            >
                                {
                                    show ?
                                        <CgMenuRightAlt className='text-[28px] sm:text-[32px]' />
                                        :
                                        <MdCancel className='text-[28px] sm:text-[32px]' />
                                }
                            </motion.button>

                        </div>
                    </div>
                </motion.header>
            </div>

            {/* Spacer to prevent page content from jumping under fixed header */}
            <div className="h-[74px] sm:h-[80px] w-full shrink-0" aria-hidden="true" />

            {/* Mobile & Tablet Backdrop Overlay */}
            <div
                onClick={() => setshow(true)}
                className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity duration-300 block lg:hidden ${show ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                    }`}
            />

            {/* Mobile & Tablet Slide-out Sidebar */}
            <div className={`fixed top-0 right-0 h-screen h-dvh w-[80vw] max-w-[320px] sm:w-[320px] md:w-[360px] bg-white shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out block lg:hidden ${show ? 'translate-x-full' : 'translate-x-0'
                }`}>

                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <span className="text-xl font-semibold text-blue-500">Portfolio.in</span>
                    <button
                        onClick={() => setshow(true)}
                        className="p-1.5 rounded-full  text-gray-700 transition cursor-pointer"
                        aria-label="Close sidebar"
                    >
                        <MdCancel className="text-2xl text-gray-800 " />
                    </button>
                </div>

                {/* Sidebar Navigation Links */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                    <motion.ul
                        variants={navContainer}
                        initial="hidden"
                        animate={show ? "hidden" : "show"}
                        className="flex flex-col gap-2.5"
                    >
                        <motion.li variants={navItem}>
                            <a
                                href={`#top`}
                                onClick={() => setshow(true)}
                                className="group flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100/80 hover:bg-blue-50/90 border border-slate-200/60 hover:border-blue-200 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 ease-out hover:shadow-xs hover:translate-x-1"
                            >
                                <span>Home</span>
                                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-300 text-sm">
                                    <ChevronRight className='text-[9px]' />
                                </span>
                            </a>
                        </motion.li>
                        {
                            navbar.map((obj, index) => (
                                <motion.li key={index} variants={navItem}>
                                    <a
                                        href={`#${obj}`}
                                        onClick={() => setshow(true)}
                                        className="group flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100/80 hover:bg-blue-50/90 border border-slate-200/60 hover:border-blue-200 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 ease-out hover:shadow-xs hover:translate-x-1"
                                    >
                                        <span>{obj}</span>
                                        <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-300 text-sm">
                                            <ChevronRight className='text-[9px]' />
                                        </span>
                                    </a>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </div>



            </div>
        </>
    )
}
