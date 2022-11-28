import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  return (
    //===== BREADCRUMB
    <div className="b_heading ">
      <ul className="breadcrumb container">
        <li>
          <Link to={props.prevlink}>{props.previous}</Link>
        </li>
        <li>{props.current}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
