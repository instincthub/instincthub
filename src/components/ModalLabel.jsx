import React from "react";
import styled from "styled-components";
import IMGs from "../assets/images/Images";

const MainLabel = (props) => {
  return (
    <div className="valid_btn">
      <img src={props.img} alt="" className="valid" />
      <h5>{props.message}</h5>
    </div>
  );
};

const Label = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="slide-in-top"
      >
        {/* You can set error button by adding IMG.error for error icon */}
        <MainLabel
          img={IMGs.error}
          // img={IMGs.valid}
          message="Ooops..., It seems you've entered a wrong information"
        />
        <img
          className="close-btn"
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};

export default Label;

const HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  .slide-in-top {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  position: relative;
  background: #ffffff;
  margin: 0px auto;
  margin-top: 80px;
  padding: 20px;
  .valid_btn {
    margin: 0px auto;
    max-width: 440px;
    display: flex;
    .valid {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }

  h5 {
    margin: 0;
    span {
      font-family: Nunito;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 700px) {
      padding-right: 25px !important;
    }
  }
  @media (min-width: 1200px) {
    .valid_btn {
      max-width: 530px !important;
      text-align: center;
    }
  }
  .close-btn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    padding: 5px;
    cursor: pointer;
    right: 50px;
    transition: 0.3s;
    &:hover {
      background: #f3f3f3;
    }
  }

  @media (max-width: 488px) {
    .close-btn {
      top: 20px;
      right: 20px;
    }
  }
`;