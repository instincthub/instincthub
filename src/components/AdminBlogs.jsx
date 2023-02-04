import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import Pagination from "./blog/Pagination";

const EachBlog = (props) => {
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  const updateStates = (e) =>{
    // Used map key to get object
    for (const i in props.events.results) {
      if( props.events.results[i].id === Number(e.parentElement.dataset.key)){
        props.setBlogEdit(props.events.results[i])
      }
    }
    props.setEdit(true)
  }


  if (props.events.results) {
    return(
      <>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <Wrapper>
              {props.events.results.map((event) => {
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
                      <Link to={'/blog/'+event.slug} target="blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V7H5v12Zm7-2q-2.05 0-3.662-1.113Q6.725 14.775 6 13q.725-1.775 2.338-2.887Q9.95 9 12 9t3.663 1.113Q17.275 11.225 18 13q-.725 1.775-2.337 2.887Q14.05 17 12 17Zm0-1.5q1.4 0 2.55-.663 1.15-.662 1.8-1.837-.65-1.175-1.8-1.838Q13.4 10.5 12 10.5t-2.55.662Q8.3 11.825 7.65 13q.65 1.175 1.8 1.837 1.15.663 2.55.663Zm0-2.5Zm0 1.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 11.5 12 11.5t-1.062.438Q10.5 12.375 10.5 13t.438 1.062q.437.438 1.062.438Z"/></svg>
                      </Link>
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
    width: 60%;
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
