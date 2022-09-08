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
          h3="Project Brief"
          p=" Aenean integer commodo tristique eget et habitant suspendisse.
            Elementum amet, tortor nunc duis sed platea facilisi morbi. Quis
            adipiscing ornare eu."
        />
        <Pgauge
          specify="arrow_decor"
          img={SVGs.creation}
          h3="Content Creation"
          p="Aenean integer commodo tristique eget et habitant suspendisse. Elementum amet, tortor nunc duis sed platea facilisi morbi. Quis adipiscing ornare eu."
        />
        <Pgauge
          img={SVGs.handoff}
          h3="Project Handoff"
          p="Aenean integer commodo tristique eget et habitant suspendisse. Elementum amet, tortor nunc duis sed platea facilisi morbi. Quis adipiscing ornare eu."
        />
      </div>
    </section>
  );
};

export default Process;
