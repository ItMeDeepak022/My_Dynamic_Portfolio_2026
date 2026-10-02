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
                    <div className='flex flex-wrap justify-center items-center gap-3 sm:ml-0 p-2'>
                        <a href="#top" className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="DK Logo"
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-contain shadow-xs border border-gray-100 hover:scale-105 transition-transform"
                            />
                            <motion.span whileHover={{ scale: 1.05 }} className='text-blue-600 font-semibold text-base sm:text-lg'>
                                Portfolio.in
                            </motion.span>
                        </a>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <p className='text-slate-800 text-sm'>Developed ❤️ By <span className='text-purple-600 font-medium'>Deepak Kushwaha</span></p>
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
