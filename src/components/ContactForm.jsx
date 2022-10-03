import React from "react";
import SVGs from "../assets/svg/SVGs";

const ContactForm = () => {
  return (
    <section className="container">
      <div className="contact_form">
        <div className="contact_us">
          <form action="">
            <div class="input_parent">
              <input type="text" placeholder="First Name" />
              <label for="First Name">First Name</label>
            </div>
            <div class="input_parent">
              <input type="text" placeholder="Last Name" />
              <label for="Last Name">Last Name</label>
            </div>
            <div class="input_parent">
              <input type="text" placeholder="Email" />
              <label for="Email">Email</label>
            </div>

            <div className="input_parent">
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
        </div>
        <div className="address">
          <h2>Contact info</h2>
          <ul>
            <li className="phone">
              <a href="">(+234) 816 288 0409</a>
            </li>
            <li className="email">
              <a href="">info@instincthub.com</a>
            </li>
          </ul>

          <ul className="socials_round">
            <li>
              <a href="">
                <img src={SVGs.w_facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={SVGs.w_twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={SVGs.w_whatsapp} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={SVGs.w_linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={SVGs.w_ig} alt="" />
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
