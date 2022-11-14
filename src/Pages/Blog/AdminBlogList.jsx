import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import API from "../../json/D4Blog.json";
import AdminBlog from "../../components/AdminBlogs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import Images from "../../assets/images/Images";
import styled from "styled-components";
import Create from "../../components/BlogCreate";
import BlogEdit from "../../components/BlogEdit";
import Header from "../../components/navbar/Header";
import Footer from "../../components/Footer";

function AdminBlogList() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");

  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal
  const [edit, setEdit] = useState(false); // state for Modal
  const [selected, setSelected] = useState("Filter");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  const handleOnchange = (val) => setvalue(val);
  // const [ API, setData ] = useState(API)
  const eventsPerPage = 16;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "") {
        return event;
      } else if (event.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const { id, title, category, author, date } = event;

      return (
        <AdminBlog
          key={id}
          commentCount={id}
          title={title}
          edit={() => setEdit(true)}
          encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
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
                <div>
                  {/* <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Community")}
                    >
                      Community
                    </button>
                  </span>

                  <span
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Education")}
                    >
                      Education
                    </button>
                  </span>
                  <span
                    className={`tab ${checkActive(4, "active")}`}
                    onClick={() => handleClick(4)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Security")}
                    >
                      Security
                    </button>
                  </span>
                  <span
                    className={`tab ${checkActive(5, "active")}`}
                    onClick={() => handleClick(5)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Digital")}
                    >
                      Digital
                    </button>
                  </span> */}
                </div>
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

                <FilterBy selected={selected} setSelected={setSelected} />

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
      <BlogEdit open={edit} onClose={() => setEdit(false)} />
    </>
  );
}

export default AdminBlogList;

const FilterBy = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "Last Month"];

  return (
    <div className="select_me">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly className="input_drop" />
        {/* {selected} */}
        <img
          src="https://www.svgrepo.com/show/379863/chevron-down.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
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
