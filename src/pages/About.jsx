import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function About() {
    let [profileData, setprofileData] = useState([])
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
            <section id='About' className="  w-full py-9 sm:py-10 bg-white text-black">
                <h2 className="text-center text-4xl font-bold sm:m-10 mt-9 mb-9 text-black">
                    About Me
                </h2>
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center sm:gap-15 gap-10">

                    {/* Left Side - Profile Image */}
                    <div className="sm:max-w-[30%] max-w-[100%] flex justify-center">
                        {
                            profileData.map((obj, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="relative sm:w-80 w-70 sm:h-80 h-70 rounded-full border-4 border-blue-500 hover:border-purple-500 transition-all duration-300 overflow-hidden bg-gray-100 flex items-start justify-center"
                                    >
                                        <img
                                            src={obj.profileImg}
                                            alt="Profile"
                                            className="w-full  object-contain object-top
                                        absolute top-[-15px] left-[-5px]  
                                        "
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Right Side - About Content */}
                    <div className="md:w-full sm:text-justify  text-justify p-1">



                        <p className="text-gray-800 text-lg leading-relaxed mb-4">
                            Hi, I'm <span className="text-blue-600 font-semibold">Deepak Kushwaha</span>,
                            a passionate <span className="text-blue-600">Frontend Developer</span>,
                            <span className="text-blue-600"> MERN Stack Developer</span>, and
                            <span className="text-blue-600"> Web Developer</span>.
                            I specialize in building responsive, modern, and user-friendly web applications
                            using technologies like React.js, JavaScript, Tailwind CSS, Node.js, Express, and MongoDB.
                        </p>

                        <p className="text-gray-700 mb-4">
                            I have strong experience in <span className="text-blue-600 font-medium">API Integration</span>
                            and working with <span className="text-blue-600 font-medium">REST APIs</span>, connecting frontend
                            with backend to create dynamic and real-time applications. I focus on clean UI,
                            smooth user experience, and performance optimization.
                        </p>

                        <p className="text-gray-700 mb-6">
                            I am continuously improving my skills in full-stack development, problem-solving,
                            and modern web technologies. I enjoy building real-world projects and turning ideas
                            into scalable applications.
                        </p>

                        {/* Skills / Keywords */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Frontend Developer</span>
                            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">MERN Stack</span>
                            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">React.js</span>
                            <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">API Integration</span>
                            <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">MongoDB</span>
                        </div>

                    </div>

                </div>

            </section>
        </>



    )
}


