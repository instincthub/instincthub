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
          h3="99%"
          p=" Users are statisfied with our service and features on Instincthub App"
        />
        <Statistics
          h3="800+"
          p="students have a 80% completion ratio, thanks to the amazing LMS. "
        />
        <Statistics
          h3="1600+"
          p="people already registered for our Learning Management System"
        />
      </article>
    </section>
  );
};

export default Stat;
