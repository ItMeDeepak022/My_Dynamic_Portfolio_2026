import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import ShowData from './pages/ShowData'
import About from './pages/About'
import Service from './pages/Service'
import Skills from './pages/Skills'
import Internship from './pages/Internship'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Education from './pages/Educational'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { font } from './config/font'
import apiClient from './services/apiClient'

export default function Home() {

  let [loading, setloading] = useState(false)


  let getmyProfile = () => {
    setloading(true)
    apiClient.get('/profile-data')
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        setloading(false)
      })
  }


  const [text] = useTypewriter({
    words: ['loading...'],
    loop: true,
    delaySpeed: 1100,
  })

  useEffect(() => {
    getmyProfile();
  }, [])

  return (
    <>
      {loading ? (
        <div className={` ${font.poppins} ${font.regular} fixed inset-0 flex flex-col gap-10 items-center justify-center bg-[#0000009e] z-50`}>

          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <img src="/logo.png" alt="DK Logo" className="w-12 h-12 rounded-full absolute object-contain" />
          </div>

          <div className="text-black font-regular text-4xl">
            {text}
            <Cursor />
          </div>

        </div>
      ) : (
        <div id="top" className={`${font.poppins} ${font.regular} w-full`} >



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
        </div>
      )}
    </>
  );
}
