import {React, useEffect, useState} from "react";
import BreadCrumb from "../BreadCrumb";
import EachBlog from "./EachBlog";
import Images from "../../assets/images/Images";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { Markup } from 'react-render-markup';
import NextPrevious from "./NextPrevious";
// import gfm from 'remark-gfm';
import { reqOptions, fetAPI, HOST_URL} from "../../assets/js/help_func";

const BlogDetailRequest = () => {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([]);
  const [timestamp, setTimestamp] = useState('');
  let { slug } = useParams();

  useEffect(()=>{
    let requestOptions  = reqOptions('get', null)
    fetAPI(setData, HOST_URL()+"/api/v1/posts/post/"+slug, requestOptions, true)

    if (data.categories) {
      let obj = []
      for (const i in data.categories) obj.push(data.categories[i])
      setCategories(obj)
      console.log(categories);

      setTimestamp(data.timestamp.slice(0, 10))
      // setName()
    }
    // eslint-disable-next-line
  }, [])

  if (data.title) {
    return (
      <section>
        <BreadCrumb
          prevlink="/blog"
          previous="Blog"
          current={data.title}
        />
        <div className="container blog_details">
          <img src={data.thumbnail} alt={data.title} className="details_img" />
          <div className="blog_title blog_d">
            <div className="avatar_time">
              <div className="avatar_before">
                <img src={data.author.profile_picture} alt={data.author.title} />
                <h3>{data.author.title}</h3>
              </div>

              <h5 className="time_before">{timestamp}</h5>
              <h3 className="views">862</h3>
            </div>
            <div className="b_label">
            {categories.map((option)=>{
                return <button key={option.id} className="outlined-btn on_education categories">{option.title}</button>
              })}
            </div>
            <h1>{data.title}</h1>
            <main>
              <Markup markup={data.content} />
            </main>
            
          </div>

          {/* Next and Previous */}
          <NextPrevious/>

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
  }
};

export default BlogDetailRequest;
