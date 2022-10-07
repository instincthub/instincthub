import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Images from "../assets/images/Images";

const Comments = () => {
  const [items, setItems] = useState([]);
  const [comments, setComment] = useState(3);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const AddMoreComment = () => {
    setComment((prev) => prev + 3);
  };
  return (
    <div className="comment_section">
      <h4>
        Comments <span>(30)</span>
      </h4>
      {items.slice(0, comments).map((item) => (
        <div className="eachcomment">
          <img src={Images.img3} alt="user" />
          <div className="name_comment">
            <h4>{item.name}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna
              semper nulla rutrum lacus semper. Ornare lobortis libero, aenean
              amet donec nibh amet, amet.{" "}
            </p>
          </div>
        </div>
      ))}

      <button className="outlined-btn" onClick={AddMoreComment}>
        Load More Comments
      </button>
    </div>
  );
};

export default Comments;
