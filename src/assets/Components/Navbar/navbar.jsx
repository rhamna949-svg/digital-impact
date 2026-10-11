import React from "react";
import "./navbar.css";
import Logo from "../../../assets/Digital_logo.png"
import { Link } from "react-router-dom";

const Navbar =() => {
    return(
        <>
          <nav class="navbar">
        <img src={Logo} alt="" width={150} height={100} />
        <ul class="nav">
            <li>
             <Link to="/">Home</Link>   
            </li>
            <li>
              <Link to="/services">Services</Link>  
                </li>
            <li>
               <Link to="/about">About Us</Link> 
                </li>
            <li>
             <Link to="/portfolio">Portfolio</Link>   
                </li>
            <li>
              <Link to="/contact"><button class="btn1">Contact Us</button></Link>  
               </li>
        </ul>
     </nav>
      


        </>
    )
}
export default Navbar
