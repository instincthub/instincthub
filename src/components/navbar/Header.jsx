import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import Images from "../../assets/images/Images";
import Navbar from "./Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState("navlinks");
  const [blur, setBlur] = useState("backgroundMask");

  const NavToggle = () => {
    showMenu === "navlinks"
      ? setShowMenu("navlinks menudrop show")
      : setShowMenu("navlinks");

    blur === "backgroundMask"
      ? setBlur("backgroundMask placeblur")
      : setBlur("backgroundMask");
  };
  return (
    <header>
      <nav className="container">
        <a href="/" className="logo">
          <img src={Images.logo} alt="" />
        </a>
        {/* <Navbar /> */}
        <div className={blur} onClick={NavToggle}>
          <ul className={showMenu}>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
            <div className="sign_up" id="mobile">
              <Link to="/"> <button className="outlined-btn">Login</button> </Link> 
              <Link to="/"> <button className="important-btn">Get Started</button> </Link> 
            </div>
          </ul>
        </div>

        <div className="sign_up" id="screen">
          <Link to="/"> <button className="outlined-btn">Login</button> </Link> 
          <Link to="/"> <button className="important-btn">Get Started</button> </Link> 
        </div>
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
  );
};

export default Header;
