import { React, useState} from "react";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../assets/images/Images";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/assessment/testimonies/", requestOptions, true)
  })

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

  if (data.results) {
    return (
      <>
        <section className="container maximize_height">
          <div className=" testimonial_class">
            <Slider {...settings} className="testimonial_carousels">
                {
                  data.results.map((option, index)=>{
                    return <div key={index}>
                      <div className="per_review">
                        <p> {option.content} </p>
                        <div className="overflow">
                          <img src={option.img}  alt={option.full_name}  />
                          <h3>{option.full_name} </h3>
                        </div>
                      </div>
                    </div>
                  })
                }
            </Slider>
          </div>
        </section>
      </>
    );
  }
}

export default Testimonials