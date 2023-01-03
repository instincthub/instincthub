import { React, useState} from "react";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";


const Testimonial = () => {
  const [data, setData] = useState([]);

  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/home_pages/partners/?limit=5", requestOptions, true)
  })
  
  if(data.results){
    return (
      <div className="container">
        <div className="overflowing">
          <div className="partners">
            {
              data.results.map((option)=>{
                return <div className="per_partner" key={option.id}>
                  <img src={option.logo} alt={option.name + ' Logo'} />
                </div>
              })
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Testimonial;
