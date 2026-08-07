import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { motion } from "framer-motion";

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
        <section id="Certificates" className="w-full py-16 bg-gray-100 overflow-hidden">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-4xl font-bold text-center text-black sm:mb-12 mb-5"
            >
                My Certificates
            </motion.h2>

            {/* Slider */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="sliders max-w-[800px] mx-auto px-3 py-5"
            >

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
                                <SwiperSlide key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -6 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="border border-blue-500 sm:w-[70%] mx-auto sm:h-[400px] w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                                    >

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

                                    </motion.div>
                                </SwiperSlide>
                            )
                        })
                    }




                </Swiper>

            </motion.div>

        </section >
    );
}
