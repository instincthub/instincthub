import React from "react";
import styled from "styled-components";
import Images from "../../assets/images/Images";
import Navbar from "../../components/Nav4Landing";

// import Grid from "../components/3DGrid";

const YouPaid = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Navbar />

      <SuccessAlert>
        <div className="top">
          <img src={Images.valid} alt="" />
          <h4>Payment Received</h4>
          <p>
            <b>Hey Tosin,</b> We’ve gotten your payment !!! Your world is about
            to look a whole lot better. you’ll receive an email from Instincthub
            With plan confirmation.{" "}
          </p>
        </div>

        <div className="details">
          <h4>Payment Details</h4>
          <div className="card-info">
            <div className="p-info">
              <span>Card Name</span>
              <p>**********</p>
            </div>
            <div className="p-info">
              <span>Card Number</span>
              <p>**********</p>
            </div>
            <div className="p-info">
              <span>Payment Type</span>
              <p>MasterCard</p>
            </div>
            <div className="p-info">
              <span>Payment Ref</span>
              <p>#347539</p>
            </div>
            <div className="amountPaid">
              <span>Amount Paid</span>
              <p>N20,000</p>
            </div>
            <div className="txt-align">
              <button className="important-btn">Course Library</button>
            </div>
          </div>
        </div>
      </SuccessAlert>
    </div>
  );
};
export default YouPaid;

const SuccessAlert = styled.section`
  max-width: 690px;
  padding: 40px;
  margin: 50px auto;
  margin-top: 130px;
  background: #ffffff;
  border: 1px solid rgba(44, 51, 58, 0.2);
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  .top {
    text-align: center;
    max-width: 460px;
    margin: 0 auto;
    h4 {
      font-weight: 600;
    }
    img {
      width: 160px;
      height: 160px;
    }
    p {
      text-align: center;
    }
  }
  .details {
    margin-top: 30px;
    h4 {
      padding: 9px 0;
      border-bottom: 2px solid #f3f3f3;
    }
    .card-info {
      margin-top: 20px;
      button {
        width: 400px;
        margin-bottom: 0 !important;
        margin-top: 40px !important;
      }
      .amountPaid {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        span {
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
        }
        p {
          font-weight: 600;
          font-size: 22px;
          line-height: 30px;
        }
      }
      .p-info {
        // margin: px 0;
        display: flex;
        justify-content: space-between;
        p,
        span {
          margin-top: 3px;
        }
        span {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
  }
`;
