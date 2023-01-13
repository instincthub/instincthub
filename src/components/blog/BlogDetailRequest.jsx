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
// import gfm from 'remark-gfm';
import { reqOptions, fetchAPI, HOST_URL } from "../../assets/js/help_func";


const BlogDetailRequest = () => {
  useState(window.localStorage.setItem("renderCount", 1)); // track initial render
  const violationRef = useRef(null);
  const [data, setData] = useState();
  const [newComments, setNewComments] = useState([]);
  const [messageType, setMessageType] = useState([]);
  const [error, setError] = useState([]);
  const [categories, setCategories] = useState();
  const [timestamp, setTimestamp] = useState("");
  let { slug } = useParams();

  const goToViolation = (id) => {
    violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    /* 
      Want react to fetch data once instead of twice. 
      - Set renderCount in useState.
      - Used the local storage to track the count.
      - Set the render count to 1 in fetchAPI
    */
    if (Number(window.localStorage.getItem("renderCount"))) {
      let requestOptions = reqOptions("get", null);
      fetchAPI(
        setData,
        HOST_URL() + "/api/v1/posts/post/" + slug,
        requestOptions,
        true
      );
      window.localStorage.setItem("renderCount", 0);
    }

    if (data && data.categories) {
      let obj = [];
      for (const i in data.categories) obj.push(data.categories[i]);
      setCategories(obj);
      setTimestamp(data.timestamp.slice(0, 10));
    }
    // eslint-disable-next-line
  }, []);

  if (data && data.title) {
    return (
      <section>
        <StatusMessage
          setMessageType={setMessageType}
          messageType={messageType}
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
                    return <button
                      key={option.id}
                      className="outlined-btn on_education categories"
                    >
                      {option.title}
                    </button>;
                  })
                : ""}
            </div>
            <h1>{data.title}</h1>
            <main>
              {data.content.includes("<p>") ? (
                <Markup markup={data.content} />
              ) : (
                <ReactMarkdown>{data.content}</ReactMarkdown>
              )}
            </main>
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
  else{
    return(
      <Loading className="container">
      <p className="mt-10">Blog Loading...</p>

      </Loading>
    )
  }
};

export default BlogDetailRequest;


const Loading = styled.div`
  height: 80vh;
  p{
    text-align: center;
    margin-top: 200px;
  }
`