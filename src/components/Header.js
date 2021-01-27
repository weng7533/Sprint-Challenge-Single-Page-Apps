import React from "react";
import styled from 'styled-components';

const Center = styled.section`

    margin: 1rem;
  display: flex;
  flex-direction: column;
align-items: center;
  justify-content: center;
`;
export default function Header() {
  return (
    <Center className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

    </Center>

  );
}
