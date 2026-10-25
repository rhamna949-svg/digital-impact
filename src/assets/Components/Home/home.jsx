import React from "react";
import "./home.css";
import logo from "../../Main.PNG"
import About from "../../Components/About/about"
import Services from "../../Components/Services/services"
import Contact from "../../Components/Contact/contact"
import Portfolio from "../../Components/Portfolio/portfolio"


const Home = () => {
    // let name ="Ali"
    // console.log(name);
    
    
    return (
        <>
            <div className="home">
                <img src={logo} alt="Logo" className="logo" />
                <center>
                    <p className="w_f">We are full Services</p>
                    <br />
                    <p className="description1">Digital Marketing Agency</p>
                    <p className="welcome-2">Welcome to the Digital Impacts</p>
                     <p className="paragraph">We partner with our clients  with a team of professionals, we are able to provide <br/> 
                        the best on our side. We strive to be leaders in digital marketing services worldwide<br/>
                        by revolutionizing the industry and setting new standards of professionalism and success.</p>
                         <button className="message-button">Message Us Now</button>
                </center>
            </div>
            <Services/>
            <About/>
            <Portfolio/>
            <Contact/>

        </>
    )
}
export default Home

