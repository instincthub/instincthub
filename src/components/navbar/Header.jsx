import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images/Images";
import DesktopMulti from "./DesktopMulti";
import styled from "styled-components";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState("navlinks");
//   const [blur, setBlur] = useState("backgroundMask");

//   const NavToggle = () => {
//     showMenu === "navlinks"
//       ? setShowMenu("navlinks menudrop show")
//       : setShowMenu("navlinks");

//     blur === "backgroundMask"
//       ? setBlur("backgroundMask placeblur")
//       : setBlur("backgroundMask");
//   };
//   return (
//     <header>
//       <nav className="container">
//         <a href="/" className="logo">
//           <img src={Images.logo} alt="" />
//         </a>
//         {/* <Navbar /> */}
//         <div className={blur} onClick={NavToggle}>
//           <ul className={showMenu}>
//             {menuItems.map((menu, index) => {
//               const depthLevel = 0;
//               return (
//                 <MenuItems items={menu} key={index} depthLevel={depthLevel} />
//               );
//             })}
//             <div className="sign_up" id="mobile">
//               <Link to="/"> <button className="outlined-btn">Login</button> </Link>
//               <Link to="/"> <button className="important-btn">Get Started</button> </Link>
//             </div>
//           </ul>
//         </div>

//         <div className="sign_up" id="screen">
//           <Link to="/"> <button className="outlined-btn">Login</button> </Link>
//           <Link to="/"> <button className="important-btn">Get Started</button> </Link>
//         </div>
//         <div
//           className="hamburger"
//           onClick={NavToggle}
//           // onMouseMove={NavToggle}
//         >
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>
//       </nav>
//     </header>
//   );
// };

const Header = () => {
  const [showMenu, setShowMenu] = useState("navlinks");
  const [blur, setBlur] = useState("backgroundMask");
  const [openModal, setOpenModal] = useState(false);

  const NavToggle = () => {
    showMenu === "navlinks"
      ? setShowMenu("navlinks menudrop show")
      : setShowMenu("navlinks");

    blur === "backgroundMask"
      ? setBlur("backgroundMask placeblur")
      : setBlur("backgroundMask");
  };
  return (
    <Container>
      <DesktopMulti open={openModal} onClose={() => setOpenModal(false)} />
      <header>
        <nav className="container">
          <div className="appsTrue">
            <div className="apps">
              {/* <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <title>Products</title>

                  <path d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" />

                  <path d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z" />

                  <path d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" />

                  <path d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z" />

                  <path d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" />

                  <path d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z" />

                  <path d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" />

                  <path d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z" />

                  <path d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" />
                </g>
              </svg> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"
                ></path>
              </svg>

              <ul className="products">
                <div>
                  <li>
                    <img src="" alt="" />
                    <Link to="/products/individual">Individuals</Link>
                  </li>
                  <li>
                    <Link to="/products/kidscancode/">Kids Can Code</Link>
                  </li>

                  <li>
                    <Link to="/products/enterprise/">Enterprises</Link>
                  </li>
                  <li>
                    <a href="https://tech.instincthub.com/">Tech Diversity</a>
                  </li>
                </div>
              </ul>
            </div>
            <a href="/" className="logo">
              <img src={Images.logo} alt="" />
            </a>
          </div>

          {/* ***Perform all multi in this ul */}
          <BlurBackground>
            <Multi className={showMenu}>
              <li>
                <div
                  className="actual main_target"
                  onMouseEnter={() => setOpenModal(false)}
                  onClick={() => setOpenModal(true)}
                  // onClick={() => setOpenModal(false)}
                >
                  <a href="https://skills.instincthub.com/"> Courses</a>
                </div>

                {/* <ul className="sub_bro">
                  <li>
                    <div className="actual">Course Library</div>
                    <ul>
                      <h5>HTML</h5>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                  </li>
                  <li>
                    <b>Track Library +++</b>
                    <ul>
                      <li>Hello Bro</li>
                      <li>Dummy Here</li>
                      <li>Be of good </li>
                    </ul>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/about/career/">Career</Link>
              </li>
              <li>
                <Link to="/products/pricing/">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/about/contact/">Contact</Link>
              </li>
              <div className="sign_up" id="mobile">
                {/* <Link to="/login/"> */}
                <a href="https://skills.instincthub.com/accounts/login/">
                  <button className="outlined-btn">Login</button>
                </a>
                {/* </Link> */}
                {/* <Link to="/"> */}
                <a href="https://skills.instincthub.com/students/register/">
                  <button className="important-btn">Get Started</button>
                </a>
                {/* </Link> */}
              </div>
            </Multi>
          </BlurBackground>

          {/* DESKTOP SIGN-UP */}
          <div className="sign_up" id="screen">
            {/* <Link to="/login/"> */}
            <a href="https://skills.instincthub.com/accounts/login/">
              <button className="outlined-btn">Login</button>
            </a>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <a href="https://skills.instincthub.com/students/register/">
              <button className="important-btn">Get Started</button>
            </a>
            {/* </Link> */}
          </div>
          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={NavToggle}
            // onMouseMove={NavToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
      {/* <DesktopCourses>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere
          qui cumque veritatis sit itaque! Id nesciunt magni necessitatibus eius
          impedit quaerat, nam repellendus obcaecati delectus, pariatur
          voluptatum aliquam incidunt.
        </p>
      </DesktopCourses> */}
    </Container>
  );
};

export default Header;

let Container = styled.section`
  .apps {
    position: realtive;
    #SVGRepo_iconCarrier rect {
      fill: #000000;
      &:hover {
        fill: #fff;
      }
    }
    &:hover {
      ul {
        display: block;
      }
    }
    svg {
      width: 35px;
      height: 35px;
      cursor: pointer;
      margin-top: 2px;
      border-radius: 50px;
      margin-right: 15px;
      padding: 5px;
      transition: 0.3s;
      &:hover {
        background-color: rgba(0, 131, 143, 0.1);
        fill: var(--DarkCyan);
      }
    }
    ul {
      // border: 1px solid yellow;
      display: none;
      position: absolute;
      top: 50px;
      div {
        margin-top: 30px;
        background-color: #fff;
        box-shadow: 0px -2px 8px rgb(0 0 0 / 5%), 0px 2px 8px rgb(0 0 0 / 5%);

        padding: 10px;
        width: 200px;
      }
    }
  }
  .logo {
    margin-top: 5px;
  }
  .appsTrue {
    display: flex;
    justify-content: space-between;
  }
`;
let DesktopCourses = styled.section`
  position: absolute;
  top: 80px;
  background: pink;
  header {
    z-index: 1000;
  }
`;

let Multi = styled.ul`
  .actual {
    font-weight: 500;
    cursor: pointer;
    &:after {
      content: url(${Images.chevronDown.default});
      /* content: url(../src/assets/images/svgs/chevron_down.svg); */
      display: inline-block;
      width: 35px;
      position: absolute;
      right: 0;
      height: 35px;
    }
  }

  @media (min-width: 768px) {
    .actual:after {
      width: 0;
      right: -5px;
      top: 3px;
    }
    .sub_bro {
      display: none !important;
    }
  }
  @media (max-width: 768px) {
    .sub_bro {
      // padding: 25px;
      li {
        border: 0 !important;
      }
      h5 {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        margin: 0;
        margin-top: 40px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
  li {
    // margin: 25px 0;
    text-align: left;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 500;

    position: relative;
    opacity: 0.9;
    transition: 0.4s;
    margin-right: 10px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(79.85deg, #009ba2 -20.87%, #bc658d 87.74%);
      transition: all 0.4s;
      bottom: 0;
    }
    &:hover::before {
      opacity: 1;
      width: 100%;
    }
    &:hover {
      font-weight: 700;
      // color: linear-gradient(79.85deg, #009ba2 -20.87%, #bc658d 87.74%);
    }
    &:active {
      border-bottom: #00838f;
    }
    &:hover > .sub_bro {
      display: inline-block;
      height: 269px;
      overflow: auto;
    }
    ul {
      width: 100%;
      margin-top: 20px;
      display: none;
      background: #f3f3f3;

      li {
        width: 100%;
        padding: 10px;
        &:before {
          display: none;
        }
        ul {
          display: none;
        }
        &:hover {
          background: #f2f2f2;
        }
        &:hover > ul {
          display: initial;
        }
        &:focus-within > ul {
          display: initial;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    #mobile {
      display: none;
    }
  }
`;
let BlurBackground = styled.div`
  @media (max-width: 768px) {
    // position: absolute;
    // background: #ffffff;
    // padding: 30px 0;
    // top: 80px;
    // left: 0;
    // width: 100%;
    li {
      padding: 10px 15px;
      border-bottom: 1px solid #2c333a26;
      &:before {
        display: none;
      }
    }
    #mobile {
      max-width: 350px;
      padding: 0 20px;
      margin: 0 auto;
    }
    button {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-right: 20px;
  }
  @media (min-width: 1028px) {
    width: 45% !important;
  }
`;
