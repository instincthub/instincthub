import React from "react";

const H2headings = (props) => {
  return (
    <div className={props.class}>
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
    </div>
  );
};

export default H2headings;
