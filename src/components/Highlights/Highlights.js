import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Highlights(){

    const highlightsSlider ={
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 777,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return (
        <>
            <div className="oc-carousel">
    <div className="oc-carousel__wrapper">
        <div className="oc-carousel__row">
            <Slider {...highlightsSlider}>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/cognitive.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Cognitive</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/bangla.png" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Bengali</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/english.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>English</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/history.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>History</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/geography.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Geography</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/math.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Math</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/physics.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Physics</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/chemistry.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Chemistry</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/biology.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Biology</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/food-and-nutrition.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Food and Nutrition</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/political-science.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Political Science</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/physical-education.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Physical Education</p>
                    </div>
                </div>
            </div>
            <div className="oc-carousel__item">
                <div className="oc-cource-card">
                    <div className="oc-cource-card__img">
                        <img src="./images/subjects/computer-science.jpg" alt="" />
                    </div>
                    <div className="oc-cource-card__footer">
                        <p>Computer Science</p>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
    </div>
</div>
        </>
    );
}

export default Highlights;