import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";

const Footer = () => {
  // const [year, setYear] = useState("changeYear");

  // const handleYear = () => {
  //   if (year === "changeYear") {
  //     setYear.innerHTML = new Date().getFullYear();
  //   }
  // };

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="footer_wrap container">
        <div className="quick_links it_logo">
          <img
            src={Images.logo}
            alt="InstinctHub"
            className="InstinctHub_foot"
          />

          <p>
            We are a registered as a private professional skills acquisition
            centre under Companies and Allied Matters Act 1990
          </p>
        </div>
        <div className="quick_links">
          <ul>
            <h5>Instincthub</h5>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">Track</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="quick_links">
          <ul>
            <h5>Helpful Links</h5>

            <li>
              <Link to="/policies/privacy-policy/">Privacy and policy</Link>
            </li>

            <li>
              <a href="">Terms & Condition</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
          </ul>
        </div>
        <div className="quick_links last-media">
          <ul>
            <h5>Contact us</h5>
            <li className="location">
              <a href="">No 1. Apapa lane, Dolphin Estate, Ikoyi, Lagos</a>
            </li>
            <li className="phone">
              <a href="tel:+2348162880409" target="_blank" rel="noopener">
                (+234) 816 288 0409
              </a>
              <br></br>
              <a href="tel:+23490164140911" target="_blank" rel="noopener">
                (+234) 901 641 40911
              </a>
            </li>
            <li className="email">
              <a href="mailto:info@instincthub.com">info@instincthub.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" container">
        <div className="foot_label reserved_foot">
          <div className="main">
            <h5>© {getCurrentYear()} All right reserved</h5>
            <ul>
              <a href="/">
                <li>Terms & Conditions</li>
              </a>
              <a href="/policies/privacy-policy">
                <li>Privacy</li>
              </a>
            </ul>
          </div>

          <div className="media">
            <a
              href="https://wa.me/message/5IA2QYCI53SUM1"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.whatsapp} alt="ig" />
            </a>
            <a
              href="https://twitter.com/instincthub/"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.twitter} alt="ig" />
            </a>
            <a
              href="https://facebook.com/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.facebook} alt="ig" />
            </a>
            <a
              href="https://instagram.com/instincthub_"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.instagram} alt="ig" />
            </a>
            <a
              href="https://linkedin.com/company/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.linkedin} alt="ig" />
            </a>
            <a
              href="https://youtube.com/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.youtube} alt="ig" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const getCurrentYear = () => {
  return new Date().getFullYear();
};
