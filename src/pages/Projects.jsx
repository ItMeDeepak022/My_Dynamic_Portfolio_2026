import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/pagination";

// modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Projects() {
    return (
        <section id='Projects' className="py-16 px-6 md:px-12 lg:px-20 bg-white text-black">

            <div className="max-w-[1320px]  mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    My Latest Projects
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}

                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >

                    {/* Card 1 */}
                    <SwiperSlide>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-purple-600 hover:-translate-y-2">

                            <img src="project1.jpg" alt="Project 1" className="w-full h-65 object-cover" />

                            <div className="p-6 bg-gray-200 text-black ">
                                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                                <p className="text-gray-700 mb-4">
                                    Brief description of your project and the technologies used.
                                </p>

                                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                                    Live View
                                </a>
                            </div>

                        </div>
                    </SwiperSlide>

                     
                    {/* Card 1 */}
                    <SwiperSlide>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-purple-600 hover:-translate-y-2">

                            <img src="project1.jpg" alt="Project 1" className="w-full h-65 object-cover" />

                            <div className="p-6 bg-gray-200 text-black ">
                                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                                <p className="text-gray-700 mb-4">
                                    Brief description of your project and the technologies used.
                                </p>

                                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                                    Live View
                                </a>
                            </div>

                        </div>
                    </SwiperSlide>

                    
                    {/* Card 1 */}
                    <SwiperSlide>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-purple-600 hover:-translate-y-2">

                            <img src="project1.jpg" alt="Project 1" className="w-full h-65 object-cover" />

                            <div className="p-6 bg-gray-200 text-black ">
                                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                                <p className="text-gray-700 mb-4">
                                    Brief description of your project and the technologies used.
                                </p>

                                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                                    Live View
                                </a>
                            </div>

                        </div>
                    </SwiperSlide>

                    
                    {/* Card 1 */}
                    <SwiperSlide>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-purple-600 hover:-translate-y-2">

                            <img src="project1.jpg" alt="Project 1" className="w-full h-65 object-cover" />

                            <div className="p-6 bg-gray-200 text-black ">
                                <h3 className="text-2xl font-bold mb-3">Project Name</h3>
                                <p className="text-gray-700 mb-4">
                                    Brief description of your project and the technologies used.
                                </p>

                                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                                    Live View
                                </a>
                            </div>

                        </div>
                    </SwiperSlide>
                    
                </Swiper>

            </div>
        </section>
    );
}