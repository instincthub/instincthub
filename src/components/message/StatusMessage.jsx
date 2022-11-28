import { React, useState} from "react";
import styled from "styled-components";
import IMGs from "../../assets/images/Images";

const StatusMessage = (props) => {
  const msg = props.messageType === 'success' ? "Awesome! The update was made." : "Ooops..., It something went wrong. Try again";

  const closeMessage = () =>{
    props.setMessageType('')
  }

  if (props.messageType === 'success' || props.messageType === 'error') {

    // Auto close message after 10 seconds
    setTimeout(() => {
      props.setMessageType('');
    }, 10000);

    return (
      <div>
        {/* TEST-BTN */}
        <HandlingOverlay>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="slide-in-top container"
          >
            {/* You can set error button by adding IMG.error for error icon */}
            <div className="valid_btn">
              <img src={props.messageType === 'success' ? IMGs.valid : IMGs.error} alt="Status Icon" className="valid" />
              <span>{props.message ? props.message : msg}</span>
            </div>
            <img
              className="close-btn"
              src="https://www.svgrepo.com/show/315851/close.svg"
              alt="c"
              onClick={closeMessage}
            />
          </div>
        </HandlingOverlay>
      </div>
    );
  }
};

export default StatusMessage;

const HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  minn-height: 65px;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 100;
  box-shadow: 2px 10px 20px rgb(0 0 0 / 5%), 0px 2px 8px rgb(0 0 0 / 5%);
  border-top: 1.5px solid #EAEAEA;

  .slide-in-top {
    position: relative;
    background: #ffffff;
    margin: 0px auto;
    padding: 20px;
    
  .valid_btn {
    margin: 0px auto;
    max-width: 440px;
    text-align: center;
    .valid {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }

  span {
    margin: 0;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    display: inline-block;
    position: relative;
    top: -8px;
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
  /*  */
`;
