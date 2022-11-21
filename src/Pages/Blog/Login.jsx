import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Nav4Landing";
import ScrollToTop from "../../components/ScrollToTop";

import { reqOptions, fetAPI, HOST_URL, setCookie } from "../../assets/js/help_func";

const Login = () => {
  ScrollToTop();
  const [data, setData] = useState([])

  useEffect(()=>{
    if (data.access_token){
      let json_str = JSON.stringify(data)
      setCookie('uu_id', json_str, 30)
      window.location.href = '/blog/admin'

    }
  }, [data])

  return (
    <section className="formfd">
      <Navbar />
      <LoginContainer onSubmit={(form)=>{
        form.preventDefault()
        let requestOptions  = reqOptions('post', new FormData(form.target))
        fetAPI(setData, HOST_URL()+"/api/v1/auth/login/", requestOptions, true)
      }}>
        <h1>Sign in</h1>
        <div class="field">
          <input type="text" name="username" placeholder="John" />
          <span>Username or Email</span>
        </div>
        <div class="field">
          <input
            type="password"
            name="password"
            placeholder="John"
          />
          <span>Password</span>
        </div>
        <div className="reset-password">
          <Link to="/reset-password">Forget Password ?</Link>
        </div>
    
        <button type="submit" className="important-btn">Login</button>
      </LoginContainer>
    </section>
  );
};

export default Login;

const LoginContainer = styled.form`
  padding: 40px;
  background: #ffffff;
  border: 1px solid rgba(44, 51, 58, 0.2);
  border-radius: 5px;
  margin: 30px auto;
  @media (max-width: 540px) {
    padding: 40px 20px;
  }
  .new_here {
    p {
      text-align: center;
      margin-bottom: 30px;
      a {
        color: rgba(0, 131, 143, 1);
      }
    }
  }
  button {
    width: 100%;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 30px;
  }
  max-width: 470px;
  .reset-password {
    margin: 10px 0;
    text-align: right;
    a {
      text-align: right;
    }
  }

  .or_line {
    text-align: center;
    p {
      text-align: center;
      padding: 10px;
      &:before {
        content: "";
        display: inline-block;
        width: 48%;
        width: 100px;
        top: -4px;
        height: 1px;
        background: rgba(51, 51, 51, 0.15);
        position: relative;
        left: -10px;
      }
      &:after {
        content: "";
        display: inline-block;
        top: -4px;
        width: 48%;
        width: 100px;
        height: 1px;
        right: -10px;
        position: relative;
        background: rgba(51, 51, 51, 0.15);
      }
    }
  }

  // Control Label
  .field {
    position: relative;
    margin-top: 25px;
  }

  input {
    border: 0;
    border: 1px solid rgba(44, 51, 58, 0.5);

    border-radius: 5px;
    font-size: inherit;

    outline: none;
  }
  input:focus {
    border: 1px solid #00838f;
  }
  input::placeholder {
    color: transparent;
  }
  input:focus::placeholder {
    color: transparent;
  }
  input + span {
    position: absolute;
    top: 3px;
    left: 15px;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  input:not(:placeholder-shown) + span,
  input:focus + span {
    background: #ffffff;
    top: -10px;
    height: 20px;
    padding: 5px;
    margin: 0;
    color: #00838f;
    font-size: 14px;
    pointer-events: initial;
    left: 15px;
    line-height: 10px;
  }
`;
