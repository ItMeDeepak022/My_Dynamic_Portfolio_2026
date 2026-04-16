import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import ShowData from './pages/ShowData'
import About from './pages/About'
import Services from './pages/Service'
import Service from './pages/Service'
import Skills from './pages/Skills'
import Internship from './pages/Internship'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import axios from 'axios'

export default function Home() {

  let [loading, setloading] = useState(false)
  

  let getmyProfile = () => {
    setloading(true)
    axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/profile-data')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setloading(false)
        
      })
  }

  useEffect(() => {
    getmyProfile()
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-md z-50">

        <div className="relative flex items-center justify-center">

          {/* Outer Pulse Circle */}
          <div className="absolute w-20 h-20 rounded-full bg-[purple] opacity-30 animate-ping"></div>

          {/* Inner Spinner */}
          <div className="w-18 h-18 border-8 border-dotted border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

        </div>

      </div>
    );
  }

  return (
    <div>
      <Header />
      <ShowData  />
      <About />
      <Service />
      <Skills />
      <Internship />
      <Projects />
      <Certificates />
      <Contact />

      <Footer />

    </div>









  )
}
