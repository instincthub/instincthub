import {React, useState} from "react";
import styled from "styled-components";

const FilterArray = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(props.defaults ? props.defaults : props.options[0]);
  
    return (
      <SelectMe className="select_me">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          {/* <input type="text" defaultValue={selected} name={props.input_name} readOnly className="input_drop" /> */}
          {/* {selected} */}

          <div>
            <input type="text" defaultValue={selected} name={props.input_name} readOnly className="input_drop" />
            <p>{selected}</p>
          </div>
          <label className="filter_label">{props.label}</label>
          
          <img
            src="https://www.svgrepo.com/show/379863/chevron-down.svg"
            alt=""
          />
        </div>
        {isActive && (
          <div className="select_content">
            {props.options.map((option) => (
              <div
                key={option}
                className="select_items"
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </SelectMe>
    );
  };

export default FilterArray


const SelectMe = styled.div`
    width: 100%;
    cursor: pointer;

    .select-btn input:focus{
        border: none;
    }
    .select-btn p{
        margin: 0px;
    }
    .select-btn input{
        display: none ;
    }
    .select_content{
        z-index: 10;
        max-height: 300px;
        overflow: scroll;
    }
    .filter_label{
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
        position: absolute;
        top: -9px;
        left: 15px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        pointer-events: none;
    }
`
;