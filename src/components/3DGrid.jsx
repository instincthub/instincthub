import React from "react";
import Images from "../assets/images/Images";
import Individual from "../components/IndividualGlass";
import Enterprises from "./Enterprises";
import TechDiversity from "./TechDiversity";
import KidCanCode from "./KidCanCode";

const Grid = () => {
  return (
    <div>
      <div className="g-background">
        <div className="second_guy">
          <div className="grid_container ">
            <div className="per_gird individual"></div>
            <Individual />
            {/* <Enterprises /> */}
            {/* <TechDiversity /> */}
            {/* <KidCanCode /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
