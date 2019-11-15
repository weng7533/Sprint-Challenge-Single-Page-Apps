import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import styled from 'styled-components';

const BackGroundStyle = styled.div`

width: 85vw;
min-height: 80vh;
max-width: 1024px;
margin: 35px auto;

padding: 15px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
background: url('./img/bg.jpg');
background-repeat: no-repeat;
background-size: cover;
color: black;
display: flex;
flex-direction: column;
justify-content: space-around;
 `;

export default function App() {
  return (
    <BackGroundStyle className='maindiv'>
      <Header />
      <Link to="/">Home</Link>
      <Link to='/CharacterList'>Character</Link>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/CharacterList' component={CharacterList} />
    </BackGroundStyle>
  );
}
