import React from "react";
import "./contact.css"
import map from "../../../assets/map.PNG"
import usa from "../../../assets/USA.PNG"
import uk from "../../../assets/UK.PNG"
import canada from "../../../assets/CANADA.PNG"
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
    return (
        <>
            <center>
                <h1 className="feel">Feel Free To <span className="contact">Contact</span>  Us By Submitting <br />
                    <span className="contact">Form Or Contact Live Support</span></h1>
            </center>
            {/* <div className="main">
                <div>
                    <iframe
                        src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                        className="map"
                        title="Location Map"></iframe>
                </div>

                <div className="contact-head">
                    <h3 className="h3">Name</h3>
                    <span className="sp1">Your name</span>
                    <h3 className="h3">Surname</h3>
                    <span className="sp1">Your surname</span>
                    <h3 className="h3">Email</h3>
                    <span className="sp1">Your email</span>
                    <h3 className="h3">Contact Number</h3>
                    <span className="sp1">123-45-678</span>
                    <button className="bt1">Submit</button>
                </div>
            </div> */}
          
<div className="main">
    <div>
        <iframe
            src="https://www.google.com/maps?q=Oldham%20Graham%2C%20Manchester%2C%20UK&output=embed"
            className="map"
            title="Oldham Graham, Manchester UK"
        ></iframe>
    </div>

    <div className="contact-head">
        <h3 className="h3">Name</h3>
        <input className="sp1" type="text" placeholder="Your name" />

        <h3 className="h3">Surname</h3>
        <input className="sp1" type="text" placeholder="Your surname" />

        <h3 className="h3">Email</h3>
        <input className="sp1" type="email" placeholder="Your email" />

        <h3 className="h3">Contact Number</h3>
        <input className="sp1" type="tel" placeholder="123-45-678" />

        <button className="bt1" type="button">Submit</button>
    </div>
</div>


            <center>

                <h1 className="let">Let’s Work Together</h1>
                <p className="divide">Driving your business forward with strong marketing strategies<br />
                    Get a free consultation to make this happen!</p>
            </center>
            <div className="class">
                <div className="ul">
                    <h2 className="company">COMPANY</h2>
                    <p className="about">About Us</p>
                    <p className="about">Why Choose Us</p>
                    <p className="about">Team</p>
                    <p className="about">Pricing & Plans</p>
                    <p className="about">Contacts</p>
                    <p className="about">Investors</p>
                </div>
                <div className="ul">
                    <h2 className="company">SERVICES</h2>
                    <p className="about">Web Design & Development</p>
                    <p className="about">Why Choose Us</p>
                    <p className="about">Specialized SEO Services</p>
                    <p className="about">Specialized Social Services</p>
                    <p className="about">Specialized Graphics Services</p>
                    <p className="about">Investors</p>
                </div>
                <div className="ul">
                    <h2 className="company">RESOURCES</h2>
                    <p className="about">Portfolio</p>
                    <p className="about">Terms of Services</p>
                    <p className="about">Help & FAQ</p>
                    <p className="about">Contact Us</p>
                    <p className="about">Site map</p>
                    <button className="follow">Follow Us</button>
                    <div className="ci-head">
                        <CiFacebook className="ci" />
                        <CiTwitter className="ci2" />
                        <FaInstagram className="ci3" />
                        <FaLinkedinIn className="ci4" />
                    </div>
                </div>
                <div className="uk">
                    <img src={usa} alt="" className="img" />
                    <img src={uk} alt="" className="img1" />
                    <img src={canada} alt="" img2 />
                </div>
                <p className="lineox"></p>
                <p className="copy">Copyright © 2022 The Digital Impacts. All rights reserved</p>

            </div>





        </>

    )

}
export default Contact