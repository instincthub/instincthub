import { React, useEffect } from "react";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";
import TextArea from "./forms/TextArea";
import TextField from "./forms/TextField";
import FilterObjects from "./FilterObjects";
import FilterArray from "./forms/FilterArray";
import SubmitBtn from "./forms/SubmitBtn";
import CheckBoxes from "./forms/CheckBoxes";
import { reqOptions, fetAPI, HOST_URL, printInputError } from "../assets/js/help_func";

const BlogCreate = (props) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Enable Spinning button
    e.target.querySelector('[type=submit]').classList.add('rolling');
    e.target.querySelector('[type=submit]').disabled = true;

    // Remove thumbnail from field if empty
    var formdata = new FormData(e.target);
    if (!formdata.get('thumbnail').size) formdata.delete('thumbnail')

    let requestOptions  = reqOptions('POST', formdata, true);

    fetAPI(props.set_data, `${HOST_URL()}/api/v1/posts/create/`, requestOptions, true, props.setMessageType, props.setError)
  };

  // Disable spinning button after getting status from fetch
  if (props.messageType && document.querySelector('.rolling')) {
    document.querySelector('[type=submit]').classList.remove('rolling')
    document.querySelector('[type=submit]').disabled = false;
  }

  useEffect(()=>{// Remove overlay if success and display error message if error
    if (props.data && props.messageType === 'success') {
      props.setOpenModal(false)
    }
    else if(props.error && props.messageType === 'error'){
      console.log(props.error);
      printInputError(props.error)
    }
  },[props.error])


  if (!props.openModal) return null;
  return (
    <HandlingOverlay onClick={()=>props.setOpenModal(false)}>
      <ModalContainer onClick={(e) =>e.stopPropagation()}>
        <Main>
          <form onSubmit={handleFormSubmit}>
            <h3>Create Blog</h3>
            <div className="custom_uploader">
              <div>
                <div className="tag_upload">
                  <img src={SVGs.pic_frame} alt="" className="cloud" />
                  <p>Drop File here 1MB File max size</p>
                </div>
                <input type="file" name="thumbnail" />
                <label htmlFor="upload">Browse Files</label>
              </div>
            </div>

            <TextField type="text" name="title" label="Blog Title" />
            <TextArea name="overview" rows="5" label="Overview" />
            <TextArea name="content" rows="15" label="Content" />

            <CheckBoxes 
              default={false}
              cat_list={props.data[0].category_list}/>

            <FilterObjects 
                options ={props.data[0].author_list} 
                exists={props.data.author}
                input_name="author"
                label="Author"
            />

            <FilterObjects 
                options ={props.data[0].previous_post_list} 
                input_name="previous_post"
                label="Previous Post"
            />

            <FilterObjects 
                options ={props.data[0].previous_post_list} 
                input_name="next_post"
                label="Next Post"
            />

            <FilterArray 
                options ={["DRAFT", "PUBLISHED"]} 
                input_name="status"
                label="Status"
            />

            <SubmitBtn add_class="important-btn" labels="Post Blog"/>
          </form>
        </Main>

        <img
          className="close-btn"
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={()=>props.setOpenModal(false)}
        />
      </ModalContainer>
    </HandlingOverlay>
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
`;

const ModalContainer = styled.div`
  position: relative;
  max-width: 690px;
  margin: 0px auto;

  .custom_uploader {
    position: relative;
    height: 230px;
    background: #f9f9f9;
    border: 1.5px dashed rgba(44, 51, 58, 0.4);
    border-radius: 5px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
      text-align: center;
    }
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

  .select_me {
      margin-bottom: 22px !important;
      margin-top: 40px;
    }
  .select_content {
    max-height: 300px;
    overflow: auto;
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
