import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";

const Ent_Testimonials = () => {
  var settings = {
    margin: 10,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  let PerCompanyStats = (props) => {
    return (
      <div className={props.class}>
        <h4>{props.number}</h4>
        <p>{props.desc}</p>
      </div>
    );
  };
  return (
    <section>
      <section className="width-manager maximize_height pt-10" id="spaces">
        <div className="testimonial_class" id="ent_testify">
          <div className="ff_side">
            <div className="mini_heading">
              <p className="cap_lock-txt">Our Success Stories</p>
              <h2>Intrested in learning how we have transformed workforces</h2>
              <p>
                Nisi ut ultricies feugiat aliquam dignissim. Orci velit ultrices
                non est lectus. Aliquet dui vulputate auctor dictumst mauris
                lobortis. Faucibus viverra donec placerat quam consectetur cum
                faucibus augue elit. Urna donec sagittis.
              </p>
            </div>
            <Slider
              {...settings}
              className="testimonial_carousels"
              id="id_carousel"
            >
              <div>
                <div className="per_review">
                  <img
                    src={SVGs.sterling}
                    alt="Company Logo"
                    className="company_logo"
                  />
                  <h3>Sterling bank plc</h3>
                  <p>
                    Lacinia nisl eu cursus mauris, quis integer arcu nisi. Ac
                    gravida vitae a sit in fermentum pretium amet. Egestas velit
                    sed ornare nisl nisi, cum odio ut odio. Praesent semper
                    lectus mauris ut leo. Tortor pulvinar molestie nibh quam
                    sagittis facilisi donec in amet. Bibendum ultrices at semper
                    pellentesque morbi massa eu non.
                  </p>
                </div>

                <div className="c_info">
                  <PerCompanyStats
                    class="per_company timeframe"
                    number="3 Months"
                    desc="Duration"
                  />
                  <PerCompanyStats
                    class="per_company size"
                    number="26+"
                    desc="No of trainees"
                  />
                  <PerCompanyStats
                    class="per_company courses"
                    number="3"
                    desc="Courses"
                  />
                </div>
              </div>
              <div>
                <div className="per_review">
                  <img
                    src={Images.piggyvest}
                    alt="Company Logo"
                    className="company_logo"
                  />
                  <h3>PiggyVest Nigeria Plc.</h3>
                  <p>
                    Lacinia nisl eu cursus mauris, quis integer arcu nisi. Ac
                    gravida vitae a sit in fermentum pretium amet. Egestas velit
                    sed ornare nisl nisi, cum odio ut odio. Praesent semper
                    lectus mauris ut leo. Tortor pulvinar molestie nibh quam
                    sagittis facilisi donec in amet. Bibendum ultrices at semper
                    pellentesque morbi massa eu non.
                  </p>
                </div>

                <div className="c_info">
                  <PerCompanyStats
                    class="per_company timeframe"
                    number="6 Months"
                    desc="Duration"
                  />
                  <PerCompanyStats
                    class="per_company size"
                    number="13+"
                    desc="No of trainees"
                  />
                  <PerCompanyStats
                    class="per_company courses"
                    number="1"
                    desc="Courses"
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="static_img">
            <img src={Images.enterprise} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Ent_Testimonials;
