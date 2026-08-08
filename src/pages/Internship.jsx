import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";
import { fadeVariants, scrollViewport } from "../hooks/scrollVariants";

export default function Internship() {
    const [intern, setIntern] = useState([]);
    const direction = useScrollDirection();

    const getmyIntern = async () => {
        try {
            const res = await axios.get(
                "https://my-portfolio-backend-2026.onrender.com/portfolio-API/internship-data"
            );
            setIntern(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmyIntern();
    }, []);

    return (
        <section id="Internship" className="w-full py-14 bg-gray-100 overflow-hidden">

            {/* Heading */}
            <motion.h2
                variants={fadeVariants(direction, 40)}
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport(0.6)}
                className="text-3xl sm:text-4xl font-bold text-center text-black mb-8"
            >
                My Internships
            </motion.h2>

            <motion.div
                variants={fadeVariants(direction, 60, 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport(0.2)}
                className="max-w-[500px] mx-auto px-4"
            >

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                >

                    {intern.map((obj, index) => {
                        const { companyName, internPosition, internImg } = obj;

                        return (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03, y: -6 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="border border-cyan-400 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                                >

                                    {/* Image */}
                                    <div className="sm:h-[300px] h-[250px] flex items-center justify-center bg-white">
                                        <img
                                            src={internImg}
                                            alt="company"
                                            className="w-full h-full sm:object-fill object-contain "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 text-center bg-gray-50">
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            {companyName}
                                        </h3>
                                        <p className="text-blue-600 font-semibold">
                                            {internPosition}
                                        </p>
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
            </motion.div>
        </section>
    );
}
