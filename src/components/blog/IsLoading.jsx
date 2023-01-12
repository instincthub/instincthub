import React from "react";
import styled from "styled-components";

const IsLoading = (props) => {
    console.log(Array.from(Array(10).keys()));
    return ( 
        <IsLoadingTag>
            {
                Array.from(Array(10).keys()).map(()=>{
                    return <div class="card is-loading">
                        <div class="image"></div>
                            <div class="content">
                                <h2></h2>
                                <p></p>
                            </div>
                    </div>
                })
            }
        </IsLoadingTag>
     );
}
 
export default IsLoading;

const IsLoadingTag = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #ddd;
    min-height: 100vh;
    padding: 30px;

    .card {
        margin: 10px;
        width: 100%;
        /* height: 300px; */
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    }

    .content {
        padding: 20px 30px;
    }

    .image,
    h2,
    p {
        background: #eee;
        background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
        border-radius: 5px;
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
    }

    .image {
        height: 200px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    h2 {
        height: 30px;
    }

    p {
        height: 70px;
    }

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
    @media (min-width: 768px) {
        .card{
            width: 45%;
        }
    }
    @media (min-width: 1024px) {
        .card{
            width: 30%;
        }
    }
`;