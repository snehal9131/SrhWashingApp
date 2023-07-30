import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Landing.css';
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";


const photos = [
    {
        name: 'Photo 1',
        url: "/images/sad.jpg"
    },
    {
        name: 'Photo 2',
        url: "/images/sad2.jpg"
    },
    {
        name: 'Photo 3',
        url: "/images/sad3.jpg"
    },
    {
        name: 'Photo 4',
        url: "/images/sad4.jpeg"
    }
]


class Landing extends Component {
  render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        className : "slides"
      };
    return (
        <div className="container-fluid">
        <Header/>
        <div className="SimpleSlider">
                <Slider {...settings}>
                    {photos.map((photo) =>{
                        return(
                            <div>
                                <img src={photo.url} className="clsImage" alt="Not Found"/>
                            </div>
                        )
                    })}
                </Slider>
                <label className="title">Welcome to SRH Hochschule Heidelberg Campus</label>
                <div className="container">
                <label className="tit">Customize your own Cleaning Booking system</label>
                <p>In our modern society, when everyone is busy all day long, preoccupied with job, study, children and other things,<br/> it is quite difficult to find time to do a regular and thorough cleaning at home. Therefore, a lot of cleaning businesses<br/>  were created and a lot of people offer their cleaning services.
                In order to have your business well-organized and<br/>  available 24/7 it is a good idea to use Srh-Washing-App an online appointment booking software, which will help<br/>  you to set up your available hours easily and allow your clients to reserve services online.
                </p>

                </div>
                </div>   
            </div>  
         
    )
  }
}

export default Landing;