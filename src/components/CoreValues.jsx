import { React, useState } from "react";
import SVGs from "../assets/svg/SVGs";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";

const CoreValues = () => {
  const [data, setData] = useState([]);

  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/home_pages/core_values/", requestOptions, true)
  })

  return (
    <section className="width-manager" id="spaces">
      <div className="featured">
        <div className="frame">
          <img src={SVGs.star_gif} alt="FEATURES Pictures" className="gif" />
        </div>
        <div className="features_cap">
          <div className="mini_heading">
            <p className="cap_lock-txt">OUR VALUE</p>
            <h2>instinctHub values</h2>
            <p> Everyone deserves the freedom to pursue their purpose, our mantra is to create a renewed sense of purpose through digital education. <strong>instinctHub</strong> is guided by four principles:</p>
          </div>

          <div className="about_feature">
            <div className="">
              {
                data.results ?
                  data.results.map((option)=>{
                    return <p key={ option.id }> { option.content }</p>
                  })
                :''
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
