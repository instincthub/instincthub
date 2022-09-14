import React from "react";

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
            <li>(+234) 816 288 0409</li>
            <li>info@instincthub.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
