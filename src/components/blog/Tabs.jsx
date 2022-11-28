import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SearchField from '../forms/SearchField';

import { reqOptions, fetchAPI, HOST_URL } from "../../assets/js/help_func";

function Tabs(props) {

    const [searchParams] = useSearchParams();
    const [categories, setCategories] = useState();
    const requestOptions  = reqOptions('get', null)

    useEffect(()=>{
        if (!categories) {// Category List
            fetchAPI(setCategories, HOST_URL()+"/api/v1/posts/post_category/", requestOptions, true);
        }
    // eslint-disable-next-line
    },[searchParams.get("cat")])

    if (categories) {
        return (
            <TabsSearch>
                <div className="tabs">
                <Link 
                    className={searchParams.get("cat")==='all' || searchParams.get("cat") === null ? 'tab active' : 'tab'} to={'?cat=all'}
                    onClick={()=> props.setTabsValues('all')}>
                    <button>All</button>
                </Link>

                {categories.results.map((option, index)=>{
                    return <div 
                        className={index >= 1 ? 'm_none tab_none' : ''}
                        onClick={()=> props.setTabsValues(option.id)}>
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

                <SearchField setSearchValues={props.setSearchValues}/>
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
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
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
