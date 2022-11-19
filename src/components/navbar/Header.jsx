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
          <a href="/" className="logo">
            <img src={Images.logo} alt="" />
          </a>

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
                  Courses
                </div>

                <ul className="sub_bro">
                  <li>
                    <div className="actual">Course Library</div>
                    <ul>
                      <h5>Web Development</h5>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Python</li>
                      <h5>Designs</h5>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Python</li>
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
                </ul>
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
                <Link to="/login">
                  <button className="outlined-btn">Login</button>
                </Link>
                <Link to="/">
                  <button className="important-btn">Get Started</button>
                </Link>
              </div>
            </Multi>
          </BlurBackground>

          {/* DESKTOP SIGN-UP */}
          <div className="sign_up" id="screen">
            <Link to="/login/">
              <button className="outlined-btn">Login</button>
            </Link>
            <Link to="/">
              <button className="important-btn">Get Started</button>
            </Link>
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

let Container = styled.section``;
let DesktopCourses = styled.section`
  position: absolute;
  top: 80px;
  background: pink;
`;

let Multi = styled.ul`
  .actual {
    font-weight: 500;
    &:after {
      content: url(https://www.svgrepo.com/show/344644/chevron-down.svg);
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
