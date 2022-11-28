import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CommentsList = (props) => {
  const [comments, setComment] = useState(3);

  const AddMoreComment = () => {
    setComment((prev) => prev + 3);
  };

  if (props.data.length) {
    return (
      <CommentTags className="comment_section">

        <h2 className="list_comments_header"> Comments <span>{props.data.length}</span> </h2>

        {/* Add New Comments */}
        {
          props.newComments.full_name ?
        <div className="eachcomment">

            <div className="default_image">{props.newComments.full_name[0]}</div>
            
            <div className="name_comment">
              <h4>{props.newComments.full_name}</h4>
              <p> {props.newComments.content}</p>
            </div>
          </div>
          :''
          }
          {/* End Add New Comments */}

        {props.data.slice(0, comments).map((option) => (
          <div key={option.id}>
          <div className="eachcomment">

            <div className="default_image">{option.full_name[0]}</div>
            
            <div className="name_comment">
              <h4>{option.full_name}</h4>
              <p> {option.content}</p>
            </div>
          </div>

          <div className="eachcomment">
            {
              option.user.your_photo ?
              <img src={option.user.your_photo} alt="user" />
              :
              <div className="default_image">{option.user.first_name[0]}</div>
            }
            
            <div className="name_comment">
              <h4>{option.user.first_name + ' ' + option.user.last_name}</h4>
              <p> {option.content}</p>
            </div>
          </div>
          </div>
        ))}
        {
          props.data.length > comments ?
          <button className="outlined-btn" onClick={AddMoreComment}>
            Load More Comments
          </button>
          : ''
        }
      </CommentTags>
    );
  }
};

export default CommentsList;

const CommentTags = styled.div`
  .default_image{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    Background: #8080808c;
    display: inline-block;
    color: #fff;
    padding: 5px 10px 10px 9px;
    position: relative;
    left: -7px;
    font-weight: 700;
    font-family: 'Nunito';
  }
  h2.list_comments_header{
      font-size: 20px;
      margin-bottom: 10px;
  }
`;
