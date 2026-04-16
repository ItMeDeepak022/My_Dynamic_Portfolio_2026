import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Certificates() {
    return (
        <section id="Certificates" className="w-full py-16 bg-white">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-black sm:mb-12 mb-5">
                My Certificates
            </h2>

            {/* Slider */}
            <div className="sliders max-w-[800px] mx-auto px-3 py-5">

                <Swiper
                    modules={[Autoplay, Pagination]}

                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },


                    }}
                >

                    {/* Certificate 1 */}
                    < SwiperSlide >
                        <div className="border border-blue-500 sm:w-[70%] mx-auto sm:h-[400px] w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden">

                            <div className="bg-gray-100 flex justify-center items-center sm:h-[300px] h-[250px]">
                                <img
                                    src="certificate1.jpg"
                                    alt="Certificate"
                                    className="h-full object-contain"
                                />
                            </div>

                            <div className="p-5 text-center flex-1">
                                <h3 className="text-lg font-bold text-black mb-2">
                                    MERN Stack Certification
                                </h3>
                                <p className="text-blue-600 font-semibold">
                                    Issued by WsCube Tech
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>

                    {/* Certificate 2 */}
                    < SwiperSlide >
                        <div className="border border-blue-500 sm:w-[70%] mx-auto sm:h-[400px] w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden">

                            <div className="bg-gray-100 flex justify-center items-center sm:h-[300px] h-[250px]">
                                <img
                                    src="certificate1.jpg"
                                    alt="Certificate"
                                    className="h-full object-contain"
                                />
                            </div>

                            <div className="p-5 text-center flex-1">
                                <h3 className="text-lg font-bold text-black mb-2">
                                    MERN Stack Certification
                                </h3>
                                <p className="text-blue-600 font-semibold">
                                    Issued by WsCube Tech
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>

            </div >

        </section >
    );
}