import React from "react";
import Images from "../assets/images/Images";

const AboutProcess = () => {
  return (
    <section id="spaces">
      <div className="container" id="aboutProcess">
        <div className="mini_heading">
          <p className="cap_lock-txt">About Instincthub</p>
          <h2>Our Work Process</h2>
          <p>
            Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
            purus venenatis cursus orci nunc ut eu. Non interdum vitae risus eu
            purus, massa pellentesque dignissim nascetur. Tellus ut mattis
            phasellus orci, varius lacus, senectus. Morbi arcu integer potenti
            et aliquam. Vehicula suspendisse amet proin diam viverra accumsan in
            at. Faucibus ultricies eget adipiscing nisl.
          </p>
          <button className="outlined-btn mt-1">Learn More</button>
        </div>

        <div className="process_img">
          <img src={Images.about_process} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
