import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } }
}

const cardVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: "backOut" } }
}

export default function Skills() {
  let [Skills, setSkills] = useState([])
  let getmySKills = () => {

    axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/skill-data')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setSkills(finalRes.data)
      })
  }

  useEffect(() => {
    getmySKills()
  }, [])

  return (
    <section id="Skills" className="w-full sm:py-8 py-9 bg-gray-100 text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-5 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >

          {
            Skills.map((obj, index) => {
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.08, y: -6, boxShadow: "0 10px 25px rgba(147,51,234,0.25)" }}
                  className="py-8 bg-white rounded-xl shadow-md border-1 border-[purple] 
                      transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-blue-600"> {obj.skill} </h3>

                </motion.div>
              )
            })
          }



        </motion.div>

      </div>
    </section>
  )
}
