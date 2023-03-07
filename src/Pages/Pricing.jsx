import { React, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/navbar/Header";
// import PricingBanner from "../components/PricingBanner";
import PlanList from "../components/PlanList";
import ScrollToTop from "../components/ScrollToTop";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";
import { SeoHeader } from "../components/navbar/SeoHeader";


const Pricing = () => {
  ScrollToTop()
  const [duration, setDuration] = useState('monthly');
  const [data, setData] = useState([]);

  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/courses/course_plans/", requestOptions, true)
  })

  return (
    <section>
      <SeoHeader
        title="Pricing"
        description="Welcome to our learning platform! Here, you'll find a wealth of knowledge and resources at your fingertips. Whether you're a student, professional, or lifelong learner, we've got something for you. Our platform is designed to be interactive, engaging and easy-to-use. With a variety of courses, videos, assessments, and interactive activities, you'll be able to learn at your own pace and on your own schedule. We are committed to providing you with the best educational experience, and our team of experienced educators is always available to support you. Join us today and start expanding your horizons!"
        type="webapp"
        name="InstinctHub"
        thumbnail=''
        url={window.location.href}
      />
      <Header />
      <section className="banner_pricing">
        <div className="main_content container">
          <h1>Flexible plan for Everybody</h1>
          <p>
            Our plans are made for everyone, Whether you’re just starting out
            learning or have been on here for a long time. we have a plan for
            you.
          </p>
          <div className="switch_parent txt-align">
            <label class="switch">
              {/* Change duration state */}
              <input type="checkbox" onClick={(e) => e.target.checked ? setDuration('yearly') : setDuration('monthly')} />
              <span class="slider round"></span>
            </label>
            <p className="monthly_bill">Bill me Yearly</p>
          </div>
        </div>
      </section>

      <section className="subsc container fourcard_grid">
        <PlanList duration={duration} data={data} />
      </section>

      <Footer />
    </section>
  );
};

export default Pricing;
