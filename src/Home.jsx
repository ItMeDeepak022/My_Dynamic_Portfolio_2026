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
import Education from './pages/Educational'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


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

  const [text] = useTypewriter({
    words: ['loading...'],
    loop: true,
    delaySpeed: 1100,
  })

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col gap-10 items-center justify-center bg-black z-50">

          <div className="relative flex items-center justify-center">
            <div className="w-18 h-18 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>

          <div className="text-white font-bold text-4xl">
            {text}
            <Cursor />
          </div>

        </div>
      ) : (
        <>
          <Header />
          <ShowData />
          <About />
          <Education />
          <Service />
          <Skills />
          <Internship />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
