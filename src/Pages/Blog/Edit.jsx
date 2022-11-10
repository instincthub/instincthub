import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SVGs from "../../assets/svg/SVGs";

/**
 *  *
 *  todo
 *  *
 *  Lets Create a from * All input should slide up * */
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

const Master = () => {
  const [selected, setSelected] = useState("Category");
  const [author, setAuthor] = useState("Writer");
  return (
    <Main>
      <form action="" onSubmit={handleFormSubmit}>
        <h3>Edit Blog</h3>

        <img
          src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="featured_pic"
        />

        <div class="field">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="John"
            value="Impact of CyberSecurity"
          />
          <span>Blog Title</span>
        </div>
        <div class="">
          <textarea name="" placeholder="Description"></textarea>
          <span></span>
        </div>
        <div class="field">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="John"
            value="Security"
          />
          <span>Category</span>
        </div>
        <div class="field">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="John"
            value="Noah"
          />
          <span>Writer</span>
        </div>

        <div class="field">
          <input
            type="url"
            name="title"
            id="title"
            placeholder="John"
            value="https://unsplash.com/photos/04X1Yp9hNH8"
          />
          <span>Link</span>
        </div>

        <button className="important-btn" type="submit">
          Publish
        </button>
      </form>
    </Main>
  );
};

const Details = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandlingOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Master />

        <img
          className="close-btn"
          src="https://www.svgrepo.com/show/315851/close.svg"
          alt="c"
          onClick={onClose}
        />
      </ModalContainer>
    </HandlingOverlay>
  );
};

// const Category = ({ selected, setSelected }) => {
//   const [isActive, setIsActive] = useState(false);
//   const options = ["Community", "Education", "Security", "Marketing"];

//   return (
//     <div className="select_me">
//       <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
//         <input type="text" value={selected} readOnly className="input_drop" />
//         {/* {selected} */}
//         <img
//           src="https://www.svgrepo.com/show/379863/chevron-down.svg"
//           alt=""
//         />
//       </div>
//       {isActive && (
//         <div className="select_content">
//           {options.map((option) => (
//             <div
//               className="select_items"
//               onClick={(e) => {
//                 setSelected(option);
//                 setIsActive(false);
//               }}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// const Author = ({ selected, setSelected }) => {
//   const [isActive, setIsActive] = useState(false);
//   const options = ["Demilade", "Noah", "Victoria", "Toheeb"];

//   return (
//     <div className="select_me">
//       <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
//         <input type="text" value={selected} readOnly className="input_drop" />
//         {/* {selected} */}
//         <img
//           src="https://www.svgrepo.com/show/379863/chevron-down.svg"
//           alt=""
//         />
//       </div>
//       {isActive && (
//         <div className="select_content">
//           {options.map((option) => (
//             <div
//               className="select_items"
//               onClick={(e) => {
//                 setSelected(option);
//                 setIsActive(false);
//               }}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

/**
 * Do not touch here !!!
 *
 */
const HandlingOverlay = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media (max-width: 488px) {
    padding: 20px !important;
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

const ModalContainer = styled.div`
  position: relative;
  max-width: 690px;
  margin: 0px auto;

  .custom_uploader {
    position: relative;
    height: 230px;
    display: flex;
    background: #f9f9f9;
    border: 1.5px dashed rgba(44, 51, 58, 0.4);
    border-radius: 5px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    .tag_upload {
      margin-bottom: 30px;
      position: relative;
    }
    label {
      display: block;

      position: static;
      width: 200px;
      background: var(--DarkCyan);
      height: 50px;
      align-items: center;
      margin: 0 auto;
      text-align: center;
      color: var(--White);
      border-radius: 5px;
      font-weight: 500;
      font-size: 16px;
      line-height: 50px;
    }
    .cloud {
      text-align: center;
      position: static;
      width: 50px;
      height: 50px;
    }
    input {
      opacity: 0;
      position: absolute;
      left: 0;
    }
  }
  .close-btn {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 40px;
    padding: 5px;
    cursor: pointer;
    right: 50px;
    transition: 0.3s;
    &:hover {
      background: #f3f3f3;
    }
  }

  @media (max-width: 488px) {
    .close-btn {
      top: 20px;
      right: 20px;
    }
  }
`;

const Main = styled.div`
  max-width: 690px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  margin: 100px auto;
  padding: 40px;
  button {
    width: 100%;
    margin-top: 50px;
  }
  .featured_pic {
    height: 180px;
    object-fit: cover;
  }
  @media (max-width: 540px) {
    padding: 40px 20px;
  }
  h3 {
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    display: flex;
    align-items: center;
  }
  .handleImgDisplay {
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 30px;
    input {
      display: none;
    }
  }
  .dummy_holder {
    img {
      top: 0;
      right: 10px;
    }
  }
  .preview_me {
    width: 140px;
    height: 140px;
    position: static;
    margin-bottom: 30px;
    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      position: static;
      object-fit: cover;
    }
  }
`;

export default Details;
