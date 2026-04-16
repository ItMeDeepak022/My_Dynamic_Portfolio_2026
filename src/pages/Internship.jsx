import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Internship() {
    return (
        <>
            <section id="Internship" className=" w-full sm:py-16 py-14 bg-gray-100">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-black sm:mb-8 mb-5">
                    My Internships
                </h2>

                {/* Slider */}
                <div className="max-w-[500px] mx-auto px-8 py-5">

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{ delay: 2500 }}
                        pagination={{ clickable: true }}

                        breakpoints={{
                            320: { slidesPerView: 1 },

                        }}
                    >

                        {/* Card 1 */}
                        <SwiperSlide>
                            <div className="border-1 border-[cyan] pb-8 mx-auto max-w-[400px] sm:h-[350px] bg-white rounded-xl  shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

                                <div className="bg-black flex justify-center items-center h-[230px]">
                                    <img
                                        src="https://www.wscubetech.com/images/ws-cube-white-logo.svg"
                                        alt="company"
                                        className="h-full object-contain"
                                    />
                                </div>

                                <div className="p-5 text-center flex-1">
                                    <h3 className="text-xl font-bold text-black mb-2">
                                        WsCube Tech
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                        Frontend Developer Intern
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="border-1 border-[cyan] pb-8 mx-auto max-w-[400px] sm:h-[350px] bg-white rounded-xl  shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

                                <div className="bg-black flex justify-center items-center h-[230px]">
                                    <img
                                        src="https://www.wscubetech.com/images/ws-cube-white-logo.svg"
                                        alt="company"
                                        className="h-full object-contain"
                                    />
                                </div>

                                <div className="p-5 text-center flex-1">
                                    <h3 className="text-xl font-bold text-black mb-2">
                                        WsCube Tech
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                        Frontend Developer Intern
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>



                    </Swiper>

                </div>

            </section>



        </>
    );
}


//<section className="Internship sm:block hidden min-h-screen bg-white  px-4 ">
<div className="sm:max-w-[60%]  max-w-[90%] mx-auto py-15 ">
    <h1 className="text-4xl font-bold text-black mt-5  sm:mb-15 mb-10 text-center">Internships</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Card 1 */}
        <div className="w-full border-1 border-[purple] sm:h-[400px] flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className='w-full flex-1 bg-black'>
                <img src="https://www.wscubetech.com/images/ws-cube-white-logo.svg" alt="Company 1" className="h-50 object-contain" />
            </div>
            <div className="p-6 text-center bg-white">
                <h2 className="text-2xl font-bold text-black mb-2">Company Name</h2>
                <p className="text-blue-400 font-bold text-lg">Intern Position Title</p>
            </div>
        </div>

        {/* Card 2 */}
        <div className="w-full border-1 border-[purple] sm:h-[400px] flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className='w-full flex-1 bg-black'>
                <img src="https://www.wscubetech.com/images/ws-cube-white-logo.svg" alt="Company 1" className="h-50 object-contain" />
            </div>
            <div className="p-6 text-center bg-white">
                <h2 className="text-2xl font-bold text-black mb-2">Company Name</h2>
                <p className="text-blue-400 font-bold text-lg">Intern Position Title</p>
            </div>
        </div>
    </div>
</div>
//</section >