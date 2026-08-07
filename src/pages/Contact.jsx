import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

const formContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const fieldItem = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function Contact() {

    let [loader, setloader] = useState(false)

    let getTouch = (e) => {

        setloader(true)
        e.preventDefault()

        let obj = {
            "email": e.target.email.value,
            "mobileNo": e.target.mobileNo.value,
            "name": e.target.name.value,
            "message": e.target.message.value
        }

        axios.post(`https://portfolio-backend-deploy-nu.vercel.app/api/Info`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setloader(false)
                    toast.success(finalRes.message)
                    e.target.reset()
                }

            })
    }



    return (

        <>
            <Toaster position="top-right" />

            <div id='Contact' className=" grid sm:grid-cols-[60%_auto] min-h-screen sm:gap-0 bg-white overflow-hidden">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className='bg-white sm:block hidden h-155 '
                >
                    <img
                        src="https://media.istockphoto.com/id/1314928089/vector/usability-testing-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=r2nllU7Oqcs1jJr6uzWAGW7WhwOjzo_onKXi7P6B9Ks="
                        alt=""
                        className='h-full w-full object-contain'
                    />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className=" bg-white sm:h-155 h-155 shadow-lg border sm:border-gray-200 rounded-[10px] border-cyan-500  p-8 sm:m-6 m-5 mt-20 sm:mt-20 "
                >

                    {/* Heading */}
                    <h1 className="sm:text-4xl text-3xl font-bold text-black mb-5 text-center">
                        Get in Touch
                    </h1>

                    {/* Form */}
                    <motion.form
                        variants={formContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-5"
                        onSubmit={getTouch}
                    >

                        {/* Name */}
                        <motion.div variants={fieldItem}>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black transition-shadow duration-300"
                                required
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={fieldItem}>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black transition-shadow duration-300"
                                required
                            />
                        </motion.div>

                        {/* Mobile */}
                        <motion.div variants={fieldItem}>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Mobile No
                            </label>
                            <input
                                type="tel"
                                name='mobileNo'
                                placeholder="+91 9876543210"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black transition-shadow duration-300"
                                required
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={fieldItem}>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Message
                            </label>
                            <textarea
                                placeholder="Your message..."
                                rows="5"
                                name='message'
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none resize-none bg-white text-black transition-shadow duration-300"
                                required
                            />
                        </motion.div>

                        {/* Button */}
                        <motion.button
                            variants={fieldItem}
                            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(37,99,235,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full flex justify-center items-center gap-5  bg-blue-600 hover:bg-blue-700 text-white 
                   font-bold py-3 px-4 rounded-lg 
                   transition-colors duration-300 shadow-md "
                        >
                            Send Message
                            {
                                loader && (
                                    <div className="w-8 h-8 rounded-full animate-spin
                    border-5 border-dotted  border-white border-t-transparent"></div>
                                )
                            }

                        </motion.button>

                    </motion.form>
                </motion.div>

            </div>

        </>
    )
}
