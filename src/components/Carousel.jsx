import React from "react";
import Testimonial from "../components/Testimonial";
import H2headings from "../components/H2headings";

const Carousel = () => {
  return (
    <section className="container">
      <div className="g_carousel">
        <H2headings
          class="container gradient"
          h2="What People Say About Us"
          p="Instincthub is a Global technology skill training provider based in Nigeria that specialises in varities of courses. We crush the barriers to getting a tech skill."
        />
        <Testimonial />
      </div>
    </section>
  );
};

export default Carousel;
