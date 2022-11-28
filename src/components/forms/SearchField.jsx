import React from "react";
import styled from "styled-components";
import searchIcon from '../../assets/images/svgs/search.svg'

const SearchField = (props) => {
    return ( 
        <SearchFieldTags className="event-input">
            <div className="search_set">
                <img
                src={searchIcon}
                alt="Search Icon"
                />
                <input
                className="eventt"
                type="text"
                name="name"
                placeholder="Search Blog ..."
                onChange={(e) => {
                    props.setSearchValues(e.target.value)
                }}
                />
            </div>
        </SearchFieldTags>
     );
}
 
export default SearchField;

const SearchFieldTags = styled.div`

  @media (min-width: 760px) {
        width: 20%;
  }
`;