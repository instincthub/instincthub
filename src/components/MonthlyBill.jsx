import React from "react";
import FreePlan from "./FreePlan";
import Individual from "./Individual";
import Enterprise from "./EnterprisesPlan";
import Track from "./Track";

const MonthlyBill = () => {
  return (
    <section className="subsc container fourcard_grid">
      <FreePlan />
      <Individual />
      <Track />
      <Enterprise />
    </section>
  );
};

export default MonthlyBill;
