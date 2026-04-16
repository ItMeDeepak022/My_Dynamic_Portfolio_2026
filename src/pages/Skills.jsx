import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    <section id="Skills" className="w-full sm:py-8 py-9 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-5 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Skill Card */}

          {
            Skills.map((obj, index) => {
              return (
                <div key={index} className="py-8 bg-white rounded-xl shadow-md border-1 border-[purple] 
                      hover:shadow-xl hover:-translate-y-2 transition duration-300">
                  <h3 className="text-lg font-semibold text-blue-600"> {obj.skill} </h3>
                  
                </div>
              )
            })
          }



        </div>

      </div>
    </section>
  )
}
