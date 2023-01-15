import { React, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const PlanList = (props) => {
  const [courses, setCourses] = useState()
  const [tracks, setTracks] = useState()
  const plans = {
    courses_m: "https://paystack.com/pay/instincthub-courses-month", 
    courses_y: "https://paystack.com/pay/instincthub-courses-yearly",
    tracks_m: "https://paystack.com/pay/instincthub-tracks-month",
    tracks_y: "https://paystack.com/pay/instincthub-tracks-yearly",

  }

  useEffect(()=>{
    if (props.duration === 'monthly') {
      setCourses(plans.courses_m);
      setTracks(plans.tracks_m);
    }
    else if (props.duration === 'yearly'){
      setCourses(plans.courses_y);
      setTracks(plans.tracks_y);
    }
  }, [props.duration])


  if (props.data.results) {
    return (
      <>
      {
        props.data.results.map((option)=>{
          return <div className="grid-row" key={ option.id } >
            <div className="plans">
              <div className="plan_top">
                {
                  option.slug === 'tech-savvy' ?
                  <h3>Recommended</h3>
                  : ''
                }
                <h4>{ option.title }</h4>
                {option.slug === "free" ? <p>Limited access</p> :''}

                {/* Display Monthly or Yearly Cost */}
                {
                  option.slug !== "free" && option.slug !== "enterprise" && props.duration === 'monthly' ? 
                  <p className="price"> {option.monthly_price+'/'+props.duration}</p> : option.slug !== "free" && option.slug !== "enterprise" && props.duration === 'yearly' ?
                  <p className="price"> {`${option.monthly_price*90/100}/${props.duration}`}</p> : ''
                }

                {/* Amount saved */}
                {
                  (option.slug === 'courses' || option.slug === 'tech-savvy') && props.duration === 'yearly' ?
                  <span className="save_msg">N{ option.monthly_price*10/100 } saved from yearly 10% discount.</span>

                : ''
                }

              </div>

              <ul className="access">
                {
                  option.features.map((feature)=>{
                    return<li>{feature.name}</li>
                  })
                }
                {/* <li className="not_available">Projects</li> */}
                {/* <button className="native-btn free_bro"> Start Free </button> */}

                {/* Courses Plan if free, enterprise */}
                
                <a 
                  href={(option.slug === 'free') ? 'https://skills.instincthub.com' : (option.slug === 'enterprise') ? 'https://wa.me/message/5IA2QYCI53SUM1' : courses }
                  rel="noopener noreferrer"
                  target="blank">
                  <button className="native-btn">{ (option.slug === 'enterprise') ? 'Chat With Us' : 'Choose Plan' }</button>
                </a>
              </ul>
            </div>
          </div>
        })
      }
      
      </>
    );
  }
};

export default PlanList;
