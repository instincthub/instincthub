import React, { useState } from "react";
import Modal from "../components/ApplyForm";

const JobBriefing = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="phone_top" id="jobBrief">
      <div className="main_post">
        <h2>Mid-level Product Designer</h2>
        <div className="job_mode">
          <h4>Full Time</h4>
          <ul>
            <li>Over 20 applicants</li>
          </ul>
        </div>

        <div className="main_brief">
          <h3>Job Brief</h3>
          <p>
            We are looking for UX/UI product designers at the following levels
          </p>
          <ul>
            <li>Mid-senior level</li>
          </ul>
          <p>
            to help bring new product visions to life. This role is CUSTOMER
            facing and you will be required to have good work from home
            conditions.
          </p>
          <p>
            Do you have a passion for product design? Can you demonstrate
            empathy and strong advocacy for our users, while balancing the
            vision and constraints of engineering in your design, then this
            might be the role for you!
          </p>
        </div>

        <div className="main_brief" id="responsibilities">
          <h3>Responsibilities</h3>
          <p>
            You will be responsible for self management and working in teams to
            execute on customer delivery
          </p>
          <p>You will be responsible for scoping design requirements</p>
          <ul>
            <li>Design wireframes and mockups</li>
            <li>
              Manage and produce high-quality designs that will be used across
              products
            </li>
            <li>
              Ensure consistency of brand and creative across digital customer
              touchpoints.
            </li>
            <li>
              Work with the development team to ensure designs are implemented
              properly
            </li>
            <li>
              Test designs usability and quality. A great understanding of
              usability testing and principles
            </li>
            <li>Propose and implement ideas on how to improve overall UX</li>
            <li>
              Provide design support to create product graphics, logos, identity
              design, or other similar offline graphics
            </li>
          </ul>
        </div>

        <div className="main_brief">
          <h3>Requirements</h3>
          <p>
            You will be responsible for self management and working in teams to
            execute on customer delivery
          </p>
          <p>You will be responsible for scoping design requirements</p>
          <ul>
            <li>Design wireframes and mockups</li>
            <li>
              Manage and produce high-quality designs that will be used across
              products
            </li>
            <li>
              Ensure consistency of brand and creative across digital customer
              touchpoints.
            </li>
            <li>
              Work with the development team to ensure designs are implemented
              properly
            </li>
            <li>
              Test designs usability and quality. A great understanding of
              usability testing and principles
            </li>
            <li>Propose and implement ideas on how to improve overall UX</li>
            <li>
              Provide design support to create product graphics, logos, identity
              design, or other similar offline graphics
            </li>
          </ul>
        </div>
        <div className="main_brief">
          <h3>Skills set</h3>
          <p>
            You will be responsible for self management and working in teams to
            execute on customer delivery
          </p>
        </div>
        <div className="main_brief">
          <h3>Qualifications</h3>
          <p>
            You will be responsible for self management and working in teams to
            execute on customer delivery
          </p>
          <ul>
            <li>Design wireframes and mockups</li>
            <li>
              Manage and produce high-quality designs that will be used across
              products
            </li>
            <li>
              Ensure consistency of brand and creative across digital customer
              touchpoints.
            </li>
          </ul>
        </div>

        <button className="important-btn" onClick={() => setOpenModal(true)}>
          Apply Now
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default JobBriefing;
