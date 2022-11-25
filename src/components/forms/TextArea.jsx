import React from 'react'
import styled from 'styled-components';

const TextArea = (props) => {
    const showLabel = (e) =>{
        if (e.target.value) e.target.parentElement.classList.add('value')
        else e.target.parentElement.classList.remove('value')

        console.log(e.target.value);
    }
    return ( 
        <div className="field">
            <Wrapper className={`input_w ${props.defaultValue ? 'value' : ''}`}>
                <textarea 
                    name={props.name} 
                    rows={props.rows}
                    defaultValue={props.defaultValue}
                    onChange={ (e)=>showLabel(e) }></textarea>
                <span>{props.label}</span>
            </Wrapper>
        </div> 
    );
}
 
export default TextArea;

const Wrapper = styled.div`
    position: relative;
    position: relative;
    margin-top: 25px;

    input {
        border: 0;
        border: 1px solid #D8D8D8;

        border-radius: 5px;
        font-size: inherit;

        outline: none;
    }
   
    span {
        position: absolute;
        top: 25px;
        left: 15px;
        transition: all 0.3s ease;
        pointer-events: none;
        font-size: 16px;
        color: var(--Gunmetal);
    }
    textarea:focus + span,
    &.value span {
        background: #ffffff;
        top: 10px;
        height: 20px;
        padding: 5px;
        margin: 0;
        color: #00838f;
        font-size: 14px;
        pointer-events: initial;
        left: 15px;
        line-height: 10px;
    }
    /* textarea:focus + span{
        padding: 5px !important;
        top: 10px;
    } */
`;