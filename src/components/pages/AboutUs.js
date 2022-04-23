import React, { Component } from 'react'
import logo from './logoBB.PNG';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import "./AboutUs.css";

export default function AboutUs() {

    return (
        <div className="about">
            <div className="img"
                style={{
                    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6SxuIUsdS8AEHoU6K3Ll47bWZiFgMH1_EwRH8KJCa9W5oxdb0nEnc5OSQ6OK-TkwO3A&usqp=CAU")`
                }}>
                <div>
                    <section id="colorlib-hero" className="js-fullheight" data-section="home">
                        <div className="flexslider js-fullheight">
                            <ul className="slides">
                                <p>

                                    <div className="overlay" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner js-fullheight">

                                                    <center><h1 font-size="10px">Hi Users!</h1><br /><br /></center>
                                                    <div className="desc">
                                                        <center><marquee>Welcome to BLUEBELLA!</marquee></center></div>
                                                    <Link to='/'><center><img
                                                        className="login__logo"
                                                        src={logo}
                                                    /></center></Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </p>


                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="page">

                                                    <h2>BLUEBELLA is a fashion shopping website where everyone can find their favorite choice of clothes be it men, women or kids. </h2>
                                                    <h2>Find various small scale as well as top brands from all over India at an affordable and reasonable price. If you are a fashion freak, then you are at the right place. Get the best outfit for any occasion with our smart systems helping you out!</h2>
                                                    <br /> <br /><br />  <br /> <h4>Contact BLUEBELLA developers for any queries: (+91) 7056743900</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <br /> <br /> <br />
                    </section>
                    <center> <small> <p>&copy;Copyright 2022</p><p>All rights reserved | T&C Applied</p> </small>  </center>

                    <Footer />
                </div></div></div>

    )

}