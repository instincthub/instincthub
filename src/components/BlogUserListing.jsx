import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import API from "../json/D4Blog.json";
import EachBlog from "./EachBlog";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import Images from "../assets/images/Images";
import styled from "styled-components";

function BlogUserListing() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("Filter");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [isActive, setActive] = useState("normal_tab");

  const toggleClass = () => {
    isActive === "normal_tab"
      ? setActive("normal_tab add_tape")
      : setActive("normal_tab");
  };

  // const [ API, setData ] = useState(API)
  const eventsPerPage = 6;
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
        <EachBlog
          key={id}
          link="slug"
          blogimg={Images.blog1}
          authorimg={Images.img1}
          authorname={author}
          category={category}
          date="October 5, 2022"
          title={title}
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

              <span
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
                <button className="btn" onClick={() => filterEvents("Digital")}>
                  Digital
                </button>
              </span>
            </div>
            <div className="event-input">
              <FilterBy selected={selected} setSelected={setSelected} />
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
            </div>
          </HandleSearchAndTab>
        </div>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <div className="threecard_grid blog_control">{displayEvents}</div>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <div className="threecard_grid blog_control">{displayEvents}</div>
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
          <div className="threecard_grid blog_control">{displayEvents}</div>
        </div>
        <div className={`panel ${checkActive(4, "active")}`}>
          <div className="threecard_grid blog_control">{displayEvents}</div>
        </div>
        <div className={`panel ${checkActive(5, "active")}`}>
          <div className="threecard_grid blog_control">{displayEvents}</div>
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
  );
}

export default BlogUserListing;

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
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .event-input {
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
      width: 40%;
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
