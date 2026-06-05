import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

export default function Certificates() {
    const [Certificate, setCertificate] = useState([]);

    let myCertificate = () => {
        axios.get("https://my-portfolio-backend-2026.onrender.com/portfolio-API/certificate-data")
            .then((res) => res.data).then((finalRes) => {
                // console.log(finalRes);
                setCertificate(finalRes.data)
            })


    }

    useEffect(() => {
        myCertificate();
    }, []);

    return (
        <section id="Certificates" className="w-full py-16 bg-gray-100">

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


                    {
                        Certificate.map((obj, index) => {
                            let { certificateImg, certificatePdf, certificateTitle } = obj

                            return (
                                < SwiperSlide >
                                    <div className="border border-blue-500 sm:w-[70%] mx-auto sm:h-[400px] w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden">

                                        <div className="bg-gray-100 flex justify-center items-center sm:h-[300px] h-[250px]">
                                            <a href={certificatePdf} className="w-full h-full">
                                                <img
                                                    src={certificateImg}
                                                    alt="Certificate"
                                                    className="w-full h-full object-contain sm:object-fill"
                                                />
                                            </a>
                                        </div>

                                        <div className="p-5 text-center flex-1">
                                            <h3 className="text-lg font-bold text-black mb-2">
                                                {certificateTitle}
                                            </h3>

                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }




                </Swiper>

            </div >

        </section >
    );
}