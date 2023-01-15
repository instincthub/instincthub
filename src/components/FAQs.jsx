import { React, useState } from "react";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";
import H2headings from "./H2headings";

const FAQs = (props) => {
  const [data, setData] = useState([]);

  useState(() => {
    let requestOptions = reqOptions("get", null);
    fetchAPI(setData, HOST_URL() + props.apiPath, requestOptions, true);
  });

  if (data.results) {
    return (
      <section className="mt-10 container">
        <div className="container">
          <H2headings
            class="container h2heading"
            h2="Frequently Asked Question"
            p="The best decision you can make for your self is to invest heavely into your learning."
          />
          <div className="accordion ">
            {data.results.map((option) => {
              return (
                <div key={option.id}>
                  <input
                    type="checkbox"
                    name="toggle_accordion"
                    id="acc4"
                    className="acc_input"
                  />
                  <label htmlFor="acc4" className="acc_label">
                    {option.question}
                  </label>

                  <div className="acc_content">
                    <p> {option.answer} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default FAQs;
