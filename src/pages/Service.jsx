import React from 'react'

export default function Service() {
    return (
        <section  id='Service' className=" w-full sm:py-20 py-16  bg-white text-black">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    My Services
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Frontend */}
                    <div className="group relative overflow-hidden sm:p-6 p-3 rounded-2xl shadow-md  border border-cyan-400
                  hover:shadow-md hover:-translate-y-2 transition duration-300 min-h-[200px]">

                        <div className="absolute bottom-0 left-0 w-full h-0 bg-purple-600 
                    group-hover:h-full transition-all duration-500 z-0"></div>

                        <div className="relative z-10 transition duration-300">
                            <h3 className="text-[22px] font-bold mb-3 text-purple-600 group-hover:text-white">
                                Frontend Development
                            </h3>

                            <p className="text-gray-600 group-hover:text-white text-justify">
                                I build responsive and modern user interfaces using React.js, Tailwind CSS, and JavaScript,
                                focusing on clean design, smooth user experience, and optimized performance across all devices.
                            </p>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="group relative overflow-hidden sm:p-6 p-3 rounded-2xl  border   border-cyan-400 shadow-md 
                  hover:shadow-xl hover:-translate-y-2 transition duration-300 min-h-[200px]">

                        <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 
                    group-hover:h-full transition-all duration-500 z-0"></div>

                        <div className="relative z-10 transition duration-300">
                            <h3 className="text-[22px] font-bold mb-3 text-red-600 group-hover:text-white">
                                Backend Development
                            </h3>

                            <p className="text-gray-600 group-hover:text-white text-justify">
                                I develop secure and scalable backend systems using Node.js and Express, managing databases
                                like MongoDB, building REST APIs, and handling authentication with efficient server performance.
                            </p>
                        </div>
                    </div>

                    {/* API Integration */}
                    <div className="group relative overflow-hidden sm:p-6 p-3 rounded-2xl  border border-cyan-400 shadow-md 
                  hover:shadow-xl hover:-translate-y-2 transition duration-300 min-h-[200px]">

                        <div className="absolute bottom-0 left-0 w-full h-0 bg-green-600 
                    group-hover:h-full transition-all duration-500 z-0"></div>

                        <div className="relative z-10 transition duration-300">
                            <h3 className="text-[22px] font-bold mb-3 text-green-600 group-hover:text-white">
                                API Integration
                            </h3>

                            <p className="text-gray-600 group-hover:text-white text-justify">
                                I integrate REST APIs to connect frontend and backend seamlessly, handling real-time data,
                                improving application functionality, and ensuring fast and reliable user experiences.
                            </p>
                        </div>
                    </div>

                    {/* MERN Stack */}
                    <div className="group relative overflow-hidden sm:p-6 p-3 rounded-2xl border border-cyan-400 shadow-md 
                  hover:shadow-xl hover:-translate-y-2 transition duration-300 min-h-[200px]">

                        <div className="absolute bottom-0 left-0 w-full h-0 bg-indigo-600 
                    group-hover:h-full transition-all duration-500 z-0"></div>

                        <div className="relative z-10 transition duration-300">
                            <h3 className="text-[22px] font-bold mb-3 text-indigo-600 group-hover:text-white">
                                MERN Stack Development
                            </h3>

                            <p className="text-gray-600 group-hover:text-white text-justify">
                                I build full-stack web applications using MongoDB, Express, React, and Node.js, creating
                                scalable solutions with seamless frontend-backend integration and efficient data handling.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
