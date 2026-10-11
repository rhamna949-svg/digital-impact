import React from "react";
import "./services.css";
import { TbStars } from "react-icons/tb";
import { LuRocket } from "react-icons/lu";
import { TbSquareDot } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import house from "../../../assets/House.PNG"
import hospital from "../../../assets/Hospital.PNG"
import health from "../../../assets/HealthCare.PNG"
import education from "../../../assets/Education.PNG"
import fintech from "../../../assets/Fintech.PNG"
import commerce from "../../../assets/Commerce.PNG"
const Services = () => {
    return (
        <>
            <center>
                <h1 className="h1">We <span className="provide">Provide</span>The Best <br />Services With <br /><span className="provide">Our Developers</span></h1>
            </center>
            <div className="parent">
                <div className="main-head">
                    <h1 className="digital">Digital Marketing</h1>
                    <span className="tbstar"><TbStars /></span>
                    <p className="para">The  <span className="provide">Digital Impacts </span>have <br /> compiled a list of the best <br /> digital marketing companies in <br />
                        the world.</p>
                </div>
                <div className="main-head">
                    <h1 className="development">Web Development</h1>
                    <span className="lurocket"><LuRocket /></span>
                    <p className="para1">Web design services comprise <br/> the process of user interface <br/><span className="provide">(UI)</span> <br/> and user experience <span className="provide">(UX)</span>  design of any web-based <br/>solution.</p>
                </div>
                <div className="main-head">
                    <h1 className="graphic">Graphic Designing</h1>
                    <span className="dot"><TbSquareDot /></span>
                    <p className="para2">Create visual concepts to <br/> communicate ideas that <br/> inspire and captivate <br/> consumers, creative thinking,<br/> an aptitude towards art and <br/> design</p>
                </div>
                <div className="main-head1">
                    <h1 className="content">Content Writter</h1>
                    <span className="note"><LuNotebookPen /></span>
                    <p className="para3">That <span className="provide">content</span>  can include blog <br/> posts, video or podcast scripts,<br/> ebooks or whitepapers, press <br/> releases, product category <br/>descriptions, landing page or <br/>social media</p>
                 </div>
                <div className="main-head1">
                  <h1 className="seo">SEO</h1>
                  <span className="leave"><GiThreeLeaves /></span>
                  <p className="para2">Help search engines find,<br/> crawl, and index your content <br/> efficiently. The website can <br/>become easily findable, more <br/> relevant and popular towards <br/>user search querie.</p>
                </div>
            </div>
              <center>
        <div className="container">
            <span className="industries">Industries We
                <br/>
                <span className="work-with">Work With</span>
            </span>
            <p className="technology">We work as a technology partner for various industries <br/>
                Our expertise can be applied to the specific demands <br/>
                and nuances in your industry</p>
        </div>
    </center>
    <div className="images">
        <div className="image1">
            <img src={house} alt="" className="house"/>
            <p class="image-text">REAL ESTATE</p>
        </div>
        <div className="image2">
            <img src={education} alt="" className="education"/>
            <p class="image-text2">EDUCATION</p>
        </div>
        <div>
            <img src={commerce} alt="" className="commerce"/>
            <p class="image-text3">COMMERCE</p>
        </div>
        <div className="image4">
            <img src={hospital} alt="" className="hospital"/>
            <p class="image-text4">HOSPITALITY</p>
        </div>
        <div className="image5">
            <img src={health} alt="" className="health"/>
            <p class="image-text4">HEALTHCARE</p>
        </div>
        <div className="image5">
            <img src={fintech} alt="" className="fintech"/>
            <p class="image-text5">FINTECH</p>
        </div>
    </div> 

        </>
    )
}

export default Services