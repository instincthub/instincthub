import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EachBlog = (props) => {
  const [objects, setObjects] = useState([])
  const timestamp = useState(props.data ? props.data.timestamp.slice(0, 10) : '');

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
            
            {/* <button className="outlined-btn on_technology">Technology</button> */}
          </div>
          <Link to={`/blog/${props.data.slug}`}>
            <h2 title={props.data.title}>{props.data.title.length >= 70 ? props.data.title.substring(0,70)+'...' : props.data.title}</h2>
          
            <p>{props.data.overview.substring(0,150)+'...'}</p>
            <div className="avatar_time">
              <div className="avatar_before">
                <img src={ props.data.author.profile_picture } alt="" />
                <h3>{props.data.author.title}</h3>
              </div>

              <h5 className="time_before">{ timestamp }</h5>
            </div>
          </Link>
        </div>
      </BlogCategory>
    );
  }
}

export default EachBlog;

const BlogCategory = styled.div  `
  button.categories{
    font-size: 10px;
    border: .5px solid #D8D8D8 ;
    color: #314A52;
    padding: 5px 8px !important;

    &:hover{
      background-color: #EAEAEA;
    }
  }

`;