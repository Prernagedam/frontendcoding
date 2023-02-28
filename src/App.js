import React from 'react'
import Aboutme from './Aboutme/Aboutme'
import Home from './Components/home/Home'
import Contact from './Contact/Contact.js/Contact'
import Footer from './Fotter/Footer'
import Navbar from './Navbar/Navbar'
import Skills from './Skills/Skills'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Aboutme/>
    <Skills/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App