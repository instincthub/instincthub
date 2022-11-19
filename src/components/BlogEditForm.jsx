import {React, useEffect } from "react";
import styled from "styled-components";
import BlogEditCategories from "./BlogEditCategories";
import FilterObjects from "./FilterObjects";
import FilterArray from "./FilterArray";
import { reqOptions, fetAPI, HOST_URL } from "../assets/js/help_func";


  
  const BlogEditForm = (props) => {
    useEffect(()=>{
        let authors = []
        let author_ids = []
        if (props.data.author_list) {
            for (const key in props.data.author_list){
                authors.push(props.data.author_list[key].full_name)
                author_ids.push(props.data.author_list[key].id)
            }
        }
    },[props.data.author_list])


    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Remove thumbnail from field if empty
        var formdata = new FormData(e.target);
        if (!formdata.get('thumbnail').size) formdata.delete('thumbnail')
        
        console.log(formdata.getAll('categories'));

        let requestOptions  = reqOptions('PUT', formdata, true);
        console.log(`${HOST_URL()}/api/v1/posts/post/${props.data.slug}/`);

        fetAPI(props.set_data, `${HOST_URL()}/api/v1/posts/post/${props.data.slug}/`, requestOptions, true)
      };

    return (
      <Main>
        <form action="" onSubmit={handleFormSubmit}>
          <h3>Edit Blog</h3>
  
          <img
            src={props.data.thumbnail}
            alt=""
            className="featured_pic"
          />

        <div class="field">
            <input
              type="file"
              name="thumbnail"
              placeholder="Title"
            //   value={props.data.thumbnail}
            />
            <span>Blog Title</span>
        </div>
  
        <div class="field">
            <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={props.data.title}
            />
            <span>Blog Title</span>
        </div>
          
          <div class="">
            <textarea
              name="overview"
              placeholder="Overview"
              defaultValue={props.data.overview}
            ></textarea>
            <span>Overview</span>
          </div>

          <div class="">
            <textarea
              name="content"
              rows={30}
              placeholder="Content"
              defaultValue={props.data.content}
            ></textarea>
            <span></span>
          </div>

          <BlogEditCategories 
            cat={props.data.categories} 
            cat_list={props.data.category_list}/>


        <FilterObjects 
            options ={props.data.author_list} 
            exists={props.data.author}
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
            <h3> Comments ({props.data.comments.length}) </h3>
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
  
          <button className="important-btn" type="submit">
            Update
          </button>
        </form>
      </Main>
    );
  };

  const Main = styled.div`
  max-width: 690px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  margin: 100px auto;
  padding: 40px;

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

  export default BlogEditForm