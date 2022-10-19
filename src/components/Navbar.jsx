import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";
// import DarkMode from "./DarkMode";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState("navlinks");
  const [blur, setBlur] = useState("backgroundMask");

  const NavToggle = () => {
    showMenu === "navlinks"
      ? setShowMenu("navlinks menudrop")
      : setShowMenu("navlinks");

    blur === "backgroundMask"
      ? setBlur("backgroundMask placeblur")
      : setBlur("backgroundMask");
  };

  return (
    <div>
      <header>
        <nav className="container">
          {/* <DarkMode /> */}
          <Link to="/">
            <img
              src="https://instincthub.com/static/instincthub-logo-.svg"
              alt="instincthub"
              className="the_logo"
            />
          </Link>
          <div className={blur} onClick={NavToggle}></div>
          <ul className={showMenu}>
            <h2 className="on_nav">instasew</h2>
            <Link to="/about">
              <li>About</li>
            </Link>

            <Link to="/about/contact">
              <li>Contact</li>
            </Link>
            <Link to="/about/contact">
              <li>Contact</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>

          <div
            className="hamburger"
            onClick={NavToggle}
            // onMouseMove={NavToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
