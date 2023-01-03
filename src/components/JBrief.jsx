import React, { useState } from "react";
import ApplyJobsForm from "./ApplyJobsForm";
import ReactMarkdown from 'react-markdown'

const JobBriefing = ({data}) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log(data);
  return (
    <div className="phone_top" id="jobBrief">
      <div className="main_post">
        <h2>{data.title}</h2>
        <div className="job_mode">
          <h4>{data.job_types ? data.job_types[0].job_type : ''}</h4>
          <ul>
            <li>{data.job_types ? data.job_category : ''}</li>
          </ul>
        </div>

        <div className="main_brief">
          <h3>Job Brief</h3>

          <ReactMarkdown>{data.description}</ReactMarkdown>
          
        </div>

        <button className="important-btn" onClick={() => setOpenModal(true)}>
          Apply Now
        </button>
        <ApplyJobsForm open={openModal} onClose={() => setOpenModal(false)} data={data} />
      </div>
    </div>
  );
};

export default JobBriefing;
