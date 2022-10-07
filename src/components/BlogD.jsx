import React from "react";
import BreadCrumb from "./BreadCrumb";
import EachBlog from "./EachBlog";
import Images from "../assets/images/Images";
import Comments from "./Comments";

const Privacy = () => {
  return (
    <section>
      <BreadCrumb
        prevlink="/blog"
        previous="Blog"
        current="Password Authentication vs Passwordless authentication"
      />
      <div className="container blog_details">
        <img src={Images.blog1} alt="" className="details_img" />
        <div className="blog_title blog_d">
          <div className="avatar_time">
            <div className="avatar_before">
              <img src={Images.img3} alt="" />
              <h3>Sodiq A. Makinde</h3>
            </div>

            <h5 className="time_before">June 21,2022</h5>
            <h3 className="views">862</h3>
          </div>
          <div className="b_label">
            <button className="outlined-btn on_education">Education</button>
            <button className="outlined-btn on_technology">Technology</button>
          </div>
          <h1>Password Authentication Vs Passwordless Authentication</h1>
          <p>
            I remember back then, when I first heard about cloud computing, all
            my thoughts were, oh, we don’t need to buy any computing device,
            look at the sky and start using your device, which is not against
            the truth about cloud computing.
          </p>
          <p>
            Have you ever thought of an online drive like google, mega, among
            others, where you save some of your documents like PDFs and images
            and can access them anytime, even with any device? That’s just a
            simple example of how cloud computing works. Cloud computing is
            commonly misunderstood and confusing to know. In many ways, cloud
            computing involves a multi-layered architecture of servers, storage
            and networking.
          </p>
          <p>
            Most businesses develop their applications for internal use, but a
            few make the most of it by outsourcing them to one of these
            third-party companies.
          </p>
          <h2>What’s Cloud Computing?</h2>
          <p>
            Cloud computing is the process of using a remote server to store,
            manage, and access data and applications. In other words, it’s a way
            to outsource your IT needs. Rather than maintaining a server
            in-house, you can use a cloud provider to host your applications and
            data. This can save you money and time while providing extra
            security and reliability.
          </p>
          <p>
            Cloud computing has become increasingly popular recently as
            businesses realise the benefits of outsourcing their IT needs. Cloud
            providers can offer lower prices thanks to economies of scale and
            provide better security and reliability than most companies could
            achieve on their own.
          </p>
          <h2>How Does Cloud Computing Works</h2>
          <p>
            Cloud computing is the process of using a remote server to store,
            manage, and access data and applications. In other words, it’s a way
            to outsource your IT needs. Rather than maintaining a server
            in-house, you can use a cloud provider to host your applications and
            data. This can save you money and time while providing extra
            security and reliability.
          </p>
          <p>
            Cloud computing has become increasingly popular recently as
            businesses realise the benefits of outsourcing their IT needs. Cloud
            providers can offer lower prices thanks to economies of scale and
            provide better security and reliability than most companies could
            achieve on their own.
          </p>

          <ol>
            <li>You’ll never have to worry about outdated software again.</li>
            <li>You’ll never have to worry about outdated software again.</li>
            <li>You’ll never have to worry about outdated software again.</li>
            <li>You’ll never have to worry about outdated software again.</li>
          </ol>
          <p>
            We are rapidly approaching a future where desktop computing as we
            know it will no longer be the norm. Cloud computing has already
            begun to supersede traditional methods, and its growth is only
            poised to continue. There are reasons for this trend, but the most
            compelling arguments for cloud adoption come down to two key
            factors: flexibility and affordability.
          </p>
        </div>

        <div className="next_prev">
          <div className="prev_btn">
            <button className="outlined-btn">p</button>
            <div className="previous">
              <p>Previous</p>
              <h3>Pellentesque molestie facilisi.</h3>
            </div>
          </div>
          <div className="next_btn">
            <div className="next">
              <p>Next</p>
              <h3>Pellentesque molestie facilisi.</h3>
            </div>
            <button className="important-btn">n</button>
          </div>
        </div>

        <Comments />
      </div>
      <div className="more_posts">
        <div className="container">
          <h4>Post you may also like </h4>
          <div className="threecard_grid blog_control ">
            <EachBlog
              link=""
              blogimg={Images.blog1}
              authorimg={Images.img1}
              authorname="Sodiq A. Makinde"
              date="October 5, 2022"
              title="Password Authentication Vs Passwordless Authentication"
              encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
            />
            <EachBlog
              blogimg={Images.blog2}
              authorimg={Images.img2}
              authorname="Sodiq A. Makinde"
              date="October 5, 2022"
              title="Password Authentication Vs Passwordless Authentication"
              encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
            />
            <EachBlog
              blogimg={Images.blog3}
              authorimg={Images.img3}
              authorname="Sodiq A. Makinde"
              date="October 5, 2022"
              title="Password Authentication Vs Passwordless Authentication"
              encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
