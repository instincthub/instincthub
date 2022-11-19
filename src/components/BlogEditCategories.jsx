import {React, useEffect, useState} from "react";
import styled from "styled-components";

function BlogEditCategories(props) {
    const [objects, setObjects] = useState([])

    /*
     * Objects trows error when you loop with map or forEach.
     * Solution: convert to array.
     */
     useEffect(()=>{
        // Objects to array
        let obj = []
        for (const i in props.cat_list) obj.push(props.cat_list[i])
        setObjects(obj)
     }, [props.cat_list])
    
    if (objects) {  
        return (
        <CatWrapper className="manipulateCheckboxes" >
            {/* Marketing */}
            
            {objects.map((option)=>{
                return <div className="cntr" key={option.id}>
                    <label htmlFor={`id_${option.id}`} className="label-cbx">
                        <input
                        name='categories'
                        id={`id_${option.id}`}
                        type="checkbox"
                        className="invisible"
                        data-id={option.id}
                        defaultValue={option.id}
                        defaultChecked={option.status}
                        />
                        <div className="checkbox">
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                <polyline points="4 11 8 15 16 6"></polyline>
                            </svg>
                        </div>
                        <span>{option.title}</span>
                    </label>
                </div>
                    
                })
            }
        </CatWrapper>
        );
     }
  }
  
  export default BlogEditCategories;

  const CatWrapper = styled.section`
    max-height: 200px;
    overflow: scroll;
  
  `
  ;