import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import SVGs from "../assets/svg/SVGs";
import TextField from "./forms/TextField";
import TextArea from "./forms/TextArea";
import SubmitBtn from "./forms/SubmitBtn";
import {fetchAPI, printInputError, getCookie } from "../assets/js/help_func";

const ContactForm = (props) => {
  const FORM = document.querySelector('#ContactForm');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Enable Spinning button
    e.target.querySelector('[type=submit]').classList.add('rolling');
    e.target.querySelector('[type=submit]').disabled = true;

    let company_id = "b80d9312-ce8b-4e76-b6e6-02034d2ba28a";
    let formdata = new FormData(e.target);

    let myHeaders = new Headers();
    myHeaders.append("leadboard-sk-header", "22-072021kidbackendyste3333ifkIks304");
    myHeaders.append("Cookie", "csrftoken="+getCookie('csrftoken'));
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetchAPI(props.setData, `https://leadapi.instincthub.com/api/v1/contacts/contactus/?company_id=${company_id}`, requestOptions, true, props.setMessageType, props.setError)
  };

  // Disable spinning button after getting status from fetch
  if (props.messageType && document.querySelector('.rolling')) {
    document.querySelector('[type=submit]').classList.remove('rolling')
    document.querySelector('[type=submit]').disabled = false;
  }

  useEffect(()=>{// Remove overlay if success and display error message if error
    if(props.error && props.messageType === 'error'){
      console.log(props.error);
      printInputError(props.error)
    }

    // Enable form btn
    if(props.messageType){
      FORM.querySelector('[type=submit]').classList.remove('rolling');
      FORM.querySelector('[type=submit]').disabled = false;
      if(props.messageType === 'success') {
        FORM.querySelector('form').reset();
      }
    }
  // eslint-disable-next-line
  },[props.error, props.messageType])
  return (
    <section className="container" id="ContactForm">
      <div className="contact_form">
        <div className="contact_us">
          <div>
            <form onSubmit={handleFormSubmit}>
              <TextField type="text" name="first_name" label="First Name" required={true}/>
              <TextField type="text" name="last_name" label="Last Name" required={true}/>
              <TextField type="text" name="email" label="Email Address" required={true}/>
              <TextArea name="message" rows="10" label="How can we help?" required={true}/>
              <SubmitBtn add_class="important-btn" labels="Send"/>
            </form>
          </div>
        </div>
        <div className="address">
          <h2>Contact info</h2>
          <ul>
            <li className="phone">
              <Link to="tel:+2348162880409" target="_blank" rel="noopener">
                (+234) 816 288 0409
              </Link>{" "}
              &nbsp; | &nbsp;
              <Link to="tel:+23490164140911" target="_blank" rel="noopener">
                (+234) 901 641 40911
              </Link>
            </li>
            <li className="email">
              <Link to="mailto:info@instincthub.com">info at instincthub dot com</Link>
            </li>
          </ul>

          <ul className="socials_round">
            <li>
              <Link
                to="https://wa.me/message/5IA2QYCI53SUM1"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_whatsapp} alt="WhatsApp" />
              </Link>
            </li>
            <li>
              <Link
                to="https://facebook.com/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_facebook} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/instincthub/"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_twitter} alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com/company/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_linkedin} alt="LinkedIn" />
              </Link>
            </li>
            <li>
              <Link
                to="https://instagram.com/instincthub_"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_ig} alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link
                to="https://youtube.com/instincthub"
                target="_blank"
                rel="noopener"
              >
                <img src={SVGs.w_youtube} alt="YouTube" />
              </Link>
            </li>
          </ul>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.510899659581!2d3.4096949143167032!3d6.456762925727997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b370793d59d%3A0xfd70ea6856627e31!2s1%20Apapa%20Ln%2C%20Dolphin%20Estate%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1663149804716!5m2!1sen!2sng"
              title="InstinctHub Map Location"
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