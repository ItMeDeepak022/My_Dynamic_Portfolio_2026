import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
    return (

        <footer className="sm:mt-5 mt-0  bg-white shadow-[0_0_3px_rgba(0,0,0,0.2)] text-white py-3 mt-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-full mx-auto"
            >
                <div className=" flex flex-col items-center justify-center space-y-2">
                    <div className='flex justify-center gap-2 sm:ml-0 p-2'>
                        <motion.h1 whileHover={{ scale: 1.08 }} className='text-blue-600'> <a href="#top">Portfolio.in</a> </motion.h1>
                        <p className='text-black'>Developed ❤️ By <span className='text-[purple] font-bold'>Deepak Kushwaha</span></p>
                    </div>
                    <div className="border-t border-gray-200 w-full pt-3">
                        <p className="text-center text-gray-500 text-sm">
                            © 2026 All rights reserved
                        </p>
                    </div>
                </div>
            </motion.div>
        </footer>

    )
}
