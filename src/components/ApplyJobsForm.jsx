import React, { useState } from "react";
import Images from "../assets/images/Images";
import styled from "styled-components";
import SubmitBtn from "./forms/SubmitBtn";
import { useParams } from "react-router-dom";
import { fetchLeadAPI } from "../assets/js/help_func";
import TextArea from "./forms/TextArea";
import TextField from "./forms/TextField";


const ApplyJobsForm = ({ open, onClose }) => {
  const [data, setData] = useState();
  const [imagePreview, setImagePreview] = useState(Images.avatar);
  let { slug } = useParams();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Enable Spinning button
    // e.target.querySelector('[type=submit]').classList.add('rolling');
    // e.target.querySelector('[type=submit]').disabled = true;

    // Remove thumbnail from field if empty
    var formdata = new FormData(e.target);

    // Get form objects
    const formDataObj = {};
    formdata.forEach((value, key) => (formDataObj[key] = value));
    console.log(JSON.stringify(formDataObj));
    
    let job_url = 'https://leadapi.instincthub.com/api/v1/careers/job_apply/?job_id='+slug
    fetchLeadAPI(setData, job_url, formDataObj, 'POST')
  };

  const _handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => setImagePreview(reader.result);
    
        reader.readAsDataURL(file);
    }

    const DummyFormData = {
      "resume": {},
      "image": {},
      "first_ame": "sdasd",
      "last_name": "asdasds",
      "email": "noaholatoye101@gmail.com",
      "nationality": "asdasds",
      "country_of_residence": "Nigeria",
      "phone_number": "07063668889",
      "home_address": "ssdsdsd",
      "job_title": "asd",
      "company_name": "Instinct Hub",
      "company_location": "Instinct Hub",
      "description": "",
      "from_date": "",
      "to_date": "",
      "institution": "",
      "course": "",
      "location": "",
      "linked": "",
      "facebook": "",
      "twitter": "",
      "website": "",
      "message": "sadasdadd"
  }

  if (!open) return null;

  console.log(data);
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Main className="overlayFormEngage">
          <form onSubmit={(e)=>handleFormSubmit(e)}>
            {/* <p>Step {this.state.currentStep} of 2</p> */}
            <>
              <div className="easy">
                <h4>Easy Apply</h4>
                <p>
                  Choose an option to autocomplete your application. You can
                  still fill your profile manually.
                </p>
              </div>
              <div className="through">
                <div className="thefile">
                  <input type="file" name="resume" id="forFile" required />
                  <label htmlFor="forFile">
                    <b>Browse resume</b> or drop it here (Optional)
                  </label>
                </div>

                {/* <div className="usethis">
                  <button>Apply with Linkedin</button>
                  <button>Apply with Indeed</button>
                </div> */}
              </div>
              <div className="personal">
                <h4>Personal Information</h4>
                <div className="handleImgDisplay">
                  <div className="inputplabel">
                    <input
                      type="file"
                      id="imageChanger"
                      name="image"
                      required
                      onChange={(e) => _handleImageChange(e)}
                    />
                    <label htmlFor="imageChanger" className="dummy_holder">
                      <img src={Images.pencil} alt="" />
                    </label>
                  </div>
                  <div className="preview_me"> <img src={imagePreview} alt="Add img" /></div>
                </div>
               

                <div className="double_input">
                  <TextField type="text" name="first_name" label="First Name" required={true}/>
                  <TextField type="text" name="last_name" label="Last Name" required={true}/>
                </div>


                <div className="double_input">
                  <TextField type="email" name="email" label="Email Address" required={true}/>
                  <TextField type="text" name="nationality" label="Nationality"/>
                </div>
                <div className="double_input">
                  <TextField type="text" name="country_of_residence" label="Country of Residence" required={true}/>
                  <TextField type="number" name="phone_number" label="Mobile Phone" required={true}/>
                </div>
                <div className="double_input">
                  <TextField type="text" name="home_address" label="Home Address" required={true}/>
                </div>
              </div>
              {/* /** ====Experience*/}
              <div className="addin_exp">
                <div className="top">
                  <h4>Experience</h4>
                  {/* <button>Add +</button> */}
                </div>

                <div className="main_experience">
                  <div className="double_input">
                    <TextField type="text" name="job_title" label="Job Title"/>
                    <TextField type="text" name="company_name" label="Company Name"/>
                  </div>

                  <div className="double_input">
                    <TextField type="text" name="company_location" label="Company Location"/>
                  </div>
                  
                  <TextArea name="description" rows="5" label="Description" />

                  <div className="double_input">
                    <p className="input_label">
                      <label>From</label>
                      <input type="date" name="from_date" placeholder="From Date" />
                    </p>
                    <p className="input_label">
                      <label>To</label>
                      <input type="date" name="to_date" placeholder="To Date" />
                    </p>
                  </div>
                  <input type="checkbox" name="currently_work" className="checkmac" />
                  <span>I currently work here</span>
                </div>
              </div>
              {/* /** ====Education*/}
              <div className="addin_exp">
                <div className="top">
                  <h4>Education</h4>
                  {/* <button>Add +</button> */}
                </div>

                <div className="main_experience">

                  <div className="double_input">
                    <TextField type="text" name="institution" label="Institution"/>
                    <TextField type="text" name="course" label="Course"/>
                  </div>

                  <div className="double_input">
                    <TextField type="text" name="location" label="Location"/>
                  </div>
                  
                  <TextArea name="description" rows="5" label="Description" />

                  <div className="double_input">
                    <p className="input_label">
                      <label>From</label>
                      <input type="date" name="from_date" placeholder="From Date" />
                    </p>
                    <p className="input_label">
                      <label>To</label>
                      <input type="date" name="to_date" placeholder="To Date" />
                    </p>
                  </div>
                  <input type="checkbox" name="currently_attend" className="checkmac" />
                  <span>I currently attend</span>
                </div>
              </div>
              <div className="personal">
                <h4>Social Link</h4>
                <div className="double_input">
                  <TextField type="url" name="linked" label="Linkedin Profile URL"/>
                  <TextField type="url" name="facebook" label="Facebook Profile URL"/>
                </div>
                <div className="double_input">
                  <TextField type="url" name="twitter" label="Twitter Profile URL"/>
                  <TextField type="url" name="website" label="Website Profile URL"/>
                </div>
              </div>
              <div className="hiring">
                <h4>Message to Hiring manager</h4>
                 <TextArea name="message" rows="15" label="Cover Letter" required={true}/>
              </div>
            </>
            <div className="action-btn">
              <SubmitBtn add_class="important-btn" labels="Submit Application"/>
            </div>
          </form>
        </Main>
        <img
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};
export default ApplyJobsForm;


const HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 100;
  @media (max-width: 488px) {
    padding: 20px !important;
  }
  .double_input .field,
  .double_input .input_label{
    width: 48.5%;
    input{
      width: 100%;
    }
  }
  span.text_label{
    top: 11px;
  }
  .field input:focus + span, .value span {
    width: auto;
  }
  @media(max-width: 410px){
    .double_input .field {
      width: 100%;
    }
  }
`;

const ModalContainer = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0px auto;
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 40px;
    padding: 5px;
    cursor: pointer;
    right: 50px;
    transition: 0.3s;
    &:hover {
      background: #f3f3f3;
    }
  }

  @media (max-width: 488px) {
    img {
      top: 20px;
      right: 20px;
    }
  }
`;

const Main = styled.div`
  max-width: 1024px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  margin: 100px auto;
  padding: 40px;
  .handleImgDisplay {
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 30px;
    input {
      display: none;
    }
  }
  /* .field span{
      top: 11px !important;
    } */
  .dummy_holder {
    img {
      top: 0;
      right: 10px;
    }
  }
  .preview_me {
    width: 140px;
    height: 140px;
    position: static;
    margin-bottom: 30px;
    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      position: static;
      object-fit: cover;
    }
  }
  button{
    border: 1px solid var(--DarkCyan) !important;
    padding: 20px 27px 10px 13px;
    height: 50px;
  }
`;
