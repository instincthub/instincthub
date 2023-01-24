import {React, useState, useEffect} from "react";
import styled from "styled-components";

const FilterObjects = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(props.exists ? props.exists.title : "Choose...");
    const [objects, setObjects] = useState([])
    const [id, setID] = useState(props.exists ? props.exists.id : '')

     useEffect(()=>{
        /* 
            Objects trows error when you loop with map or forEach.
            Solution: convert objects list to array.
        */
        let obj = []
        for (const i in props.options) obj.push(props.options[i])
        setObjects(obj)

     }, [props.options])

  
    return (
      <SelectMe className="select_me">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          <div>
            <input type="text" className="dropdown input_drop" defaultValue={id} id={'id_'+props.input_name} name={props.input_name} hidden />
            <p>{selected}</p>
          </div>
          <label className="filter_label">{props.label}</label>
          {/* {selected} */}
          <img
            src="https://www.svgrepo.com/show/379863/chevron-down.svg"
            alt=""
          />
        </div>
        {isActive && (
          <div className="select_content">
            {objects.map((option) => (
              <div
                className="select_items"
                data-id={option.id}
                onClick={(e) => {
                  setSelected(option.title);
                  // setID(option.id)
                  document.querySelector(`input[name=${props.input_name}]`).value = option.id;
                  setIsActive(false);
                }}
              >
                {option.title}
              </div>
            ))}
          </div>
        )}
      </SelectMe>
    );
  };

export default FilterObjects

const SelectMe = styled.div`
    width: 100%;

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
