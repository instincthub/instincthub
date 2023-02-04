import {React, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {getCookie, fetchAPI, HOST_URL, setCookie, reqOptions } from '../../assets/js/help_func';

/*
    Calling Component
    1. import { LoginRequired } from '../components/forms/LoginRequired';
    2. LoginRequired()
*/ 
export const LoginRequired = () => {
    const [data, setData] = useState(true)

    useEffect(()=>{
        if (!data) {
            let redirect_url = `/login/?next=${window.location.pathname + window.location.search}`;
            navigate(redirect_url);
        }

    },[data])

    const navigate = useNavigate()
    // console.log(status)
    

    // If access token exist, verify from server if access and ID is valid.
    fetch( `${HOST_URL()}/api/v1/auth/verify_token/?access_token=${getCookie("access")}&user_id=${getCookie("u_id")}`,
    reqOptions("GET")
    )
    .then((response) => response.text())
    .then((result) => {
        setData(JSON.parse(result).status)
    })
    .catch((error) => console.log("error", error));

//   return data
}
