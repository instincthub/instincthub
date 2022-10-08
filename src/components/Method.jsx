import React, { useState } from "react";
// import Images from "../images/image";

const PlanSummary = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="container">
        <div className="method_pay">
          <h2>
            Payment method <span>(Click one of the option below)</span>
          </h2>

          <div className="target_c">
            <div className="all_payment">
              <div
                id="lines_b"
                className={`tab ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}
              >
                <div className="radio_parent">
                  <label class="radio">
                    <input
                      type="radio"
                      name="scale"
                      id="radio-1"
                      value="10"
                      className="radio-1"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
              </div>

              <div
                id="lines_b"
                className={`tab ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}
              >
                <div className="radio_parent">
                  <label class="radio">
                    <input type="radio" name="scale" id="radio-1" value="10" />
                    <span>Bank Transfer</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="input_content">
              <div className={`panel ${checkActive(1, "active")}`}>
                <h3>Testing !</h3>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <h3>Testing 2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanSummary;

{
  /* <div className="all_payments"> */
}
{
  /* <input
                type="radio"
                name="test"
                id="test-1"
                class="radio-test"
                checked="checked"
              />
              <input type="radio" name="test" id="test-2" class="radio-test" />

              <div class="labels">
                <label for="test-1" id="label-test-1" class="label">
                  Test 1
                </label>
                <label for="test-2" id="label-test-2" class="label">
                  Test 2
                </label>
              </div> */
}

{
  /* CONTENTS */
}
{
  /* <div class="content content-test-1" id="content-test-1">
                Test 1 content
              </div>
              <div class="content content-test-2" id="content-test-2">
                Test 2 content
              </div> */
}
{
  /* </div> */
}
