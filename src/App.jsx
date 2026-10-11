import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./assets/Components/Navbar/navbar"
import Logo from "./assets/Digital_logo.png"
import Home from "./assets/Components/Home/home"
import About from "./assets/Components/About/about"
import logo from "./assets/Main.PNG"
import Services from "./assets/Components/Services/services"
import house from "./assets/House.PNG"
import hospital from "./assets/Hospital.PNG"
import health from "./assets/HealthCare.PNG"
import education from "./assets/Education.PNG"
import fintech from "./assets/Fintech.PNG"
import commerce from "./assets/Commerce.PNG"
import { TbStars } from "react-icons/tb";
import { LuRocket } from "react-icons/lu";
import { TbSquareDot } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./assets/Components/Contact/contact"
import map from "./assets/map.PNG"
import usa from "./assets/USA.PNG"
import uk from "./assets/UK.PNG"
import canada from "./assets/CANADA.PNG"
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Portfolio from "./assets/Components/Portfolio/portfolio"
import revive from "./assets/Revive.jpg"
import uni from "./assets/unifresh.jpg"
import king from "./assets/KINGS.jpg"
import voeux from "./assets/voeux.jpg"
import { FaTableList } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";


function App (){
  
  return(
    <>
     <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
