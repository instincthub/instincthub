import { React, useEffect, useState, useRef } from "react";
import BlogDefaultData from "../../json/blogData.json";
import EachBlog from "./EachBlog";
import styled from "styled-components";
import Pagination from "./Pagination";
import Tabs from "./Tabs";
import { useSearchParams } from "react-router-dom";
import ErrorBoundry from '../ErrorBoundary'
import { PageLoading } from "./PageLoading";

import { reqOptions, fetchAPI, HOST_URL } from "../../assets/js/help_func";

const BlogUserList = () => {
  const violationRef = useRef(null);
  const [data, setData] = useState();
  const [componentErr, setComponentErr] = useState(false);
  const [searchValues, setSearchValues] = useState(false);
  const [tabsValues, setTabsValues] = useState(false);
  const [searchParams] = useSearchParams();
  searchParams.get("cat");
  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetchAPI(setData, HOST_URL()+"/api/v1/posts/", requestOptions, true)
  })

  const goToViolation = (id) => {
    violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    
  }, [data]);

  return (
    <div ref={violationRef}>
      <BlogListWrapper className="container">
        <div className="event_container">
          <Tabs
            setData={setData}
            setSearchValues={setSearchValues}
            setTabsValues={setTabsValues}
          />
          {data && data.results ? (
            <div className="blog_wrapper">
              {data.results.map((option) => {
                return (
                  <div className="blog_control" key={option.id}>
                    <EachBlog data={option} />
                  </div>
                );
              })}
            </div>
          ) : <PageLoading labels="Blog list"/>

          
          }
        </div>
        <ErrorBoundry setComponentErr={setComponentErr}>
        {data && data.results ? 
          <Pagination
            data={data}
            setData={setData}
            limit={10}
            offset={searchParams.get("offset")}
            goToViolation={goToViolation}
            tabsValues={tabsValues}
            searchValues={searchValues}
            urlPath="/api/v1/posts/"
          />
          :''}
        </ErrorBoundry>
      </BlogListWrapper>
    </div>
  );
};

export default BlogUserList;

const BlogListWrapper = styled.section`
  display: block;
  .event_container .blog_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .blog_control {
    width: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #eaeaea;
  }

  .container {
    margin-bottom: 20px;
  }
  .blog_control {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    .blog_control {
      width: 45%;
    }
  }
  @media (min-width: 1024px) {
    .blog_control {
      width: 30%;
    }
  }
`;
