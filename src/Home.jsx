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
import { ArrowRight, X } from "lucide-react";
import { Monitor, Server, Layers3 } from "lucide-react";

export default function Home() {

  let [loading, setloading] = useState(false)

  const [showPopup, setShowPopup] = useState(true);

  let getmyProfile = () => {
    setloading(true)
    axios.get('https://my-portfolio-backend-2026.onrender.com/portfolio-API/profile-data')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
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

          {showPopup && (
            <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-slate-900/40 px-3 py-3 backdrop-blur-[25px] sm:px-4 sm:py-6">

              {/* Popup */}
              <div className="relative w-full max-w-[650px] rounded-[22px] bg-white text-center shadow-[0_25px_70px_rgba(15,23,42,0.22)] sm:rounded-[28px]">

                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 sm:right-5 sm:top-5 sm:h-10 sm:w-10"
                  aria-label="Close popup"
                >
                  <X size={17} />
                </button>

                {/* Content */}
                <div className="px-4 pb-4 pt-9 sm:px-10 sm:pb-8 sm:pt-12">

                  {/* Badge */}
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-600 bg-orange-600 px-3 py-1 sm:mb-5 sm:px-4 sm:py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />

                    <span className="text-[9px] font-normal uppercase tracking-[0.1em] text-white sm:text-xs">
                      Full Stack Developer • Portfolio
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="mx-auto max-w-[570px] text-[25px] font-normal  leading-[1.15] text-[#2B7FFF] sm:text-4xl md:text-[44px]">

                    Welcome to My{" "}

                    <span className="bg-orange-600 bg-clip-text text-transparent">
                      Portfolio.
                    </span>

                  </h2>

                  {/* Description */}
                  <p className="mx-auto mt-3 max-w-[520px] text-[11px]   text-start font-normal leading-4 text-slate-500 sm:mt-5 sm:text-base sm:leading-7">
                    Hi, I’m{" "}
                    <span className="font-normal text-[#2B7FFF]">
                      Deepak Kushwaha
                    </span>
                    , a passionate{" "}
                    <span className="font-normal text-[#AD46FF]">
                      Full Stack Developer
                    </span>{" "}
                    who enjoys building modern, scalable, and user-friendly web
                    applications from frontend to backend.
                  </p>

                  {/* Secondary Description */}
                  <p className="mx-auto mt-1.5 max-w-[520px] text-[11px] text-start font-normal leading-4 text-slate-400 sm:mt-2 sm:text-sm sm:leading-5">
                    Explore my projects, technical skills, and real-world experience
                    to see how I turn ideas into reliable digital solutions.
                  </p>

                  {/* Highlights */}
                  <div className="mx-auto mt-4 grid max-w-[520px] grid-cols-3 gap-1.5 sm:mt-7 sm:gap-3">

                    {/* Frontend */}
                    <div className="rounded-lg border border-slate-100 bg-slate-50 px-1 py-2.5 sm:rounded-2xl sm:px-2 sm:py-4">
                      <Monitor
                        size={16}
                        strokeWidth={1.8}
                        className="mx-auto mb-1 text-blue-600 sm:mb-2 sm:h-[21px] sm:w-[21px]"
                      />

                      <p className="text-[10px] font-normal text-slate-700 sm:text-sm">
                        Frontend
                      </p>

                      <p className="mt-0.5 text-[8px] font-normal text-slate-400 sm:mt-1 sm:text-xs">
                        React & UI
                      </p>
                    </div>

                    {/* Backend */}
                    <div className="rounded-lg border border-slate-100 bg-slate-50 px-1 py-2.5 sm:rounded-2xl sm:px-2 sm:py-4">
                      <Server
                        size={16}
                        strokeWidth={1.8}
                        className="mx-auto mb-1 text-purple-600 sm:mb-2 sm:h-[21px] sm:w-[21px]"
                      />

                      <p className="text-[10px] font-normal text-slate-700 sm:text-sm">
                        Backend
                      </p>

                      <p className="mt-0.5 text-[8px] font-normal text-slate-400 sm:mt-1 sm:text-xs">
                        APIs & Logic
                      </p>
                    </div>

                    {/* Full Stack */}
                    <div className="rounded-lg border border-slate-100 bg-slate-50 px-1 py-2.5 sm:rounded-2xl sm:px-2 sm:py-4">
                      <Layers3
                        size={16}
                        strokeWidth={1.8}
                        className="mx-auto mb-1 text-orange-500 sm:mb-2 sm:h-[21px] sm:w-[21px]"
                      />

                      <p className="text-[10px] font-normal text-slate-700 sm:text-sm">
                        Full Stack
                      </p>

                      <p className="mt-0.5 text-[8px] font-normal text-slate-400 sm:mt-1 sm:text-xs">
                        End-to-End
                      </p>
                    </div>

                  </div>

                  {/* HR Message */}
                  <div className="mx-auto mt-3 max-w-[520px] rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 sm:mt-6 sm:rounded-xl sm:px-4 sm:py-3">
                    <p className="text-[9px] font-normal leading-3.5 text-slate-500 sm:text-sm sm:leading-5">
                      <span className="font-normal text-slate-700">
                        From concept to deployment —
                      </span>{" "}
                      I focus on clean code, real-world problem solving, and
                      creating digital experiences that make an impact.
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-4 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-normal text-white shadow-md shadow-blue-600/15 sm:mt-7 sm:w-auto sm:rounded-xl sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    Explore My Portfolio

                    <ArrowRight size={16} />
                  </button>

                  {/* Bottom Text */}
                  <p className="mt-2 text-[8px] font-normal text-slate-400 sm:mt-4 sm:text-xs">
                    Thanks for stopping by — I hope you enjoy exploring my work.
                  </p>

                </div>
              </div>
            </div>
          )}

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
