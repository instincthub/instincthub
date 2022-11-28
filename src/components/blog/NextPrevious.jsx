import { React } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NextPrevious = (props) => {
    
    return (
        <NextPreviousDiv className="next_prev" id="nextPrevious" ref={props.refs}>
            {
                props.data.previous_post ?
                    <div className="prev_btn">
                        <Link to={"blog/"+props.data.previous_post.slug} className="next_prev_btn">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66927 1.83333L3.08594 6.41667L7.66927 11L6.7526 12.8333L0.335938 6.41667L6.7526 0L7.66927 1.83333Z" fill="white"/>
                        </svg>

                        </Link>
                        <div className="previous">
                            <p>Previous</p>
                            <h3>{props.data.previous_post.title}</h3>
                        </div>
                    </div>
                :''
            }
            { 
                props.data.next_post ? 
                    <div className="next_btn">
                        <div className="next">
                            <p>Next</p>
                            <h3>{props.data.next_post.title}</h3>
                        </div>
                        <Link 
                            to={'blog/'+props.data.next_post.slug}  
                            className="next_prev_btn">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.330731 1.83333L4.91406 6.41667L0.330731 11L1.2474 12.8333L7.66406 6.41667L1.2474 0L0.330731 1.83333Z" fill="white"/>
                        </svg>

                        </Link>
                    </div> 
                : ''
            }
        </NextPreviousDiv>
    )
}

export default NextPrevious;


const NextPreviousDiv = styled.div`
    margin-top: 50px;
    flex-wrap: nowrap;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
    .next_prev_btn {
        padding: 5px 15px 3px 15px;
        margin: 25px 0 10px 0;
        border-radius: 5px;
        border: 0;
        background-color: unset;
        font-family: var(--Montserat);
        outline: 0;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        background-color: var(--DarkCyan);
        color: var(--White);
        border: 2px solid var(--DarkCyan);
        transition: 0.2s;
        height: 40px;
        width: 40px;
        &:hover{
            background-color: var(--White);
            color: var(--DarkCyan);
            border: 2px solid var(--DarkCyan);

            svg path{
                fill: var(--DarkCyan);
            }
        }
    }
    h3 {
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 0px
    }
    p {
        font-size: 12px;
        line-height: 0px;
    }
    .prev_btn .previous{
        margin-left: 20px;
    }
    .next_btn .next{
        margin-right: 20px;
    }
    .prev_btn .previous,
    .next_btn .next{
        position: relative;
        top: 26px;
    }
    .prev_btn,
    .next_btn {
        display: flex;
        width: 100%;
        @media(min-width: 768px){
            max-width: 400px;
        }
        .next{
            margin-left: auto;
        }
        .previous{
            margin-right: auto;
        }
    }
    button {
        margin: 0 15px;
        margin-top: 10px;
        height: 45px;
    }
    .next_btn {
        p {
        text-align: right;
        }
    }

`;