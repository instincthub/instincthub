import {React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";

const Latest = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [timestamp, setTimestamp] = useState('');

  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/posts/top_post/", requestOptions, true)
  })

  useEffect(()=>{
    if (data.categories) {
      let obj = []
      for (const i in data.categories) obj.push(data.categories[i])
      setCategories(obj)
      console.log(categories);

      setTimestamp(data.timestamp.slice(0, 10))
      // setName()
    }
    // eslint-disable-next-line
  }, [data.categories])

  if (data.title) {
    return (
      <section className="container" id="latestBlog">
        <div className="mt-10 mini_heading txt-align">
          <p className="cap_lock-txt">Our Blog</p>
          <h2>Insight and advice from our experienced team.</h2>
        </div>

        <div className="main_latest">
          <img src={data.thumbnail} alt={data.title} />

          <div className="blog_title">
            <div className="b_label">
            {categories.map((option)=>{
              return <button key={option.id} className="outlined-btn on_education categories">{option.title}</button>
            })}
            </div>
            <Link to={"/blog/"+data.slug}><h2>{data.title}</h2></Link>
            <p>{ data.overview }</p>
            <div className="avatar_time">
              <div className="avatar_before">
                {/* <img src={Images.img3} alt="" /> */}
                <img src={data.author.profile_picture} alt="" />
                <h3>{data.author.title}</h3>
              </div>

              <h5 className="time_before">{timestamp}</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Latest;
