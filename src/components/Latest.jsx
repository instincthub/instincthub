import React from "react";
import Images from "../assets/images/Images";

const Latest = () => {
  return (
    <section className="container" id="latestBlog">
      <div className="mt-10 mini_heading txt-align">
        <p className="cap_lock-txt">Our Blog</p>
        <h2>Insight and advice from our experienced team.</h2>
      </div>

      <div className="main_latest">
        <img src={Images.workspace} alt="" />

        <div className="blog_title">
          <div className="b_label">
            <button className="outlined-btn on_education">Education</button>
            <button className="outlined-btn on_technology">Technology</button>
          </div>
          <h2>Password Authentication Vs Passwordless Authentication</h2>
          <p>
            Passwords have significantly impacted today's society since the
            beginning of the 21st century. However, technology is beyond; we use
            the Internet to perform many activities such as transaction…
          </p>
          <div className="avatar_time">
            <div className="avatar_before">
              <img src={Images.img3} alt="" />
              <h3>Sodiq A. Makinde</h3>
            </div>

            <h5 className="time_before">June 21,2022</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
