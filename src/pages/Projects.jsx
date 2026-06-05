import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/pagination";

// modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

export default function Projects() {

    const [project, setproject] = useState([]);

    let myproject = () => {
        axios.get("https://my-portfolio-backend-2026.onrender.com/portfolio-API/project-data")
            .then((res) => res.data).then((finalRes) => {
                // console.log(finalRes);
                setproject(finalRes.data)
            })


    }

    useEffect(() => {
        myproject();
    }, []);

    return (
        <section id='Projects' className="py-16 px-4 md:px-12 lg:px-20 bg-white text-black">

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

                    {
                        project.map((obj, index) => {
                            let { projectTitle, aboutProject, projectLink, projectImg } = obj
                           
                            return (

                                < SwiperSlide >
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-purple-600 hover:-translate-y-2">

                                        <img src={projectImg} alt="Project 1" className="w-full h-65 object-fill" />

                                        <div className="sm:p-6 p-3 bg-gray-200 text-black ">
                                            <h3 className="text-2xl font-bold mb-3"> {projectTitle} </h3>
                                            <p className="text-gray-700 mb-4">
                                                {aboutProject}
                                            </p>

                                            <a href={projectLink} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">
                                                Live View
                                            </a>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }








                </Swiper>

            </div>
        </section >
    );
}