import React from "react";
import SVGs from "../assets/svg/SVGs";

const Process = () => {
  let Pgauge = (props) => (
    <div className="process mb-4">
      <div className="p_process" id={props.specify}>
        <img src={props.img} alt="" />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
  return (
    <section className="mt-9 mb-9">
      <div className="container triple">
        <Pgauge
          img={SVGs.brief}
          h3="Pin your content curriculum"
          p="Create a comprehensive curriculum plan that aligns with your goals and effectively guides students toward mastery of the material."
        />
        <Pgauge
          specify="arrow_decor"
          img={SVGs.creation}
          h3="Record your course"
          p="Capture high-quality audio and video recordings of your course lectures, with clear and engaging delivery, to enhance student learning and engagement."
        />
        <Pgauge
          img={SVGs.handoff}
          h3="Launch your course"
          p=" Launch your course and take the first step towards sharing your expertise and creating a successful online business."
        />
      </div>
    </section>
  );
};

export default Process;
