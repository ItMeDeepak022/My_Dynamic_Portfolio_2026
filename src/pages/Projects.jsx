import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/pagination";

// modules
import { Autoplay, Pagination } from "swiper/modules";
import apiClient from "../services/apiClient";
import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";
import { fadeVariants, scrollViewport } from "../hooks/scrollVariants";

export default function Projects() {

    const [project, setproject] = useState([]);
    const direction = useScrollDirection();

    let myproject = () => {
        apiClient.get("/project-data")
            .then((res) => res.data).then((finalRes) => {
                // console.log(finalRes);
                setproject(finalRes.data)
            })


    }

    useEffect(() => {
        myproject();
    }, []);

    return (
        <section id='Projects' className="py-16 px-4 md:px-12 lg:px-20 bg-white text-black overflow-hidden">

            <div className="max-w-[1320px]  mx-auto">

                <motion.h2
                    variants={fadeVariants(direction, 40)}
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport(0.6)}
                    className="text-4xl text-center mb-12"
                >
                    My Latest Projects
                </motion.h2>

                <motion.div
                    variants={fadeVariants(direction, 60, 0.7)}
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport(0.15)}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2500 }}
                        pagination={{ clickable: true }}

                        breakpoints={{
                            320: { slidesPerView: 1 },
                            // 640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >

                        {
                            project.map((obj, index) => {
                                let { projectTitle, aboutProject, projectLink, projectImg } = obj

                                return (

                                    <SwiperSlide key={index}>
                                        <motion.div
                                            whileHover={{ scale: 1.03, y: -8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className=" rounded-lg overflow-hidden shadow-lg   border border-purple-600"
                                        > 

                                            <img src={projectImg} alt="Project 1" className="w-full h-65 object-fill" />

                                            <div className="sm:p-6 p-3 bg-slate-100   border-t-1 border-t-gray-300">
                                                <h3 className="text-[20px] text-[#1447E6] mb-3"> {projectTitle} </h3>
                                                <p className="text-gray-500 text-[14px] mb-4">
                                                    {aboutProject}
                                                </p>

                                                <motion.a
                                                    whileHover={{ scale: 1.06 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={projectLink}
                                                    className="inline-block text-[14px] bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors"
                                                >
                                                    Live View
                                                </motion.a>
                                            </div>

                                        </motion.div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </motion.div>

            </div>
        </section >
    );
}
