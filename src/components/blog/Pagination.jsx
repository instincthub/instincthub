import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { reqOptions, fetAPI, HOST_URL, goToIdElement } from "../../assets/js/help_func";

function Pagination(props) {
    const [searchParams] = useSearchParams();
    const violationRef = useRef(null);

    const [pages, setPages] = useState()
    const [limit] = useState(10)
    const [offset, setOffset] = useState(searchParams.get('offset'));
    const [rangeLimit, setRangeLimit] = useState(5);
    const [negRangeLimit, setNegRangeLimit] = useState(0);
   
    const requestOptions  = reqOptions('get', null)
    const nextOffset = new URLSearchParams(props.data.next).get('offset')
    const previousOffset = new URLSearchParams(props.data.previous).get('offset')

    const RangeOffset = (option) =>{
        if(rangeLimit <= (option+1)){
            setRangeLimit(rangeLimit+5)
            setNegRangeLimit(negRangeLimit+4)
        }
        else if (option === pages.length) {
            setRangeLimit(pages.length)
            setNegRangeLimit(pages.length-5)
        }
        else if(limit+1 === (option+1)){
            setRangeLimit(option+2)
            setNegRangeLimit(option-2)
            alert(option, rangeLimit)
        }
        else if(rangeLimit > (option+1)){
            setRangeLimit(5)
            setNegRangeLimit(0)
        }
    }

    const handleNav = (item) =>{
        setOffset(item)
    }


    useEffect(() =>{

        if (searchParams.get('offset')) {
            fetAPI(props.setData, HOST_URL()+`/api/v1/posts/?limit=${limit}&offset=${searchParams.get('offset')}`, requestOptions, true, false, false)
        }
        
        // Round up and create array.
        setPages([...Array(Math.ceil(props.data.count/limit)).keys()])
        
        // Add active css class to page current number
        if (offset === null && document.querySelector('.number')) {
            document.querySelector('.number').classList.add('pagination_active');
        }

        // eslint-disable-next-line
    }, [searchParams.get('offset'), props.data.count])

    

    if (pages) {
        return (
            <PaginationUl 
                className="pagination_buttons" 
                role="navigation" 
                aria-label="Pagination"
                onClick={()=>props.goToViolation()}
                >
                
                {/* Previous Btn */}
                <div  className={props.data.previous === null ? "pag_nav_wrapper deactivate" : "pag_nav_wrapper"}>
                    <li className="pagination_first"><Link to={`?offset=0`} 
                        onClick={()=> {
                            RangeOffset(0)
                        }}>First</Link></li>
                    <li className="previous paginationDisabled" 
                        onClick={()=> {
                            handleNav(nextOffset)
                            RangeOffset((previousOffset/10)-1)
                        }}>
                        <Link className="previousButton " to={`?offset=${previousOffset ? previousOffset : 0}`}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66927 1.83333L3.08594 6.41667L7.66927 11L6.7526 12.8333L0.335938 6.41667L6.7526 0L7.66927 1.83333Z" fill="white"/>
                        </svg>
                        </Link>
                    </li>
                </div>

                {/* Inner Number */}
                {pages.slice(negRangeLimit,rangeLimit).map((option, index)=>{
                    return<li key={option} className={Number(searchParams.get('offset'))/limit === option ? "pagination_active number" : "number"} data-count={option}
                    onClick={(e)=>RangeOffset(option)} >
                        <Link to={`?offset=${option*limit}`}>{option+1}</Link>
                    </li>
                })}
                <li className="break"><Link to="#">...</Link></li>

                {/* Next Btn */}
                <div  className={props.data.next === null ? "pag_nav_wrapper deactivate" : "pag_nav_wrapper"}>
                    <li className="next">
                        <Link to={`?offset=${nextOffset}`} className="nextButton" 
                            onClick={()=> {
                                handleNav(nextOffset)
                                RangeOffset(nextOffset/10)
                            }}>
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.330731 1.83333L4.91406 6.41667L0.330731 11L1.2474 12.8333L7.66406 6.41667L1.2474 0L0.330731 1.83333Z" fill="white"/>
                            </svg>
                        </Link>
                    </li>
                    <li className="pagination_last" onClick={ ()=> RangeOffset(pages.length) }>
                        <Link to={`?offset=${(pages.length-1) * limit}`}>Last</Link>
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
    .pag_nav_wrapper.deactivate{
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