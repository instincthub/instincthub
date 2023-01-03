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
    
    let job_url = 'https://leadapi.instincthub.com/api/v1/careers/job/'+slug
    fetchLeadAPI(setData, job_url, formdata)
  };

  const _handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => setImagePreview(reader.result);
    
        reader.readAsDataURL(file);
    }

  if (!open) return null;
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
                <TextField type="text" name="title" label="Blog Title" required={true}/>
                <TextArea name="overview" rows="5" label="Overview" required={true}/>
                <TextArea name="content" rows="15" label="Content" required={true}/>

                <div className="double_input">
                
                  {/* <input type="text" name="first_ame" placeholder="First Name" required/> */}
                  <TextField type="text" name="first_ame" label="First Name" required={true}/>
                  <TextField type="text" name="last_name" label="Last Name" required={true}/>
                </div>


                <div className="double_input">
                  <input type="email" name="email" placeholder="Email Address"required/>
                  <input type="text" name="nationality" placeholder="Nationality" />
                </div>
                <div className="double_input">
                  <input type="text" name="country_of_residence" placeholder="Country of Residence" required/>
                  <input type="number" name="phone_number" placeholder="Mobile Phone" required/>
                </div>
                <div className="double_input">
                  <input type="text" name="home_address" placeholder="Home Address" required/>
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
                    <input type="text" name="job_title" placeholder="Job Title" />
                    <input type="text" name="company_name" placeholder="Company Name" />
                  </div>
                  <input type="text" name="company_location" placeholder="Company Location" />
                  <textarea name="description" id="" placeholder="Description"></textarea>
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
                    <input type="text" name="institution" placeholder="Institution" />
                    <input type="text" name="course" placeholder="Course" />
                  </div>
                  <input type="text" name="location" placeholder="Location" />
                  <textarea name="description" id="" placeholder="Description"></textarea>
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
                  <input type="url" name="linked_url" placeholder="Linkedin" />
                  <input type="url" name="facebook_url" placeholder="Facebook" />
                </div>
                <div className="double_input">
                  <input type="url" name="twitter_url" placeholder="Twitter" />
                  <input type="url" name="website_url" placeholder="Website" />
                </div>
              </div>
              <div className="hiring">
                <h4>Message to Hiring manager</h4>
                <textarea
                  name="message"
                  id=""
                  required
                  placeholder="Dear Hiring Manager, ..."
                ></textarea>
              </div>
            </>
            {/* <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              password={this.state.password}
              mobile={this.state.mobile}
            /> */}
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
  .double_input .field {
    width: 48.5%;
    input{
      width: 100%;
    }
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
