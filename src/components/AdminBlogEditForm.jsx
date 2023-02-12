import {React, useEffect } from "react";
import styled from "styled-components";
import CheckBoxes from "./forms/CheckBoxes";
import FilterObjects from "./forms/FilterObjects";
import FilterArray from "./forms/FilterArray";
import SubmitBtn from "./forms/SubmitBtn";
import TextField from "./forms/TextField";
import TextArea from "./forms/TextArea";
import { reqOptions, fetchAPI, HOST_URL, printInputError, getCookie } from "../assets/js/help_func";


  const AdminBlogEditForm = (props) => {
    // const [thumbnail, setThumbnail] = useState(props.data.thumbnail)
    useEffect(()=>{
        let authors = []
        let author_ids = []
        if (props.data.author_list) {
            for (const key in props.data.author_list){
                authors.push(props.data.author_list[key].full_name)
                author_ids.push(props.data.author_list[key].id)
            }
        }
        // if (update && props.data.author_list)  setShowMessage(true)
        // else setShowMessage(false)
        // Remove overlay if success and display error message if error
        if (props.messageType === 201) {
          props.setEdit(false)
        }
        // else{
        //   printInputError(props.error)
        // }

    },[props.messageType])


    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Enable Spinning button
        e.target.querySelector('[type=submit]').classList.add('rolling');
        e.target.querySelector('[type=submit]').disabled = true;
        
        // Remove thumbnail from field if empty
        var formdata = new FormData(e.target);
        if (!formdata.get('thumbnail').size) formdata.delete('thumbnail')

        let requestOptions  = reqOptions('PUT', formdata, true);

        fetchAPI(props.set_data, `${HOST_URL()}/api/v1/posts/post/${props.data.slug}/?token=${getCookie('access')}`, requestOptions, true, props.setMessageType,  props.setError)
      };

      // Disable spinning button after getting status from fetch
      if (props.messageType && document.querySelector('.rolling')) {
        document.querySelector('[type=submit]').classList.remove('rolling')
        document.querySelector('[type=submit]').disabled = false;
      }

      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      }

      if (props.data.id && props.edit) {
        return (
            <HandlingOverlay>
                <div
                    onClick={(e) => {
                    e.stopPropagation();
                    }}
                    className="form_wrapper"
                >
                <Main>
                        <form action="" onSubmit={handleFormSubmit}>
                        <h3>Edit Blog</h3>
                
                        <img
                            src={props.data.thumbnail}
                            alt=""
                            className="featured_pic"
                        />

                        <div className="field">
                            <input
                            type="file"
                            name="thumbnail"
                            placeholder="Title"
                            />
                            <span>Blog Title</span>
                        </div>

                        <TextField type="text" name="title" label="Blog Title" required={true} defaultValue={props.data.title}/>
                        <TextArea name="overview" rows="5" label="Overview" required={true} defaultValue={props.data.overview}/>
                        <TextArea name="content" rows="30" label="Content" required={true} defaultValue={props.data.content}/>
                        

                        <CheckBoxes 
                            cat={props.data.categories} 
                            cat_list={props.data.category_list}
                            default={true}
                            />

                        <FilterObjects 
                            options ={props.data.author_list} 
                            exists={{id:props.data.author.id, title:props.data.author.user.first_name + ' ' + props.data.author.user.last_name}}
                            input_name="author"
                            label="Author"
                        />



                        <FilterObjects 
                            options ={props.data.previous_post_list} 
                            exists={props.data.previous_post}
                            input_name="previous_post"
                            label="Previous Post"
                        />

                        <FilterObjects 
                            options ={props.data.previous_post_list} 
                            exists={props.data.next_post}
                            input_name="next_post"
                            label="Next Post"
                        />

                        <FilterArray 
                            options ={["DRAFT", "PUBLISHED"]} 
                            defaults = {props.data.status}
                            input_name="status"
                            label="Status"
                        />
                

                         {/* Comments OR Feedbacks from Blog */}
                        <section className="feedbackContainer">
                            <h3> Comments ({props.data.comments ? props.data.comments.length : 0}) </h3>
                            <div className="feedback">
                                {props.data.comments.map((comment)=>{
                                    
                                    return <div className="each_comment">
                                    <h4>{comment.first_name ? `${comment.first_name} ${comment.last_name}` : ''}</h4>
                                    <p>{comment.content}</p>
                            
                                    {/* <textarea name="" id="" placeholder="Reply to comments"></textarea> */}
                                </div>
                                })}
                            </div>
                        </section>
                
                            <SubmitBtn add_class="important-btn" labels="Update blog"/>
                        </form>
                    </Main>
                <img
                    className="close-btn"
                    src="https://www.svgrepo.com/show/315851/close.svg"
                    alt="c"
                    onClick={()=>props.setEdit(false)}
                    />
                </div>
            </HandlingOverlay>
        );
    }
  };

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

  .form_wrapper{
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
      margin-top: 40px;
  }

  input[type="text"]{
    border-color: #D8D8D8;
  }
  .feedbackContainer {
    margin-top: 20px;
    h3 {
      font-family: Nunito;
      font-size: 18px;
      font-weight: 700;
      line-height: 19px;
      margin-bottom: 15px;
      text-align: left;
      span {
        font-family: Nunito;
        font-size: 20px;
        font-weight: 400;
        line-height: 22px;

        text-align: left;
      }
    }
  }
  .feedback {
    .each_comment {
      padding: 10px;
      border: 1px solid #EAEAEA;
      border-radius: 5px;
      margin-bottom: 15px;
      textarea {
        margin: 0 !important;
        font-family: 'Nunito';
      }
      h4 {
        margin-bottom: 5px;
      }
    }
  }
  @media (min-width: 650px) {
    .feedback {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .each_comment {
        width: 48.5%;
      }
    }
  }
  .featured_pic {
    height: 200px;
    object-fit: cover;
  }
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

  export default AdminBlogEditForm