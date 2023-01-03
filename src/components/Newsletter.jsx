import { React, useEffect, useState } from "react";
import SubmitBtn from "./forms/SubmitBtn";
import TextField from "./forms/TextField";
import StatusMessage from "./message/StatusMessage";
import styled from "styled-components";
import {fetchAPI, printInputError, getCookie } from "../assets/js/help_func";

const Newsletter = (props) => {
  const[data, setData] = useState();
  const[messageType, setMessageType] = useState();
  const[error, setError] = useState();

  const NEWSLETTER = document.querySelector('#newsLetter');

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

    fetchAPI(setData, `https://leadapi.instincthub.com/api/v1/contacts/newsletter/?company_id=${company_id}`, requestOptions, true, setMessageType, setError)
  };

  // Disable spinning button after getting status from fetch
  if (messageType && document.querySelector('.rolling')) {
    document.querySelector('[type=submit]').classList.remove('rolling')
    document.querySelector('[type=submit]').disabled = false;
  }

  useEffect(()=>{// Remove overlay if success and display error message if error
    if(error && messageType === 'error'){
      console.log(error);
      printInputError(error)
    }

    // Enable form btn
    if(messageType){
      NEWSLETTER.querySelector('[type=submit]').classList.remove('rolling');
      NEWSLETTER.querySelector('[type=submit]').disabled = false;
      if(messageType === 'success') {
        NEWSLETTER.querySelector('form').reset();
      }
    }
  // eslint-disable-next-line
  },[error, messageType])

  
 
  return (
    <>
      <StatusMessage 
          setMessageType={setMessageType}
          messageType={messageType}
      />
      <NewsletterSection className="container" id="newsLetter">
        <section className="newsletter_s">
          <div className="subscribe">
            <h2>Subscribe to Newsletter</h2>
            <p>
              Label Quis sagittis phasellus tristique scelerisque vel viverra et
              pulvinar purus. Dolor pretium vulputate purus, libero enim in
              enim.
            </p>
            <form onSubmit={handleFormSubmit}>
              <TextField type="email" name="email" label="Email Address" required={true}/>
              <SubmitBtn add_class="important-btn" labels="Subscribe"/>
            </form>
          </div>
        </section>
      </NewsletterSection>
    </>
  );
};
export default Newsletter;

const NewsletterSection = styled.section`
  .field{
    display: inline-block;
    width: 70%;
    input{
      width: 100% !important;
    }
  }

`;
