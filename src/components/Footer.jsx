import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";

const Footer = () => {
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
              <Link to="/privacy-policy">Privacy and policy</Link>
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
              <a href="">(+234) 816 288 0409</a>
            </li>
            <li className="email">
              <a href="">info@instincthub.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" container">
        <div className="foot_label reserved_foot">
          <div className="main">
            <h5>© 2022. All right reserved</h5>
            <ul>
              <a href="">
                <li>Terms & Conditions</li>
              </a>
              <a href="">
                <li>Privacy</li>
              </a>
            </ul>
          </div>

          <div className="media">
            <a href="">
              <img src={SVGs.youtube} alt="ig" />
            </a>
            <a href="">
              <img src={SVGs.linkedin} alt="ig" />
            </a>
            <a href="">
              <img src={SVGs.facebook} alt="ig" />
            </a>
            <a href="">
              <img src={SVGs.instagram} alt="ig" />
            </a>
            <a href="">
              <img src={SVGs.twitter} alt="ig" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
