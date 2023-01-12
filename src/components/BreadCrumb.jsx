import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Images from "../assets/images/Images";

const BreadCrumb = (props) => {
  return (
    //===== BREADCRUMB
    <Wrapper className="b_heading ">
      <ul className="breadcrumb container">
        <li>
          <Link to={props.prevlink}>{props.previous}</Link>
        </li>
        <li>{props.current}</li>
      </ul>
    </Wrapper>
  );
};

export default BreadCrumb;

const Wrapper = styled.div`
  ul.breadcrumb li + li:before {
    content: url(${Images.arrowRight.default});
    width: 20px;
    position: relative;
    top: 7px;
    height: 35px;
    display: block;
    padding: 0 10px;
    display: inline-block;
  }
`