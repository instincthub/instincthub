import { React, useState } from "react";
// import JsonData from '../Mock-API.json'
import API from "../../json/D4Blog.json";
import AdminBlog from "../../components/AdminBlogs";
import styled from "styled-components";
import Create from "../../components/BlogCreate";
// import BlogEdit from "../../components/BlogEdit";
import Header from "../../components/navbar/Header";
import Footer from "../../components/Footer";
import FilterArray from "../../components/forms/FilterArray";
import StatusMessage from "../../components/message/StatusMessage";
import ScrollToTop from "../../components/ScrollToTop";
import AdminBlogEditForm from "../../components/AdminBlogEditForm";
import { reqOptions, fetAPI, HOST_URL, loginRequired, getCookie} from "../../assets/js/help_func";

function AdminBlogList() {
  ScrollToTop();
  loginRequired(JSON.parse(getCookie('uu_id')))

  const [events, setEvents] = useState(API.slice(0, 20));
  const [blog_edit, setBlog_edit] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
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
  const [msg, setMsg] = useState(messageType === 'success' ? "Awesome! the blog post was updated." : "Ooops..., It something went wrong. Try again");
  const [error, setError] = useState([])


  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetAPI(setEvents, HOST_URL()+"/api/v1/posts/admin/", requestOptions, true)

    console.log(error);
    // if (error) {
    //   setMsg(error)
    //   console.log(error);
    //   Object.entries(error).forEach((item, index)=> {
    //     const [key, value] = item;
    //     console.log(key, value, index)
    //   });
    // }
  })

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  return (
    <>
      <Header />
      <StatusMessage 
          setMessageType={setMessageType}
          messageType={messageType}
          message={msg}
      />

      <section className="container">
        <div className="">
          <div className="event-container">
            <HandleSearchAndTab>
              <div className="tabs">
                <span
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  <button onClick={(e) => setEvents(API)}>All</button>
                </span>
                {/* Kindly remove this DIV is there is need to filter by Tab */}

              </div>
              <div className="event-input">
                <div className="search_set">
                  <img
                    src="https://www.svgrepo.com/show/13682/search.svg"
                    alt=""
                  />
                  <input
                    className="eventt"
                    type="text"
                    name="name"
                    placeholder="Search Blog ..."
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                </div>

                <div className="filter">
                  <FilterArray 
                    options ={["Last 7days", "Last 14 days", "This month", "Last Month"]} 
                  />
                </div>

                <button
                  className="important-btn"
                  onClick={() => setOpenModal(true)}
                >
                  New Blog
                </button>
              </div>
            </HandleSearchAndTab>
          </div>
        </div>
        
        {/* List Blog Post */}
        <AdminBlog events={events} setBlog_edit={setBlog_edit} setEdit={setEdit} searchTerm={searchTerm}/>
        
      </section>
      <Footer />

      {/* MODALS */}
      <Create openModal={openModal} setOpenModal={setOpenModal} data={events} set_data={setEvents} setMessageType={setMessageType} messageType={messageType} setError={setError} error={error}/>

      <AdminBlogEditForm edit={edit} setEdit={setEdit} data={blog_edit} set_data={setEvents} setMessageType={setMessageType} messageType={messageType} setError={setError}/>

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
  .event-input {
    max-width: 675px;
    input {
      margin-bottom: 20px;
    }
    .important-btn{
      min-width: 160px;
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
