import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";
import Navbar from "./Nav4Landing";

const ErrorState = (props) => {
  return (
    <Container>
      <Navbar />
      <div className="status">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>

        <Link to="/">Back to homepage</Link>
      </div>
    </Container>
  );
};

export default ErrorState;

let Container = styled.section`
  .status {
    max-width: 500px;
    margin: 70px auto;
    text-align: center;
    padding: 20px;
    margin-bottom: 30px;
    h3 {
      font-size: 46px;
      margin-bottom: 20px;
      font-weight: 600;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: center;
    }
    a {
      margin-top: 30px;
      font-weight: 500;
      font-size: 18px;
      color: #00838f;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
