import React from "react";
import SVGs from "../assets/svg/SVGs";

const CoreValue = () => {
  const PerBenefit = (props) => {
    return (
      <div className="p_benefit">
        <img src={props.svg} alt="#" />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    );
  };
  return (
    <section className="container " id="CareerBenefits">
      <div className="mt-5 mini_heading txt-align">
        <h2>
          Perks & Benefits to make employee wellness & Professional growth{" "}
        </h2>
        <p className="txt-align">
          Team members are the heart and soul of Recharge, and we go the extra
          mile to take care of you.
        </p>
      </div>
      <div className="benefit_parent">
        <PerBenefit
          svg={SVGs.growth}
          name="Fast Growth"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quam ornare ornare sit semper nec etiam nisl, quis."
        />
        <PerBenefit
          svg={SVGs.team}
          name="Great team"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quam ornare ornare sit semper nec etiam nisl, quis."
        />
        <PerBenefit
          svg={SVGs.workstation}
          name="Dynamic Workspaces"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quam ornare ornare sit semper nec etiam nisl, quis."
        />
        <PerBenefit
          svg={SVGs.dollar}
          name="Competitive Salary"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quam ornare ornare sit semper nec etiam nisl, quis."
        />
        <PerBenefit
          svg={SVGs.plane}
          name="Paid Holiday"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quam ornare ornare sit semper nec etiam nisl, quis."
        />
      </div>
    </section>
  );
};

export default CoreValue;
