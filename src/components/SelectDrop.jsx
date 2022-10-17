import React from "react";
import { useState } from "react";
import SVGs from "../assets/svg/SVGs";

const SelectDrop = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Candy", "Vue", "Angular"];
  return (
    <div className="select_me">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={SVGs.chevron_down} alt="" />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDrop;
