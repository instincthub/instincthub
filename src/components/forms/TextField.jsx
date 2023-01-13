import React from "react";
import styled from "styled-components";

const TextField = (props) => {
  const showLabel = (e) => {
    if (e.target.value) e.target.parentElement.classList.add("value");
    else e.target.parentElement.classList.remove("value");
  };
  return (
    <div className="field">
      <Wrapper>
        <input
          type={props.ty}
          name={props.name}
          required={props.required}
          defaultValue={props.defaultValue}
          onChange={(e) => showLabel(e)}
        />
        <span className="text_label">{props.label}</span>
      </Wrapper>
    </div>
  );
};

export default TextField;

const Wrapper = styled.div`
  position: relative;
  position: relative;
  margin-top: 25px;

  span {
    position: absolute;
    top: 5px;
    left: 15px;
    transition: all 0.3s ease;
    pointer-events: none;
    font-size: 16px;
    color: var(--Gunmetal);
  }
  input:focus + span,
  &.value span {
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
    // width: 100%;
  }
`;
