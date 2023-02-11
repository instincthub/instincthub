import { React, useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import JsonData from '../Mock-API.json'
import API from "../../json/D4Blog.json";
import AdminBlog from "../../components/AdminBlogs";
import styled from "styled-components";
import Create from "../../components/blog/BlogCreate";
// import BlogEdit from "../../components/BlogEdit";
import Header from "../../components/navbar/Header";
import Footer from "../../components/Footer";
import StatusMessage from "../../components/message/StatusMessage";
import ScrollToTop from "../../components/ScrollToTop";
import AdminBlogEditForm from "../../components/AdminBlogEditForm";
import Pagination from "../../components/blog/Pagination";
import SearchField from "../../components/forms/SearchField";
import {getCookie } from "../../assets/js/help_func";
import { useNavigate } from "react-router-dom";
import { LoginRequired } from "../../components/forms/LoginRequired";

function AdminBlogList() {
  ScrollToTop();

  const navigate = useNavigate()
  LoginRequired()
  
  // Pagination required states:
  const violationRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [searchValues, setSearchValues] = useState([]);
  const [tabsValues, setTabsValues] = useState([]);
  const goToViolation=(id)=> violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });


  const [events, setEvents] = useState(API.slice(0, 20));
  const [blog_edit, setBlogEdit] = useState([]);
  const [created, setCreated] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal
  const [edit, setEdit] = useState(false); // state for Modal
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";


  /* 
    Show message for "success" or "error".
    The default state is ''.
    Render the StatusMessage below the Header
    props: [type, setType, message]
  */
  const [messageType, setMessageType] = useState('');
  const [error, setError] = useState([])


  useEffect(()=>{
    if (created && created.slug) {
      events.results.unshift(created)
      setCreated([])
    }
  },[created.slug, messageType])

  return (
    <>
      <Header />
      <StatusMessage 
          setStatus={setMessageType}
          status={messageType}
      />

      <section className="container" ref={violationRef}>
        <div className="">
          <div className="event-container">
            <HandleSearchAndTab>
              {/* <Tabs setData={setEvents} setSearchValues={setSearchValues} setTabsValues={setTabsValues}/> */}

              <div className="event-input">
                
                <SearchField setSearchValues={setSearchValues}/>

                {/* <div className="filter">
                  <FilterArray 
                    options ={["Last 7days", "Last 14 days", "This month", "Last Month"]} 
                  />
                </div> */}

                <button
                  className="important-btn"
                  onClick={() => setOpenModal(true)} >
                  New Blog
                </button>
              </div>
            </HandleSearchAndTab>
          </div>
        </div>
        
        {/* List Blog Post */}
        <AdminBlog events={events} setBlogEdit={setBlogEdit} setEdit={setEdit} searchTerm={searchTerm}/>

        {
          <Pagination 
              data={events}
              setData={setEvents}
              limit={20} 
              offset={searchParams.get("offset")}
              goToViolation={goToViolation}
              tabsValues={tabsValues}
              searchValues={searchValues}
              urlPath="/api/v1/posts/admin/"
              tokens={true}
          />
        }
      </section>
      <Footer />

      {/* MODALS */}
      <Create openModal={openModal} setOpenModal={setOpenModal} data={events} setCreated={setCreated} setMessageType={setMessageType} messageType={messageType} setError={setError} error={error}/>

      <AdminBlogEditForm events={events} edit={edit} setEdit={setEdit} data={blog_edit} set_data={setEvents} setMessageType={setMessageType} messageType={messageType} setError={setError}/>

    </>
  );
}

export default AdminBlogList;


const HandleSearchAndTab = styled.section`
  margin-top: 130px;
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .search_set{
    margin: 0px 10px;
    min-width: 200px;
  }
  .event-input {
    max-width: 500px;
    margin-left: auto;
    input {
      margin-bottom: 20px;
    }
    .important-btn{
      min-width: 100px;
    }
    .filter{
      width: 170px;
      height: 47.5px;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .event-input {
      display: flex;
      justify-content: space-between;
      width: 57%;
      .select_me {
        margin-left: 10px;
      }
      button {
        margin-top: 0;
        height: 45px;
      }
      .event-select {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .event-input {
      .event-select {
        display: none;
      }
    }
  }
  .tabs {
    margin: 0;
    margin-bottom: 30px;
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;
      padding: 5px 20px;
      text-align: center;
      margin-right: 15px;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 15px;
      }
    }
    .active {
      background: transparent;
      border-bottom: 2px solid #00838f;
      button {
        color: #00838f;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
`;
