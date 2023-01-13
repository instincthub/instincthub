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
          desc="Experience rapid expansion and development with our fast-growing team"
        />
        <PerBenefit
          svg={SVGs.team}
          name="Great team"
          desc="Experience excellence and exceptional results with our talented and dedicated team"
        />
        <PerBenefit
          svg={SVGs.workstation}
          name="Dynamic Workspaces"
          desc="Elevate your productivity and creativity with our dynamic workspaces"
        />
        <PerBenefit
          svg={SVGs.dollar}
          name="Competitive Salary"
          desc="We retain top talents with our competitive salary packages"
        />
        <PerBenefit
          svg={SVGs.plane}
          name="Paid Holiday"
          desc="Enjoy a well-deserved break with our comprehensive paid holiday package"
        />
      </div>
    </section>
  );
};

export default CoreValue;
