import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className='oc-slider'>
            <div className='oc-slider__wrapper'>
            <Slider {...settings}>
            <div className="oc-slider__item">
                <img src="./images/slider/item-1.jpg" alt="" />

                <div className="oc-slider__item__info">
                    <h2>Welcome to Open Class</h2>
                    <p>Our school admission is going on</p>
                    <button className="button fill-secondary">
                        Register Now
                    </button>
                </div>
            </div>
            <div className="oc-slider__item">
                <img src="./images/slider/item-2.jpg" alt="" />

                <div className="oc-slider__item__info">
                    <h2>Welcome to Open Class</h2>
                    <p>Our school admission is going on</p>
                    <button className="button fill-secondary">
                        Register Now
                    </button>
                </div>
            </div>
            <div className="oc-slider__item">
                <img src="./images/slider/item-3.jpg" alt="" />

                <div className="oc-slider__item__info">
                    <h2>Welcome to Open Class</h2>
                    <p>Our school admission is going on</p>
                    <button className="button fill-secondary">
                        Register Now
                    </button>
                </div>
            </div>
            </Slider>
            </div>
        </div>
    );
}

export default Hero;