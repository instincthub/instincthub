import React from "react";

const MiniHeading = (props) => {
  return (
    <section className={props.class}>
      <div className="container">
        <div className="mini_heading">
          <p className="cap_lock-txt">How it works</p>
          <h2>Our Work Process</h2>
          <p>
            Nisi ut ultricies feugiat aliquam dignissim. Orci velit ultrices non
            est lectus. Aliquet dui vulputate auctor dictumst mauris lobortis.
            Faucibus viverra donec placerat quam consectetur cum faucibus augue
            elit. Urna donec sagittis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiniHeading;
