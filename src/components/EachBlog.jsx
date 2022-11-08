import React from "react";
import { Link } from "react-router-dom";

const EachBlog = (props) => {
  return (
    <div className="each_blog grid-row">
      <img src={props.blogimg} alt="" />
      <div className="blog_title">
        <div className="b_label">
          <button className="outlined-btn on_technology">
            {props.category}
          </button>
          {/* <button className="outlined-btn on_technology">Technology</button> */}
        </div>
        <Link to={"/blog/" + props.link}>
          <h2>{props.title}</h2>
        </Link>
        <p>{props.encryption}</p>
        <div className="avatar_time">
          <div className="avatar_before">
            <img src={props.authorimg} alt="" />
            <h3>{props.authorname}</h3>
          </div>

          <h5 className="time_before">{props.date}</h5>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
