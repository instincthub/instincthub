import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SpeedDial = () => {
  const [showMenu, setShowMenu] = useState("trigger_dial");

  const Dial = () => {
    showMenu === "trigger_dial"
      ? setShowMenu("trigger_dial active")
      : setShowMenu("trigger_dial");
  };

  // const OutDial = () => {
  //   showMenu === "trigger_dial"
  //     ? setShowMenu("trigger_dial")
  //     : setShowMenu("trigger_dial");
  // };

  return (
    <div className="speed_dial">
      <div className="major_dial">
        <ul className={showMenu} onMou>
          <Link to="">
            <li>Contact </li>
          </Link>

          <Link to="">
            <li>About</li>
          </Link>

          <Link to="">
            <li>Pricing</li>
          </Link>
        </ul>
        <button className="outlined-btn" onClick={Dial} onMouseOver={Dial}>
          +
        </button>
      </div>
    </div>
  );
};

export default SpeedDial;
