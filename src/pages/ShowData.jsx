import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function ShowData() {

    const [text] = useTypewriter({
        words: ["Frontend Developer...", "Web Developer...", "MERN Stack Developer..."],
        loop: true,
        delaySpeed: 2500,
    })

    return (

        <>
            <div className="w-full relative mt-2 sm:py-15 py-5 mx-auto flex sm:flex-row flex-col-reverse sm:gap-0 gap-10 justify-around items-center h-auto bg-gray-100 sm:px-8">

                {/* Left Part */}
                <div className="sm:max-w-[70%] max-w-[100%] text-black sm:text-start text-center">
                    <h1 className="sm:text-5xl text-4xl font-bold sm:mb-4 sm:mt-0 mt-3 mb-0">
                        Hi, I'm <span className="text-blue-500">Deepak Kushwaha</span>
                    </h1>

                    <div className="sm:text-3xl text-2xl sm:font-semibold font-bold sm:p-0 p-2">
                        <span className="text-purple-500 font-bold">
                            {text}
                            <Cursor />
                        </span>
                    </div>
                    <p className="text-gray-700 mt-1 max-w-md">
                        Passionate about creating beautiful & full responsive & functional web experiences.
                    </p>
                    <div className='BTNs w-[80%] sm:w-[50%] mx-auto  mt-4 flex justify-center sm:gap-10 gap-5 items-center py-3'>
                        {/* GitHub */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                            <a href={'https://github.com/ItMeDeepak022'}><FaGithub className='text-[32px]' /></a>
                        </div>

                        {/* LinkedIn */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#0A66C2] hover:text-white transition duration-300 cursor-pointer">
                            <a href="https://www.linkedin.com/in/deepakkushwaha022/"><FaLinkedinIn className='text-[32px]' /></a>
                        </div>

                        {/* Instagram */}
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 hover:text-[red] hover:bg-white   transition duration-300 cursor-pointer">
                            <a href="https://www.instagram.com/___its_silentboy/"><FaInstagram className='text-[32px]' /></a>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-3 text-white font-bold sm:mt-5 mt-5 group-hover:active:select-all'>
                        <button className='cursor-pointer px-4 sm:py-3 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:scale-102 hover:text-cyan-400 
           hover:shadow-md hover:shadow-cyan-500/50 
           transition duration-300 '> <a href="#Contact" >Get Touch</a> </button>
                        <button className='cursor-pointer px-4 sm:py-3 py-3 bg-[blue] rounded-2xl hover:bg-[purple] hover:scale-102 hover:text-cyan-400 
           hover:shadow-md hover:shadow-cyan-500/50 
           transition duration-300'> <a href="https://itmedeepak022.github.io/-Portfolio-/images/Deepak054.pdf"
                            >Download CV</a> </button>
                    </div>






                </div>

                {/* Right Part */}
                <div className="sm:max-w-[30%] max-w-[100%] flex justify-center">
                    <div className="sm:w-80 w-70 h-70 bg-white  sm:h-80 rounded-full border-5 border-blue-500 hover:border-[purple] transition-all duration-300 overflow-hidden shadow-2xl">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQGSg9ek5m4Oww/profile-displayphoto-scale_200_200/B56ZwJK7dBIUAc-/0/1769680387798?e=1777507200&v=beta&t=_PLJ-ISrE-PXhXZ8SAnmWupgVqeoZtPBFeSeqlXhlaQ"
                            alt="Profile"
                            className="w-full h-full object-fill"
                        />
                    </div>
                </div>


            </div>
        </>




    )
}
