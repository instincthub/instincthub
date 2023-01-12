import React from "react";
import Images from "../assets/images/Images";

const CoreValue = () => {
  return (
    <section className="container CoreValues">
      <div className="mt-5 mini_heading">
        <h3>Core Values</h3>
        <p>
          These values keep us on track toward our personal, team, and company
          goals. We not only live by them, but also regularly recognize when
          people embody them.
        </p>
      </div>

      <div className="job_values">
        <div className="ff_case">
          <img src={Images.DayOne} alt="" />
          <h4>Day One</h4>
          <p>
            Stay ambitious, open-minded, optimistic, and ready to learn. Every
            day counts towards building the future.
          </p>
        </div>
        <div className="ff_case">
          <img src={Images.Ownership} alt="" />
          <h4>Ownership</h4>
          <p>
            You are accountable to yourself, your peers, and our customers. You
            believe that your work impacts the mission.
          </p>
        </div>
        <div className="ff_case">
          <img src={Images.empathy} alt="" />
          <h4>Empathy</h4>
          <p>
            You anticipate the needs of others. You communicate clearly and with
            care, always striving to do the right thing.
          </p>
        </div>
        <div className="ff_case">
          <img src={Images.Humility} alt="" />
          <h4>Humility</h4>
          <p>
            Approach every task with an open mind, learning with and from your
            peers. You value effective collaboration above rank.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
