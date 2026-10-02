import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import apiClient from "../services/apiClient";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import useScrollDirection from "../hooks/useScrollDirection";
import { fadeVariants, scrollViewport } from "../hooks/scrollVariants";

export default function Certificates() {
    const [Certificate, setCertificate] = useState([]);
    const direction = useScrollDirection();

    let myCertificate = () => {
        apiClient.get("/certificate-data")
            .then((res) => res.data)
            .then((finalRes) => {
                setCertificate(finalRes.data || []);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        myCertificate();
    }, []);

    // Add only one extra slide if fewer than 3 to allow seamless loop in Swiper
    const displayCert = Certificate.length > 0 && Certificate.length < 3 ? [...Certificate, Certificate[0]] : Certificate;

    return (
        <section id="Certificates" className="w-full sm:py-20 py-14 bg-[#F7F9FB] text-black overflow-hidden">
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
                        <Award className="w-3.5 h-3.5" />
                        <span>Verified Credentials</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeVariants(direction, 40)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-3xl sm:text-4xl   text-slate-900 tracking-tight"
                    >
                        My  Certificates
                    </motion.h2>

                    <motion.p
                        variants={fadeVariants(direction, 30)}
                        initial="hidden"
                        whileInView="show"
                        viewport={scrollViewport(0.6)}
                        className="text-gray-600 text-sm sm:text-base mt-3"
                    >
                        Official certifications and specialized training programs I have successfully accomplished.
                    </motion.p>
                </div>

                {/* Swiper Slider */}
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
                        {displayCert.map((obj, index) => {
                            const { certificateImg, certificatePdf, certificateTitle } = obj;
                            const targetLink = certificatePdf || certificateImg;

                            return (
                                <SwiperSlide key={index} className="!h-auto flex">
                                    <div className="group relative flex flex-col justify-between w-full h-full bg-white rounded-2xl border border-gray-200/90 hover:border-blue-400/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

                                        {/* Certificate Image - Fixed Height */}
                                        <div className="relative w-full h-[240px] sm:h-[260px] bg-slate-100/70 p-3 sm:p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                                             
                                            <img
                                                src={certificateImg}
                                                alt={certificateTitle}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-medium text-slate-700 shadow-xs border border-gray-200/60 flex items-center gap-1.5">
                                                <Award className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Verified Credential</span>
                                            </div>
                                        </div>

                                        {/* Card Content - Fixed Structure */}
                                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                                            <div>
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium mb-3">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                    <span>Certified Achievement</span>
                                                </div>

                                                {/* Title with min-height for perfect alignment */}
                                                <div className="min-h-[52px] flex items-center mb-2">
                                                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {certificateTitle}
                                                    </h3>
                                                </div>

                                                {/* Fixed Height Description */}
                                                <p className="text-sm text-slate-500 line-clamp-2 h-[40px] leading-relaxed">
                                                    Official verified program certificate demonstrating technical mastery and skill development.
                                                </p>
                                            </div>

                                            {/* Action Button */}
                                            <div className="pt-4 border-t border-gray-100 mt-4">
                                                <a
                                                    href={targetLink}
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
