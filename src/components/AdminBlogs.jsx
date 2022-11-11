import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";

const EachBlog = (props) => {
  return (
    <EachAdminBlog className="eachAdminBlog">
      <div className="clickable" onClick={props.edit}>
        <h1>{props.title}</h1>
        <p>{props.encryption}</p>
      </div>

      <div className="comments_dels">
        <h2>{props.commentCount} Comments</h2>
        <div className="img_cod">
          <a href="" download>
            <img src={SVGs.download} alt="v" />
          </a>

          <img src={SVGs.bin} alt="del" />
        </div>
      </div>
    </EachAdminBlog>
  );
};

export default EachBlog;

let EachAdminBlog = styled.section`
  background: #ffffff;
  border: 1.5px solid rgba(44, 51, 58, 0.3);
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 15px;

  .clickable {
    cursor: help;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      height: 85px;
      overflow: hidden;
    }
    p {
      margin-bottom: 15px;
      height: 106px;
      overflow: hidden;
    }
  }
  .img_cod {
    display: flex;
    justify-content: space-between;
    width: 35%;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .comments_dels {
    border-top: 1px solid #2c333a;
    padding: 10px 0;
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-style: normal;
      margin-bottom: 0px;
      font-weight: 600;
      margin-top: 5px;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
