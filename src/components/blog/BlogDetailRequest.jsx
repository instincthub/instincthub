import { React, useEffect, useState, useRef } from "react";
import blogDetailsDefault from "../../json/blogDetailsDefault.json";
import categoriesDefault from "../../json/categoriesDefault.json";
import styled from "styled-components";
import BreadCrumb from "../BreadCrumb";
import CommentsList from "./CommentsList";
import CommentsAdd from "./CommentsAdd";
import { useParams } from "react-router-dom";
import { Markup } from "react-render-markup";
import ReactMarkdown from "react-markdown";
import NextPrevious from "./NextPrevious";
import RecommendedBlog from "./RecommededBlog";
import StatusMessage from "../message/StatusMessage";
import { PageLoading } from "./PageLoading";
// import gfm from 'remark-gfm';
import { reqOptions, fetchAPI, HOST_URL } from "../../assets/js/help_func";
import Error404 from "../Status/Error404";
import { SeoHeader } from "../navbar/SeoHeader";

const BlogDetailRequest = () => {
  useState(window.localStorage.setItem("renderCount", 1)); // track initial render
  const violationRef = useRef(null);
  const [data, setData] = useState(0);
  const [newComments, setNewComments] = useState([]);
  const [messageType, setMessageType] = useState([]);
  const [error, setError] = useState([]);
  const [categories, setCategories] = useState();
  const [timestamp, setTimestamp] = useState("");
  let { slug } = useParams();

  if(data === 0){
    let requestOptions = reqOptions("GET", null);
    fetchAPI(
      setData,
      HOST_URL() + "/api/v1/posts/post/" + slug,
      requestOptions,
      true
    );
  };

  const goToViolation = (id) => {
    violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (data && data.categories && !categories) {
      let obj = [];
      for (const i in data.categories) obj.push(data.categories[i]);
      setCategories(obj);
      setTimestamp(data.timestamp.slice(0, 10));
    }
  }, [data]);

  if (data && data.title) {
    return (
      <section>
      <SeoHeader
        title={data.title}
        description={data.overview}
        type="webapp"
        name={(data.author) && `${data.author.user.first_name} ${data.author.user.last_name}`}
        thumbnail={data.thumbnail}
        url={window.location.href}
      />
        <StatusMessage
          setStatus={setMessageType}
          status={messageType}
        />
        <BreadCrumb prevlink="/blog" previous="Blog" current={data.title} />
        <div className="container blog_details">
          <img src={data.thumbnail} alt={data.title} className="details_img" />
          <div className="blog_title blog_d">
            <div className="avatar_time">
              <div className="avatar_before">
                <img
                  src={data.author.profile_picture}
                  alt={data.author.title}
                />
                <h3>{data.author.title}</h3>
              </div>

              <h5 className="time_before">{timestamp}</h5>
              <h3 className="views">{data.view_count}</h3>
            </div>
            <div className="b_label">
              {categories
                ? categories.map((option) => {
                    return (
                      <button
                        key={option.id}
                        className="outlined-btn on_education categories"
                      >
                        {option.title}
                      </button>
                    );
                  })
                : ""}
            </div>
            <h1>{data.title}</h1>
            <ReactMain>
              {data.content.includes("<p>") ? (
                <Markup markup={data.content} />
              ) : (
                <ReactMarkdown>{data.content}</ReactMarkdown>
              )}
            </ReactMain>
          </div>

          {/* Next and Previous */}
          <NextPrevious data={data} refs={violationRef} />

          <CommentsList data={data.comments} newComments={newComments} />
          <CommentsAdd
            data={data}
            setNewComments={setNewComments}
            newComments={newComments}
            setMessageType={setMessageType}
            setError={setError}
            goToViolation={goToViolation}
          />
        </div>

        <RecommendedBlog data={data.recommended_posts} />
      </section>
    );
  } 
  else if(data && data.detail === 'Not found.') return<Error404/>
  else return <PageLoading labels="Blog" />
};

export default BlogDetailRequest;

const ReactMain = styled.main`
  a{
    font-weight: 600;
    color: var(--ViridianGreen);
    transition: .2s ease-in;
    &:hover{
      color: var(--DarkCyan);
      text-transform: underline;
      text-decoration: underline;
    }
  }
`;
