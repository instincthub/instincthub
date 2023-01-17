import React, { useState, useEffect } from "react";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PageLoading } from "./blog/PageLoading";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import ReactTimeAgo from "react-time-ago";

/*
  Fetch policy and display based on slug params 
  Call the fetchData function every time the slug changes.
  Also change the navigation active css class.
*/

const PolicyDetails = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const { slug } = useParams();

  const fetchData = () => {
    let requestOptions = reqOptions("GET", null);
    fetchAPI(
      setData,
      HOST_URL() + "/api/v1/home_pages/policies/" + slug,
      requestOptions,
      true,
      setStatus,
      setError
    );
  };
  if (!data.id) fetchData();

  useEffect(() => {
    document.querySelectorAll("button.tab").forEach((option) => {
      if (option.dataset.slug === slug) option.classList.add("active");
    });
    fetchData();
  }, [slug]);

  if (data.id) {
    return (
      <Wrapper className="container job_tab">
        <div className="mt-10 tab_flex">
          <div className="tabs flex_1 dummy_height">
            {data.lists.map((option, index) => {
              return (
                <Link to={"/policies/" + option.slug} key={index}>
                  <button
                    className={`tab ${option.slug === slug ? "active" : ""}`}
                    data-slug={option.slug}
                  >
                    {option.title}
                  </button>
                </Link>
              );
            })}
          </div>

          <div className="panels flex_2">
            <div className={`panel active`}>
              <div className="phone_top content">
                <p>
                  Last Updated:{" "}
                  <ReactTimeAgo
                    date={new Date(data.last_updated)}
                    locale="en-US"
                  />
                </p>

                <div className="mt-5">
                  <h1 className="mb-1">{data.title}</h1>
                  <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } else if (status === 404) {
    return (
      <>
        <Navigate to="/404/page/not/found/" />
      </>
    );
  } else {
    return (
      <>
        <PageLoading labels="Policy" />
      </>
    );
  }
};

export default PolicyDetails;

const Wrapper = styled.div`
  .flex_2 {
    max-width: 700px;
    margin-right: auto;
    margin-right: auto;
    margin-top: 0px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  h3 {
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 18px;
  }
  h4 {
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 16px;
  }
  h5,
  h6 {
    font-size: 0.6em;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 14px;
  }
`;
