import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const Navbar = () => {
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
    <div className={blur} onClick={NavToggle}>
      <ul className={showMenu}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
