import React from "react";
import Images from "../assets/images/Images";

const CareerGrowth = () => {
  return (
    <section className="container " id="Growth">
      <div className="mini_heading">
        <p className="cap_lock-txt">Room for Growth</p>
        <h2>Our business opportunity is massive, and growing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit
          aliquet non justo odio tincidunt aliquam non. Dui lectus neque, et,
          aliquam gravida enim. Eget dis nullam integer mauris egestas
          tincidunt. Leo consectetur accumsan mauris feugiat egestas sit.
          Vulputate lectus egestas quis viverra sit.
        </p>
      </div>

      <div className="img_disk">
        <img src={Images.workstation} alt="" />
      </div>
    </section>
  );
};

export default CareerGrowth;
