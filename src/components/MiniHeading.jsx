import React from "react";

const MiniHeading = (props) => {
  return (
    <section className={props.class}>
      <div className="container">
        <div className="mini_heading">
          <p className="cap_lock-txt">How it works</p>
          <h2>Our Work Process</h2>
          <p>
            From course creation to hosting on the platform. Create your course
            to upload on our platform to watch it rack in revenue for you. We
            have a well-simplified process to make earnings from your course
            easy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiniHeading;
