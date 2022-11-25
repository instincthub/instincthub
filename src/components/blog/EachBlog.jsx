import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EachBlog = (props) => {
  const [objects, setObjects] = useState([])

  /*
    Objects trows error when you loop with map or forEach.
    Solution: convert to array.
  */
  useEffect(()=>{
    // Objects to array
    if (props.data) {
      let obj = []
      for (const i in props.data.categories) obj.push(props.data.categories[i])
      setObjects(obj)
    }
    
  }, [props.data])

  if (props.data) {
    return (
      <BlogCategory className="each_blog grid-row">
        <Link to={`/blog/${props.data.slug}`}>
          <img src={props.data.thumbnail} alt="" />
        </Link>
        <div className="blog_title">
          <div className="b_label">
            {objects.map((option) => {
              return <button key={option.id} className="outlined-btn on_technology categories">
              {option.title}
            </button>
            })}
          </div>
          
          <Link to={`/blog/${props.data.slug}`}>
            <h2>{props.data.title.length >= 70 ? props.data.title.substring(0,70)+'...' : props.data.title}</h2>
          
            <p>{props.data.overview.substring(0,150)+'...'}</p>
            <div className="avatar_time">
              <div className="avatar_before">
                <img src={ props.data.author.profile_picture } alt="" />
                <h3>{props.data.author.title}</h3>
              </div>

              <h5 className="time_before">{ props.data ? props.data.timestamp.slice(0, 10) : '' }</h5>
            </div>
          </Link>
        </div>
      </BlogCategory>
    );
  }
}

export default EachBlog;

const BlogCategory = styled.div  `
  

`;