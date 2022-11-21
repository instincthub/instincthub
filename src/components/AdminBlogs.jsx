import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVGs from "../assets/svg/SVGs";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library

const EachBlog = (props) => {
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  const updateStates = (e) =>{
    // Used map key to get object
    for (const i in props.events) {
      if( props.events[i].id === Number(e.parentElement.dataset.key)){
        props.setBlog_edit(props.events[i])
      }
    }
    props.setEdit(true)
  }

  const eventsPerPage = 18;
  const pagesVisited = pageNumber * eventsPerPage;

  const pageCount = Math.ceil(props.events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  if (props.events) {
    return(
      <>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <Wrapper>
              {props.events.filter((event) => {
                  if (props.searchTerm === "")return event;
                  else if (event.title.toLowerCase().includes(props.searchTerm.toLowerCase()))return event;
                  else return ''
                })
                .slice(pagesVisited, pagesVisited + eventsPerPage)
                .map((event) => {


                return <EachAdminBlog 
                  className="eachAdminBlog" 
                  key={event.id}
                  >
                  <div 
                    className="clickable" 
                    data-key={event.id}
                    onClick={(e)=>updateStates(e.target)}>
                    <h1>{event.title}</h1>
                    <p>{event.overview}</p>
                  </div>

                  <div className="comments_dels">
                    <h2>{event.commentCount} </h2>
                    <div className="img_cod">
                      <svg width="25" height="24" viewBox="0 0 25 24"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1406 9.5H15.1406V3.5H9.14062V9.5H5.14062L12.1406 16.5L19.1406 9.5ZM11.1406 11.5V5.5H13.1406V11.5H14.3106L12.1406 13.67L9.97062 11.5H11.1406ZM5.14062 18.5H19.1406V20.5H5.14062V18.5Z" fill="#2C333A"/>
                      </svg>

                      <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0078 9V19H8.00781V9H16.0078ZM14.5078 3H9.50781L8.50781 4H5.00781V6H19.0078V4H15.5078L14.5078 3ZM18.0078 7H6.00781V19C6.00781 20.1 6.90781 21 8.00781 21H16.0078C17.1078 21 18.0078 20.1 18.0078 19V7Z" fill="#2C333A"/>
                      </svg>

                    </div>
                  </div>
                </EachAdminBlog>
              })}
            </Wrapper>
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
    </>
    );
  }
};

export default EachBlog;

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

let EachAdminBlog = styled.div`
  background: #ffffff;
  border: 1.5px solid #EAEAEA;
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 15px;

  &:hover .comments_dels h2,
  &:hover .comments_dels svg{
    display: inline-block;
  }

  .clickable {
    cursor: pointer;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      height: 85px;
      overflow: hidden;
    }
    p {
      margin-bottom: 15px;
      height: 106px;
      overflow: hidden;
    }
  }
  .img_cod {
    display: flex;
    justify-content: space-between;
    width: 35%;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .comments_dels {
    border-top: 1px solid #EAEAEA;
    padding: 10px 0;
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;
    min-height: 35px;
    h2 {
      display: none;
      font-style: normal;
      margin-bottom: 0px;
      font-weight: 600;
      margin-top: 5px;
      font-size: 16px;
      line-height: 19px;
      color: var(--DarkCyan);
    }
    svg{
      display: none;
      path{
        fill: var(--DarkCyan);
      }
    }
  }
`;
