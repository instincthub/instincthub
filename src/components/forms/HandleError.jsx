import React from 'react'
import { useNavigate } from 'react-router-dom';
import { spinBtn, printErr } from '../../assets/js/help_func';

/*
    Calling Component
    1. import { HandleError } from "../components/forms/HandleError";

    Class:
    <HandleError items={items} status={status} registerForm={document.querySelector('#regForm')} r_path={'/quiz'}/>

    Function:
    2. HandleError(items=items, status=status,registerForm=document.querySelector('#regForm'), r_path='/quiz')
*/ 

export const HandleError = ({status, items, registerForm, r_path}) => {
    const navigate = useNavigate()

    const serverTag = document.querySelector(".server_err");
    spinBtn(registerForm, "none", false); // spin button: parameter >> form, display and status

    if (items) {
        if (status === 400) {
            // console.log(items);
            if (items && (items.user || items.username)) {
                if (items.user[0] === "This field must be unique.") {
                    serverTag.style.display = "block";
                    serverTag.style.backgroundColor = "var(--DarkCyan)";
            
                    if (
                    document.location.pathname === "/register/details" ||
                    document.location.pathname === "/register/details/"
                    ) {
                    serverTag.querySelector("a button span").innerHTML =
                        "Take Assessment";
                    serverTag.querySelector("a").href = "/quiz/";
                    }
                    serverTag.querySelector("h3").textContent =
                    "We already have your details!";
                    navigate("#Socials");
                }
            } else {
            
            Object.entries(items).forEach((item, index) => {
                const [key, value] = item;
                printErr(key, value, index);
            });
            document.querySelector(".server_err").style.display = "none";
            }
        } else if (status === 200 || status === 201 || status === 202) {
            if (r_path !== null) {
            navigate(r_path);
            }
        } else {
            if (status === 401) {
            serverTag.style.display = "block";
            serverTag.querySelector("a").innerHTML = "";
            serverTag.querySelector("h3").textContent = items.detail;
            navigate("#Socials");
            }
        }
    }
  
}
