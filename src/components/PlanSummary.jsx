import React from "react";

const PlanSummary = () => {
  return (
    <>
      <div className="container ">
        <div className="plan_b">
          <div className="summary">
            <div>
              <h1>Plan Summary</h1>
              <button className="native-btn" aria-readonly>
                Free Plan
              </button>
            </div>

            <h2>
              $0<span>/Monthly</span>
            </h2>
          </div>
          <p>
            This plan includes a 30 days full access. After that period you will
            be invoiced for monthly payments.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlanSummary;
