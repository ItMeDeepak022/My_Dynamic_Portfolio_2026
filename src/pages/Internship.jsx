import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import apiClient from "../services/apiClient";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import useScrollDirection from "../hooks/useScrollDirection";
import { fadeVariants, scrollViewport } from "../hooks/scrollVariants";

export default function Internship() {
    const [intern, setIntern] = useState([]);
    const direction = useScrollDirection();

    const getmyIntern = async () => {
        try {
            const res = await apiClient.get("/internship-data");
            setIntern(res.data.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmyIntern();
    }, []);

    // Add only one extra slide if fewer than 3 to allow seamless loop in Swiper
    const displayIntern = intern.length > 0 && intern.length < 3 ? [...intern, intern[0]] : intern;

    return (
        <section id="Internship" className="w-full sm:py-20 py-14 bg-gradient-to-b from-gray-50 via-slate-100/60 to-gray-50 text-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <motion.div
                        variants={fadeVariants(direction, 20)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs sm:text-sm font-medium mb-3 shadow-xs"
                    >
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Work Experience</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeVariants(direction, 40)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-3xl sm:text-4xl   text-slate-900 tracking-tight"
                    >
                        My Internships
                    </motion.h2>

                    <motion.p
                        variants={fadeVariants(direction, 30)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-gray-600 text-sm sm:text-base mt-3"
                    >
                        Industrial training and hands-on professional software development experience.
                    </motion.p>
                </div>

                {/* Swiper Container */}
                <motion.div
                    variants={fadeVariants(direction, 40, 0.7)}
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport(0.15)}
                    className="relative max-w-5xl mx-auto"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay:1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 28,
                            },
                        }}
                        className="pb-4"
                    >
                        {displayIntern.map((obj, index) => {
                            const { companyName, internPosition, internImg } = obj;

                            return (
                                <SwiperSlide key={index} className="!h-auto flex">
                                    <div className="group relative flex flex-col justify-between w-full h-full bg-white rounded-2xl border border-gray-200/90 hover:border-blue-400/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

                                        {/* Image Section - Fixed Height */}
                                        <div className="relative w-full h-[240px] sm:h-[260px] bg-slate-100/70 p-3 sm:p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                                            <a
                                                href={internImg}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full flex items-center justify-center cursor-pointer"
                                            >
                                                <img
                                                    src={internImg}
                                                    alt={companyName}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            </a>
                                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-medium text-slate-700 shadow-xs border border-gray-200/60 flex items-center gap-1.5">
                                                <Building2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>{companyName}</span>
                                            </div>
                                        </div>

                                        {/* Card Content - Fixed Structure */}
                                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                                            <div>
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium mb-3">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                    <span>Industrial Internship</span>
                                                </div>

                                                {/* Title with min-height for perfect alignment */}
                                                <div className="min-h-[52px] flex items-center mb-2">
                                                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {internPosition}
                                                    </h3>
                                                </div>

                                                {/* Fixed Height Description */}
                                                <p className="text-sm text-slate-500 line-clamp-2 h-[40px] leading-relaxed">
                                                    Practical software engineering experience and hands-on project training at {companyName}.
                                                </p>
                                            </div>

                                            {/* Action Button */}
                                            <div className="pt-4 border-t border-gray-100 mt-4">
                                                <a
                                                    href={internImg}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-xs"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>View Certificate</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}
