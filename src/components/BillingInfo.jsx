import React from "react";

const BillingInfo = () => {
  return (
    <>
      <div className="container">
        <div className="billing_info">
          <h2>Billing Info</h2>
          <form action="">
            <div className="ctfs">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>
            <div className="ctfs">
              <input type="text" placeholder="Address Line 1 *" />
              <input type="text" placeholder="Address Line 2 (Optional) *" />
            </div>
            <div className="ctfs">
              <input type="text" placeholder="Country *" />
              <input type="text" placeholder="City *" />
            </div>
            <div className="ctfs">
              <input type="text" placeholder="Zip Code *" />
              <input type="text" placeholder="Phone Number *" />
            </div>
            <div className="ctfs">
              <input type="text" placeholder="Email *" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BillingInfo;
