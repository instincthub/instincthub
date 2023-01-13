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
                Join us in building the future of learning and help us create a
                world where everyone has the opportunity to reach their full
                potential. Apply today to become a part of our team and start
                your journey towards a more fulfilling career.
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
