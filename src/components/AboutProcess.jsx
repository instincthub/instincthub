import React from "react";
import Images from "../assets/images/Images";

const AboutProcess = () => {
  return (
    <section id="spaces">
      <div className="container" id="aboutProcess">
        <div className="mini_heading">
          <p className="cap_lock-txt">About Instincthub</p>
          <h2>Our Work Process</h2>
          <p>
            At Instincthub, our approach to learning management is centered
            around delivering seamless and effective solutions that meet the
            unique needs of our clients. Our work process is designed to ensure
            that we deliver the highest quality service and support, while also
            providing a smooth and efficient experience for our clients.
          </p>
          <p>
            We begin by working closely with our clients to understand their
            specific needs and goals. This includes conducting a thorough
            analysis of their existing learning management system and
            identifying areas that need improvement. Based on this analysis, we
            then develop a customized solution that is tailored to meet their
            specific requirements.
          </p>
          <p>
            Next, we implement the solution and provide training support to
            ensure that our clients are able to fully utilize all of its
            features and capabilities. Our team is available to assist with any
            questions or issues that may arise and provide ongoing support to
            ensure that the system continues to meet the client's needs.
          </p>
          <p>
            Our students have testified how satisfied they are with our work
            process, the flexibility and the ease of use of our system. They
            appreciate the level of support that we provide which enables them
            to optimize their learning program. Our approach has been proven to
            be successful in increasing the completion rate and overall
            satisfaction of the students.
          </p>
          <p>
            At Instincthub, we take pride in providing a seamless and effective
            learning management solution that empowers our clients to achieve
            their goals and reach their full potential.
          </p>
          {/* <button className="outlined-btn mt-1">Learn More</button> */}
        </div>

        <div className="process_img">
          <img src={Images.about_process} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
