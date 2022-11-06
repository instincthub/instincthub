import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";

const CustomLabel = styled.div`
  // Official Input
  .input-wrapper {
    position: relative;
    line-height: 14px;
  }
  label {
    color: #bbb;
    font-size: 12px;
    position: absolute;
    z-index: 2;
    // left: 20px;
    top: 12px;
    padding: 0 3px;
    color: var(--DarkCyan);
    left: 15px;
    pointer-events: none;
    background: #fff;
    transition: transform 0.4s ease;
    transform: translateY(-20px);
  }
  input {
    font-size: 16px;
    color: #555;
    margin-bottom: 25px;
    outline: none;
    border: 1px solid #bbb;
    // padding: 10px 20px;
    padding: 15px;
    padding-top: 18px;
    border-radius: 5px;
    position: relative;
  }
  input:invalid + label {
    transform: translateY(0px);
  }
  input:focus {
    border-color: var(--DarkCyan);
  }
  input:focus + label {
    color: var(--DarkCyan);

    transform: translateY(0px);
  }
`;

const ContactForm = () => {
  return (
    <section className="container">
      <div className="contact_form">
        <div className="contact_us">
          <CustomLabel>
            <form action="">
              <div class="input-wrapper">
                <input type="text" placeholder="First Name" />
                <label for="First Name">First Name</label>
              </div>
              <div class="input-wrapper">
                <input type="text" placeholder="Last Name" />
                <label for="Last Name">Last Name</label>
              </div>
              <div class="input-wrapper">
                <input type="text" placeholder="Email" />
                <label for="Email">Email</label>
              </div>

              <div className="input-wrapper">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                ></textarea>
                <button type="submit" className="important-btn">
                  Submit
                </button>
              </div>
            </form>
          </CustomLabel>
        </div>
        <div className="address">
          <h2>Contact info</h2>
          <ul>
            <li className="phone">
              <a href="tel:+2348162880409" target="_blank" rel="noopener">
                (+234) 816 288 0409
              </a>{" "}
              &nbsp; | &nbsp;
              <a href="tel:+23490164140911" target="_blank" rel="noopener">
                (+234) 901 641 40911
              </a>
            </li>
            <li className="email">
              <a href="mailto:info@instincthub.com">info@instincthub.com</a>
            </li>
          </ul>

          <ul className="socials_round">
            <li>
              <a
                href="https://wa.me/message/5IA2QYCI53SUM1"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_whatsapp} alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/instincthub/"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/instincthub_"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_ig} alt="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_youtube} alt="YouTube" />
              </a>
            </li>
          </ul>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.510899659581!2d3.4096949143167032!3d6.456762925727997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b370793d59d%3A0xfd70ea6856627e31!2s1%20Apapa%20Ln%2C%20Dolphin%20Estate%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1663149804716!5m2!1sen!2sng"
              // width="100%"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
