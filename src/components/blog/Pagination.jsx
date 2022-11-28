import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { reqOptions, fetchAPI, HOST_URL } from "../../assets/js/help_func";

function Pagination(props) {
    const [searchParams] = useSearchParams();

    
    const [limit] = useState(10)
    const [pages, setPages] = useState()

    
    const [offsetFrom, setOffsetFrom] = useState(0);
    const [offsetTo, setOffsetTo] = useState(5);
    const [rangeLimit] = useState(5);
   
   
    const requestOptions  = reqOptions('get', null)
    const nextOffset = new URLSearchParams(props.data.next).get('offset')
    const previousOffset = new URLSearchParams(props.data.previous).get('offset')
    let offset_params = Number(searchParams.get('offset'))/props.limit;


    useEffect(() =>{

        let tabs = props.tabsValues ? props.tabsValues : '';
        let search = props.searchValues ? props.searchValues : '';
        
        // Fetch data whenever there is new search, tab and pagination
        if (offset_params || props.tabsValues || props.searchValues) {
            fetchAPI(props.setData, HOST_URL()+`${props.urlPath}?cat=${tabs}&search=${search}&limit=${props.limit}&offset=${searchParams.get('offset')}`, requestOptions, true, false, false)

            if (offset_params >= rangeLimit) {
                setOffsetFrom(Number(offset_params)-2)
                setOffsetTo(Number(offset_params)+3)
            }
            else{
                setOffsetFrom(0)
                setOffsetTo(5)
            }
        }
        else fetchAPI(props.setData, HOST_URL()+`${props.urlPath}?limit=`+props.limit, requestOptions, true);

        // Round up and create array.
        if (props.data.count)  setPages([...Array(Math.ceil(props.data.count/props.limit)).keys()]);
        

        // eslint-disable-next-line
    }, [searchParams.get('offset'), props.data.count, props.tabsValues, props.searchValues])

    

    if (pages) {
        return (
            <PaginationUl 
                className="pagination_buttons" 
                role="navigation" 
                aria-label="Pagination"
                onClick={()=>{
                    props.goToViolation() // scroll to top
                }} 
                >
                
                {/* Previous Btn */}
                <div  className="pag_nav_wrapper">
                    <li className={offset_params && props.data.previous != null? "pagination_first" : "pagination_first deactivate"}>
                        <Link to={`?offset=0`} >First</Link>
                    </li>
                    <li className={(offset_params) === pages[0] || props.data.previous === null ? "previous paginationDisabled deactivate" : "previous paginationDisabled"}
                        >
                        <Link className="previousButton " to={`?offset=${previousOffset ? previousOffset : 0}`}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66927 1.83333L3.08594 6.41667L7.66927 11L6.7526 12.8333L0.335938 6.41667L6.7526 0L7.66927 1.83333Z" fill="white"/>
                        </svg>
                        </Link>
                    </li>
                </div>

                {/* Inner Number */}
                {pages.slice(offsetFrom,offsetTo).map((option, index)=>{
                    return<li key={option} className={offset_params === option ? "pagination_active number" : "number"} data-value={option}
                     >
                        <Link to={`?offset=${option*props.limit}`}>{option+1}</Link>
                    </li>
                })}

                {/* Next Btn */}
                <div  className={props.data.next ? "pag_nav_wrapper" : "pag_nav_wrapper deactivate"}>
                    <li className={(offset_params) === pages.length-1 ? "next paginationDisabled deactivate" : "next paginationDisabled"}>
                        <Link to={`?offset=${nextOffset}`} className="nextButton" 
                            >
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.330731 1.83333L4.91406 6.41667L0.330731 11L1.2474 12.8333L7.66406 6.41667L1.2474 0L0.330731 1.83333Z" fill="white"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={offset_params === pages.length-1 ? "pagination_last deactivate" : "pagination_last"}>
                        <Link to={`?offset=${(pages.length-1) * props.limit}`}>Last</Link>
                    </li>
                </div>
            </PaginationUl>
        );
    }
}

export default Pagination;


const PaginationUl = styled.ul `
    display: flex;
    justify-content: space-between;
    max-width: 452px;
    margin: 50px auto 0px auto;

    .pag_nav_wrapper{
        display: flex;
    }
    .deactivate{
        opacity: .6;
        a{
            pointer-events: none;
        }
    }
    .next a,
    .previous a {
        background-color: #00838f;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        padding: 10px 15px 3px 15px;
        height: 40px;
        width: 40px;
        &:hover {
            background: #00838f99;
        }
    }
    .next{
        margin-right: 10px;
    }
    .previous{
        margin-left: 10px;
    }
    .pagination_first a,
    .pagination_last a{
        height: 40px;
        width: 64px;
        border: 1px solid #00838f;
        border-radius: 5px;
        color: #00838f;
        font-family: 'Nunito' !important;
        padding: 10px 15px 3px 15px;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
    }
    @media(max-width: 500px) {
        .pagination_btn_mobile{
        display: none;
        }
    }
    li a{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.018em;
        padding: 5px 10px;
        margin: 3px;
        cursor: pointer;
        display: inline-block;
        padding: 8px 15px 3px 15px;
        position: relative;

        &:hover {
        background: #f3f3f3;
        
        }
        svg{
            position: absolute;
            top: 14px;
            left: 15px;
        }
    }
    .pagination_active {
        font-weight: 600;
        border-bottom: 2px solid #00838f;
    }

`;