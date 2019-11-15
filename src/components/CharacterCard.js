import React from "react";
import styled from 'styled-components';

const Stylecard = styled.div`

margin: 1rem auto;
width: 30%;
height: 30%;
border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
cursor: pointer;
transition: 0.4s;

`;

export default function CharacterCard(props) {
  return (
    <Stylecard className='card ui'>

      <ui>
        <li>{props.character.name}</li>
        <li>{props.character.status}</li>
        <li>{props.character.species}</li>
        <li>{props.character.type}</li>
      </ui>
    </Stylecard>



  )
}
