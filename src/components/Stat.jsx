import React from "react";

const Stat = () => {
  let Statistics = (props) => {
    return (
      <div className="per_stat">
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    );
  };
  return (
    <section className="container" id="change_top">
      <article className="stats">
        <Statistics
          h3="12%"
          p=" Users are statisfied with our service and features on Instincthub App"
        />
        <Statistics
          h3="160+"
          p="Our students have a 80% completion ratio, thanks to the amazing LMS. "
        />
        <Statistics
          h3="86%"
          p=" Users are statisfied with our service and features on Instincthub App"
        />
      </article>
    </section>
  );
};

export default Stat;
