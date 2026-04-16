import React from 'react'
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

export default function Home() {
  return (
    <div>
      <Header />
      <ShowData />
      <About />
      <Service />
      <Skills />
      <Internship />
      <Projects />
      <Certificates />
      <Contact />

      <Footer/>

</div>








    
  )
}
