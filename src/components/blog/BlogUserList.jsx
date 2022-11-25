import { React, useEffect, useState, useRef } from 'react';
import EachBlog from './EachBlog';
import styled from 'styled-components';
import Pagination from './Pagination';
import Tabs from './Tabs';
import { useSearchParams } from 'react-router-dom';
import { reqOptions, fetAPI, HOST_URL } from "../../assets/js/help_func";

const BlogUserList = () => {
    const violationRef = useRef(null);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    searchParams.get("cat")

    const goToViolation=(id)=>{
        violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(()=>{
        let requestOptions  = reqOptions('get', null)
        fetAPI(setData, HOST_URL()+"/api/v1/posts/", requestOptions, true)
    },[])

    if (data.results) {
        return (
            < div ref={violationRef}>
            <BlogListWrapper className="container">
                <div className="event_container"  >

                    <Tabs setData={setData}/>

                    <div className='blog_wrapper' >
                        {data.results.map((option)=>{
                            return  <div className="blog_control" key={option.id}>
                                <EachBlog data={option} />
                            </div>
                        })}
                    </div>
                </div>
                <Pagination 
                    data={data}
                    setData={setData}
                    limit={searchParams.get("limit")} 
                    offset={searchParams.get("offset")}
                    goToViolation={goToViolation}
                />
            </BlogListWrapper>
            </div>
        );
    }
};

export default BlogUserList;


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
