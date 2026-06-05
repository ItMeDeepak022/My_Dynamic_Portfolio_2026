import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { MdCancel } from "react-icons/md";

export default function Header() {
    let [show, setshow] = useState(true)

    let toggleBtn = () => {
        setshow(!show)
    }


    let navbar = ["About", "Service", "Skills", "Internship", "Projects", "Certificates", "Contact"]

    return (
        <section className='sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20'>

            <header className="sm:max-w-[90%] max-w-[95%] mx-auto rounded-full mt-2 bg-white backdrop-blur-lg border border-white hover:border-blue-600 transition duration-300 shadow-[0_0_3px_rgba(0,0,0,0.2)] text-black">

                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">

                        {/* ✅ FIXED Portfolio link */}
                        <div className="text-2xl font-bold text-blue-400 cursor-pointer">
                            <a href="#top">Portfolio.in</a>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="sm:flex hidden gap-10">
                            <li >
                                <a
                                    href={`#top`}
                                    className="capitalize text-lg text-blue-500 hover:text-blue-800 border-b-[3px] border-transparent hover:border-[#FF4500] transition"
                                >
                                    Home
                                </a>
                            </li>
                            {


                                navbar.map((obj, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${obj}`}
                                            className="capitalize text-lg text-blue-500 hover:text-blue-800 border-b-[3px] border-transparent hover:border-[#FF4500] transition"
                                        >
                                            {obj}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* Mobile Icon */}
                        {
                            show ?
                                <CgMenuRightAlt onClick={toggleBtn} className='text-[30px] sm:hidden block cursor-pointer' />
                                :
                                <MdCancel onClick={toggleBtn} className='text-[30px] sm:hidden block cursor-pointer' />
                        }

                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`absolute top-[59px] sm:hidden block
                 ${show ? 'left-[-100%]' : 'left-[0px]'} 
                transition-all duration-300
                w-full h-screen bg-white shadow`}>

                <ul className="flex flex-col gap-3  m-10">
                    <li >
                        <a
                            href={`#top`}
                            onClick={() => setshow(true)}
                            className="block px-3 py-2 capitalize bg-gray-200 hover:bg-gray-300 rounded"
                        >
                            Home
                        </a>
                    </li>
                    {
                        navbar.map((obj, index) => (
                            <li key={index}>
                                <a
                                    href={`#${obj}`}
                                    onClick={() => setshow(true)}
                                    className="block px-3 py-2 capitalize bg-gray-200 hover:bg-gray-300 rounded"
                                >
                                    {obj}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>

        </section>
    )
}