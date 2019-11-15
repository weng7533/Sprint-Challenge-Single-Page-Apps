import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      <Link to='/CharacterList'>Character</Link>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/CharacterList' component={CharacterList} />
    </main>
  );
}
