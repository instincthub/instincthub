import React, { useEffect, useState } from "react";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";

const Navbar = () => {
  return (
    <div>
      <div className="nav4landing">
        {/* <nav className="container"> */}
        <div className="navbar ">
          <div className="center">
            <img src={Images.logo} alt="instincthub_logo" />
          </div>
        </div>
        {/* </nav> */}
      </div>
    </div>
  );
};
export default Navbar;
