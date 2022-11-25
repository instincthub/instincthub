import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/images/svgs/search.svg'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { reqOptions, fetAPI, HOST_URL } from "../../assets/js/help_func";

function Tabs(props) {

    const [searchParams] = useSearchParams();
    const [categories, setCategories] = useState();
    const [searchValue, setSearchValue] = useState([]);
    const requestOptions  = reqOptions('get', null)

    useEffect(()=>{
        if (!categories) {// Category List
            fetAPI(setCategories, HOST_URL()+"/api/v1/posts/post_category/", requestOptions, true);
        }
        if (searchParams.get("cat")) { // Filter by categories
            fetAPI(props.setData, HOST_URL()+"/api/v1/posts/?cat="+searchParams.get("cat"), requestOptions, true)
        }
        if(searchValue){
            fetAPI(props.setData, HOST_URL()+"/api/v1/posts/"+searchValue, requestOptions, true)
        }
    // eslint-disable-next-line
    },[searchParams.get("cat"), searchValue])

    if (categories) {
        return (
            <TabsSearch>
                <div className="tabs">
                <Link className={searchParams.get("cat") ? 'tab' : 'tab active'} to={'?cat='}>
                    <button>All</button>
                </Link>

                {categories.results.map((option, index)=>{
                    return <div className={index >= 1 ? 'm_none tab_none' : ''}>
                        <Link 
                            to={'?cat='+option.id} 
                            className={Number(searchParams.get("cat")) === option.id ? 'tab active' : 'tab'}
                            key={option.id}
                            >
                            <button className="btn" data-id={option.id}> {option.title} </button>
                        </Link>
                    </div>
                })}
                </div>
                <div className="event-input">
                {/* <FilterBy selected={selected} setSelected={setSelected} /> */}
                <div className="search_set">
                    <img
                    src={searchIcon}
                    alt="Search Icon"
                    />
                    <input
                    className="eventt"
                    type="text"
                    name="name"
                    placeholder="Search Blog ..."
                    onChange={(e) => {
                        setSearchValue("?search="+e.target.value)
                    }}
                    />
                </div>
                </div>
            </TabsSearch>
        );
    }
}

export default Tabs;

const TabsSearch = styled.section`
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
      .event-select {
        width: 20%;
      }
      .input_search{
        max-width: 400px;
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
    @media(min-width: 768px){
        width: 80%;
    }
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;
      padding: 5px 10px;
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
  @media(max-width: 500px){
    .m_none{
        display: none !important;
    }
  }
  @media(max-width: 820px){
    .tab_none{
        display: none !important;
    }
  }
  @media(max-width: 1112px){
    .mid_none{
        display: none !important;
    }
  }
`;
