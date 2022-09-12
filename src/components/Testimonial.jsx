import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../assets/images/Images";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      // // className: "center",
      // centerPadding: "60px",
      // centerMode: true,
      margin: 10,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section className="container maximize_height">
          <div className=" testimonial_class">
            <Slider {...settings} className="testimonial_carousels">
              <div>
                <div className="per_review">
                  <p>
                    LABEL Quis sagittis phasellus tristique scelerisque vel
                    viverra et pulvinate purus. Dolor pretium vulputate purus,
                    libero enim in enim. Dolor pretium vulputate purus, libero
                    enim in enim.
                  </p>
                  <div className="overflow">
                    <img src={Images.carosel1} alt="" />
                    <h3>Authors Name</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="per_review">
                  <p>
                    LABEL Quis sagittis phasellus tristique scelerisque vel
                    viverra et pulvinate purus. Dolor pretium vulputate purus,
                    libero enim in enim. Dolor pretium vulputate purus, libero
                    enim in enim.
                  </p>
                  <div className="overflow">
                    <img src={Images.carosel1} alt="" />
                    <h3>Authors Name</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="per_review">
                  <p>
                    LABEL Quis sagittis phasellus tristique scelerisque vel
                    viverra et pulvinate purus. Dolor pretium vulputate purus,
                    libero enim in enim. Dolor pretium vulputate purus, libero
                    enim in enim.
                  </p>
                  <div className="overflow">
                    <img src={Images.carosel1} alt="" />
                    <h3>Authors Name</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="per_review">
                  <p>
                    LABEL Quis sagittis phasellus tristique scelerisque vel
                    viverra et pulvinate purus. Dolor pretium vulputate purus,
                    libero enim in enim. Dolor pretium vulputate purus, libero
                    enim in enim.
                  </p>
                  <div className="overflow">
                    <img src={Images.carosel1} alt="" />
                    <h3>Authors Name</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </>
    );
  }
}
