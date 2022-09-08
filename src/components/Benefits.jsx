import React from "react";
import H2headings from "./H2headings";
import SVGs from "../assets/svg/SVGs";

const Benefits = () => {
  return (
    <section className="bbn">
      <H2headings class="container h2heading" h2="Our Programs Benefits" />

      <div className="container benefits">
        <div className="per_b">
          <img src={SVGs.critical_thinking} alt="" />
          <h3>Critical Thinking</h3>
          <p>
            Creativity can help improve a child’s brain cognitive abilities. it
            leads to stronger emotional and brain health.
          </p>
        </div>
        <div className="per_b">
          <img src={SVGs.critical_thinking} alt="" />
          <h3>Decision Making</h3>
          <p>
            To make decisions is a valuable life skill for children to have. As
            Kids get older, the kinds of decisions they make become increasingly
            more complicated.
          </p>
        </div>
        <div className="per_b">
          <img src={SVGs.problem_solving} alt="" />
          <h3>Problem Solving</h3>
          <p>
            They will be able to apply these problem solving skills in new
            social situations as well as apply them to their academic and
            general life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
