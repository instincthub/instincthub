import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";
import Blogs from "../json/D4Blog.json";

/**
 *  *
 *  todo
 *  *
 *  Lets Create a from * All input should slide up * */
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};
/**
 *  *
 *  todo
 *  *
 *  Master Component handle all the inputs together * */
const BlogCreate = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Master />

        <img
          className="close-btn"
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};

const Master = () => {
  const [selected, setSelected] = useState("Previous Blog");
  const [next, setNext] = useState("Next Blog");
  const [author, setAuthor] = useState("Writer");
  return (
    <Main>
      <form action="" onSubmit={handleFormSubmit}>
        <h3>Create Blog</h3>
        <div className="custom_uploader">
          <div>
            <div className="tag_upload">
              <img src={SVGs.pic_frame} alt="" className="cloud" />
              <p>Drop File here 20MB File max size</p>
            </div>
            <input type="file" id="upload" name="upload" />
            <label htmlFor="upload">Browse Files</label>
          </div>
        </div>
        <div class="field">
          <input type="text" name="title" id="title" placeholder="John" />
          <span>Blog Title</span>
        </div>
        <div class="">
          <textarea name="" placeholder="Blog Overview"></textarea>
          <span></span>
        </div>

        <SelectCategories />

        <div className="selectDropdown">
          <PreviousBlog selected={selected} setSelected={setSelected} />
        </div>
        <div className="selectDropdown">
          <NextBlog selected={next} setSelected={setNext} />
        </div>
        <div className="selectDropdown">
          <Author selected={author} setSelected={setAuthor} />
        </div>

        <div class="field">
          <input type="text" name="title" id="title" placeholder="John" />
          <span>Link</span>
        </div>
        <div class="field">
          <input type="text" name="title" id="title" placeholder="John" />
          <span>Link 2</span>
        </div>

        <button className="important-btn" type="submit">
          Publish
        </button>
      </form>
    </Main>
  );
};

function SelectCategories() {
  /** ====TODO
   * 1. Checkboxes for All Category of blog belong here
   */
  return (
    <section className="manipulateCheckboxes">
      {/* Marketing */}
      <div class="cntr">
        <label htmlFor="marketing" class="label-cbx">
          <input
            id="marketing"
            name="marketing"
            type="checkbox"
            class="invisible"
            value="{props.agree}"
            onChange=""
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span>Marketing</span>
      </div>
      {/* Education */}
      <div class="cntr">
        <label htmlFor="education" class="label-cbx">
          <input
            id="education"
            name="education"
            type="checkbox"
            class="invisible"
            value="{props.agree}"
            onChange=""
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span>Education</span>
      </div>
      {/* Technology */}
      <div class="cntr">
        <label htmlFor="technology" class="label-cbx">
          <input
            id="technology"
            name="technology"
            type="checkbox"
            class="invisible"
            value="{props.agree}"
            onChange=""
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span>Technology</span>
      </div>
      {/* Security */}
      <div class="cntr">
        <label htmlFor="security" class="label-cbx">
          <input
            id="security"
            name="security"
            type="checkbox"
            class="invisible"
            value="{props.agree}"
            onChange=""
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span>Security</span>
      </div>
      {/* Community */}
      <div class="cntr">
        <label htmlFor="community" class="label-cbx">
          <input
            id="community"
            name="community"
            type="checkbox"
            class="invisible"
            value="{props.agree}"
            onChange=""
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span>Community</span>
      </div>
    </section>
  );
}

/** ====TODO
 * 1. You can control the Previous BLog Dropdown from Here
 */
const PreviousBlog = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = Blogs;

  return (
    <div className="select_me maximum_height">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly className="input_drop" />
        {/* {selected} */}
        <img
          src="https://www.svgrepo.com/show/379863/chevron-down.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option.title);
                setIsActive(false);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
/** ====TODO
 * 1. You can control the Next BLog Dropdown from Here
 */
const NextBlog = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = Blogs;

  return (
    <div className="select_me maximum_height">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly className="input_drop" />
        {/* {selected} */}
        <img
          src="https://www.svgrepo.com/show/379863/chevron-down.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option.title);
                setIsActive(false);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/** ====TODO
 * 1. You can control the author dropdown here
 * 2. You can dynamically add real authors to the OPTION Array
 */
const Author = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Demilade", "Noah", "Victoria", "Toheeb"];

  return (
    <div className="select_me">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly className="input_drop" />
        {/* {selected} */}
        <img
          src="https://www.svgrepo.com/show/379863/chevron-down.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Do not touch here !!!
 *
 */
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
  // Control Label
  .field {
    position: relative;
    margin-top: 25px;
  }

  input {
    border: 0;
    border: 1px solid #D8D8D8;

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

const ModalContainer = styled.div`
  position: relative;
  max-width: 690px;
  margin: 0px auto;

  .custom_uploader {
    position: relative;
    height: 230px;
    display: flex;
    background: #f9f9f9;
    border: 1.5px dashed rgba(44, 51, 58, 0.4);
    border-radius: 5px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    .tag_upload {
      margin-bottom: 30px;
      position: relative;
    }
    label {
      display: block;

      position: static;
      width: 200px;
      background: var(--DarkCyan);
      height: 50px;
      align-items: center;
      margin: 0 auto;
      text-align: center;
      color: var(--White);
      border-radius: 5px;
      font-weight: 500;
      font-size: 16px;
      line-height: 50px;
    }
    .cloud {
      text-align: center;
      position: static;
      width: 50px;
      height: 50px;
    }
    input {
      opacity: 0;
      position: absolute;
      left: 0;
    }
  }
  .close-btn {
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
    .close-btn {
      top: 20px;
      right: 20px;
    }
  }
`;

const Main = styled.div`
  max-width: 690px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  margin: 100px auto;
  padding: 40px;
  .maximum_height {
    .select_me {
      margin-bottom: 22px !important;
    }
    .select_content {
      max-height: 300px;
      overflow: auto;
    }
  }
  .manipulateCheckboxes {
    margin: 20px 0;
    .cntr {
      margin: 10px 0;
    }
  }
  button {
    width: 100%;
    margin-top: 50px;
  }
  .label-cbx {
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;
    margin: 10px 0;
    input {
      display: none;
    }
  }
  .label-cbx input:checked + .checkbox {
    border-color: #00838f;
  }
  .label-cbx input:checked + .checkbox svg path {
    fill: #00838f;
  }
  .label-cbx input:checked + .checkbox svg polyline {
    stroke-dashoffset: 0;
  }
  .label-cbx:hover .checkbox svg path {
    stroke-dashoffset: 0;
  }
  .label-cbx .checkbox {
    position: relative;
    top: 2px;
    float: left;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border: 2px solid #c8ccd4;
    border-radius: 3px;
  }
  .label-cbx .checkbox svg {
    position: absolute;
    top: -2px;
    left: -2px;
  }
  .label-cbx .checkbox svg path {
    fill: none;
    stroke: #00838f;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 71px;
    stroke-dashoffset: 71px;
    transition: all 0.6s ease;
  }
  .label-cbx .checkbox svg polyline {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 18px;
    stroke-dashoffset: 18px;
    transition: all 0.3s ease;
  }
  .label-cbx > span {
    pointer-events: none;
    vertical-align: middle;
  }
  @media (max-width: 540px) {
    padding: 40px 20px;
  }
  h3 {
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    display: flex;
    align-items: center;
  }
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

export default BlogCreate;
