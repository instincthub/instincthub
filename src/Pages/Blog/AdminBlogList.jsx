import { React, useState } from "react";
// import JsonData from '../Mock-API.json'
import API from "../../json/D4Blog.json";
import AdminBlog from "../../components/AdminBlogs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import Create from "../../components/BlogCreate";
import BlogEdit from "../../components/BlogEdit";
import Header from "../../components/navbar/Header";
import Footer from "../../components/Footer";
import FilterArray from "../../components/FilterArray";
import { reqOptions, fetAPI, HOST_URL, loginRequired, getCookie} from "../../assets/js/help_func";

function AdminBlogList() {

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


  useState(()=>{
    let requestOptions  = reqOptions('get', null)
    fetAPI(setEvents, HOST_URL()+"/api/v1/posts/", requestOptions, true)
  })

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  const eventsPerPage = 18;
  const pagesVisited = pageNumber * eventsPerPage;

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "")return event;
      else if (event.title.toLowerCase().includes(searchTerm.toLowerCase()))return event;
      else return ''
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      return (
        <AdminBlog
          data={event}
          edit={setEdit}
          blog_edit={setBlog_edit}
        />
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <>
      <Header />

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
                <div class="search_set">
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

                <FilterArray 
                  options ={["Last 7days", "Last 14 days", "This month", "Last Month"]} 
                />

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
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <Wrapper>{displayEvents}</Wrapper>
          </div>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </section>
      <Footer />

      {/* MODALS */}
      <Create open={openModal} onClose={() => setOpenModal(false)} />
      <BlogEdit open={edit} onClose={() => setEdit(false)} blog_edit={blog_edit} set_data={setEvents}/>
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
let Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .eachAdminBlog {
    width: 49%;
  }

  @media (max-width: 400px) {
    .eachAdminBlog {
      width: 100%;
    }
  }
  @media (min-width: 720px) {
    .eachAdminBlog {
      width: 32%;
    }
  }
  @media (min-width: 900px) {
    .eachAdminBlog {
      width: 23%;
    }
  }
  @media (min-width: 1200px) {
    .eachAdminBlog {
      width: 19%;
    }
  }
  @media (min-width: 1380px) {
    .eachAdminBlog {
      width: 16%;
    }
  }
`;
