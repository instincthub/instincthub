import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CareerBanner = () => {
  return (
    <section className="career_banner">
      <div className="container ">
        <div className="frame1">
          <div className="frame_2">
            <div className="main_content">
              <h1>Join us in building the future of Learning</h1>
              <p>
                At Instincthub, we’re on a mission to create a world where
                learning is frictionless. We’re looking for talented and
                friendly people to join us on this journey. Think you’d be a
                good fit?
              </p>
              <Link to="#openpositions" smooth>
                <button className="important-btn">View open positions</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
