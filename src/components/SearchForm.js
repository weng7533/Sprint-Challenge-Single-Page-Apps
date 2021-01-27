import React, { useState } from "react";
import styled from 'styled-components';

const InputStyle = styled.section`

    margin: 1rem;
  display: flex;
  justify-content: center;
`;


export default function SearchForm(props) {

  return (
    <InputStyle className="search-form">

      <form className="search">
        <input
          type="text"
          onChange={props.searchHandler}
          name="name"
          tabIndex="0"

          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </InputStyle>
  );
}
