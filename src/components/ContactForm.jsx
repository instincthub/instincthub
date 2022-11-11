import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";

const CustomLabel = styled.div`
  // Control Label
  .field {
    position: relative;
    margin-top: 25px;
  }

  input {
    border: 0;
    border: 1px solid rgba(44, 51, 58, 0.5);

    border-radius: 5px;
    font-size: inherit;

    outline: none;
  }
  input:focus {
    border: 1px solid #00838f;
  }
  input::placeholder {
    color: transparent;
  }
  input:focus::placeholder {
    color: transparent;
  }
  input + span {
    position: absolute;
    top: 3px;
    left: 15px;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  input:not(:placeholder-shown) + span,
  input:focus + span {
    background: #ffffff;
    top: -10px;
    height: 20px;
    padding: 5px;
    margin: 0;
    color: #00838f;
    font-size: 14px;
    pointer-events: initial;
    left: 15px;
    line-height: 10px;
  }
`;

const ContactForm = () => {
  return (
    <section className="container">
      <div className="contact_form">
        <div className="contact_us">
          <CustomLabel>
            <form action="">
              <div class="field">
                <input type="text" name="text" id="Fname" placeholder="John" />
                <span>First Name</span>
              </div>
              <div class="field">
                <input type="text" name="text" id="Lname" placeholder="John" />
                <span>Last Name</span>
              </div>
              <div class="field">
                <input type="email" name="text" id="email" placeholder="John" />
                <span>Email</span>
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
