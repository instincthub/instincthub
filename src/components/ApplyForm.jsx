import React from "react";
import Images from "../assets/images/Images";
import styled from "styled-components";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      emailId: "",
      estateEmail: "",
      state: "",
      file: "",
      imagePreviewUrl: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }
  handleSearch = (event) => {
    console.log(event);
    this.setState({
      state: event,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { email, firstName, password, state } = this.state;
  //   };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">
          <img src={Images.avatar} alt="Add img" />
        </div>
      );
    }
    return (
      <React.Fragment>
        <Main className="overlayFormEngage">
          <form onSubmit={this.handleSubmit}>
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
                  <input type="file" id="forFile" />
                  <label htmlFor="forFile">
                    <b>Browse resume</b> or drop it here (Optional)
                  </label>
                </div>

                <div className="usethis">
                  <button>Apply with Linkedin</button>
                  <button>Apply with Indeed</button>
                </div>
              </div>
              <div className="personal">
                <h4>Personal Information</h4>
                <div className="handleImgDisplay">
                  <div className="inputplabel">
                    <input
                      type="file"
                      id="imageChanger"
                      onChange={(e) => this._handleImageChange(e)}
                    />
                    <label htmlFor="imageChanger" className="dummy_holder">
                      <img src={Images.pencil} alt="" />
                    </label>
                  </div>
                  <div className="preview_me">{$imagePreview}</div>
                </div>

                <div className="double_input">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="double_input">
                  <input type="email" placeholder="Email Address" />
                  <input type="text" placeholder="Nationality" />
                </div>
                <div className="double_input">
                  <input type="text" placeholder="Country of Residence" />
                  <input type="number" placeholder="Mobile Phone" />
                </div>
                <div className="double_input">
                  <input type="text" placeholder="Home Address" />
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
                    <input type="text" placeholder="Job Title" />
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <input type="text" placeholder="Company Location" />
                  <textarea name="" id="" placeholder="Description"></textarea>
                  <div className="double_input">
                    <input type="date" placeholder="Job Title" />
                    <input type="date" placeholder="Company Name" />
                  </div>
                  <input type="checkbox" className="checkmac" />
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
                    <input type="text" placeholder="Institution" />
                    <input type="text" placeholder="Course" />
                  </div>
                  <input type="text" placeholder="Location" />
                  <textarea name="" id="" placeholder="Description"></textarea>
                  <div className="double_input">
                    <input type="date" placeholder="Job Title" />
                    <input type="date" placeholder="Company Name" />
                  </div>
                  <input type="checkbox" className="checkmac" />
                  <span>I currently attend</span>
                </div>
              </div>
              <div className="personal">
                <h4>Social Link</h4>
                <div className="double_input">
                  <input type="url" placeholder="Linkedin" />
                  <input type="url" placeholder="Facebook" />
                </div>
                <div className="double_input">
                  <input type="url" placeholder="Website" />
                  <input type="url" placeholder="Twitter" />
                </div>
              </div>
              <div className="hiring">
                <h4>Message to Hiring manager</h4>
                <textarea
                  name=""
                  id=""
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
              <button type="submit" className="important-btn">
                Submit
              </button>
            </div>
          </form>
        </Main>
      </React.Fragment>
    );
  }
}

// function Step1(props) {
//   if (props.currentStep !== 1) {
//     return null;
//   }

//   return (

//   );
// }

const HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media (max-width: 488px) {
    padding: 20px !important;
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
`;

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MasterForm />
        <img
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};
export default Modal;
