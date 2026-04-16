import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

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

            <div id='Contact' className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">

                <div className="max-w-[500px] mx-auto bg-white rounded-xl shadow-lg border border-cyan-500 p-8">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-black mb-8 text-center">
                        Get in Touch
                    </h1>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={getTouch}>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black"
                                required
                            />
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Mobile No
                            </label>
                            <input
                                type="tel"
                                name='mobileNo'
                                placeholder="+91 9876543210"
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none bg-white text-black"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                                Message
                            </label>
                            <textarea
                                placeholder="Your message..."
                                rows="5"
                                name='message'
                                className="w-full px-4 py-2 border border-cyan-400 rounded-lg 
                     focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                     outline-none resize-none bg-white text-black"
                                required
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-5  bg-blue-600 hover:bg-blue-700 text-white 
                   font-bold py-3 px-4 rounded-lg 
                   transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Send Message
                            {
                                loader && (
                                    <div class="w-9 h-9 rounded-full animate-spin
                    border-5 border-dotted  border-white border-t-transparent"></div>
                                )
                            }

                        </button>

                    </form>
                </div>

            </div>

        </>
    )
}
