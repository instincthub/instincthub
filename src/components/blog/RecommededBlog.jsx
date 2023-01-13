import React from "react";
import styled from "styled-components";
import EachBlog from "./EachBlog";

const RecommendedBlog = (props) => {
    return ( 
        <BlogListWrapper className="container">
        <h4>Post you may also like </h4>
        <div className="event_container"  >

            <div className='blog_wrapper' >
                {props.data.map((option, index)=>{
                    return  <div className="blog_control" key={index}>
                        <EachBlog data={option} />
                    </div>
                })}
            </div>
        </div>
    </BlogListWrapper>
     );
}
 
export default RecommendedBlog;


const BlogListWrapper = styled.section`
display: block;
.event_container .blog_wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.blog_control{
    width: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #EAEAEA;
}
    
  .container {
    margin-bottom: 20px;
  }
  .blog_control{
        width: 100%;
        margin-top: 50px;
    }
  
  @media (min-width: 768px) {
    .blog_control{
        width: 45%;
    }
  }
  @media (min-width: 1024px) {
    .blog_control{
        width: 30%;
    }
  }
`;