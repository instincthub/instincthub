import React from "react";
import FreePlan from "./FreePlan";
import Individual from "./Y-Individual";
import Enterprise from "./EnterprisesPlan";
import Track from "./Y-Track";

const YearlyBil = () => {
  return (
    <section className="subsc container fourcard_grid">
      <FreePlan />
      <Individual />
      <Track />
      <Enterprise />
    </section>
  );
};

export default YearlyBil;
