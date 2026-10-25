
import React from "react";
import "./portfolio.css";
import revive from "../../Revive.jpg";
import uni from "../../Unifresh.jpg";
import king from "../../KINGS.jpg";
import voeux from "../../Voeux.jpg";
import { FaWordpress } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";

const Portfolio = () => {
    return (
        <>
            <div>
                <h1 className="project">
                    Projects We've Delivered
                </h1>

                <p className="over">
                    Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web
                    <br />
                    and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports,
                    <br />
                    finance and sharing economy.
                </p>
            </div>

            <div className="background">
                <div className="imagee">
                    <div className="details">
                        <p className="indus">INDUSTRY</p>

                        <h1 className="rev">REVIVE</h1>

                        <p className="description">
                            Revive Beauty Salon &amp; Institute
                        </p>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">WEB DEVELOPMENT</p>
                        </div>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">QUALITY ASSURANCE</p>
                        </div>

                        <div className="tech">
                            <FaReact className="react" />
                            <FaAws className="react1" />
                        </div>
                    </div>

                    <div className="imagebox">
                        <a
                            href="https://revivesalon.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={revive}
                                alt="Revive Beauty Salon"
                                className="revive"
                            />
                        </a>
                    </div>
                </div>
                <div className="cosmetics" >
                    <div>
                        <a
                            href="https://voeuxcosmetics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={voeux}
                                alt="Voeux Cosmetics"
                                className="revive"
                            />
                        </a>
                    </div>
                    <div>
                        <p className="dustry">INDUSTRY</p>
                        <h1 className="rev">Voeux</h1>
                        <p className="description">
                            Natural Skin Care
                        </p>
                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">WEB DEVELOPMENT</p>
                        </div>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">QUALITY ASSURANCE</p>
                        </div>


                        <div className="tech">
                            <FaWordpress className="world" />
                            <FaAws className="react1" />
                        </div>

                    </div>
                </div>
                   <div className="imagee">
                    <div className="details">
                        <p className="indus">INDUSTRY</p>

                        <h1 className="rev">KINGZ</h1>

                        <p className="description">
                        Ecommerce Website
                        </p>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">WEB DEVELOPMENT</p>
                        </div>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">QUALITY ASSURANCE</p>
                        </div>

                        <div className="tech">
                            <FaReact className="react" />
                            <FaAws className="react1" />
                        </div>
                    </div>

                    <div className="imagebox">
                        <a
                            href="https://www.kingz.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={king}
                                alt="Ecommerce Website"
                                className="revive"
                            />
                        </a>
                    </div>
                </div>
                
                    <div className="cosmetics" >
                    <div>
                        <a
                            href="https://unifresh.com.au/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={uni}
                                alt="Fruits and vegetables"
                                className="revive"
                            />
                        </a>
                    </div>
                    <div>
                        <p className="dustry">INDUSTRY</p>
                        <h1 className="rev">Unifresh</h1>
                        <p className="description">
                            Fruit and Vegetable Retail Store
                        </p>
                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">WEB DEVELOPMENT</p>
                        </div>

                        <div className="span">
                            <FaTableList className="indus1" />
                            <p className="tag">QUALITY ASSURANCE</p>
                        </div>


                        <div className="tech">
                            <FaWordpress className="world" />
                            <FaAws className="react1" />
                        </div>

                    </div>
                </div>
 
                    

                
            </div>
        </>
    );
};

export default Portfolio;

