import React from "react";
import styled from 'styled-components';

const Center = styled.header`

    margin: 1rem;
  display: flex;
  flex-direction: column;
align-items: center;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Center>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Center>
    </section>
  );
}
