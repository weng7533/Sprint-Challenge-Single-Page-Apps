import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const Listpagestyle = styled.div`
background: url('./img/bg.jpg');
background-repeat: no-repeat;
background-size: cover;
color: whitesmoke;
width: 100%;
min-height: 50vh;

`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        const apiData = res.data.results.filter(character => {

          return character.name.toLowerCase().includes(query.toLowerCase())
        })

        setData(apiData);

      })

  }, [query]);

  const searchHandler = (event) => {
    return setQuery(event.target.value);
  }

  return (
    <Listpagestyle>

      <SearchForm searchHandler={searchHandler} />


      <section className="character-list">

        {
          data.map((character, index) => {
            return <CharacterCard character={character} key={index} />
          })
        }
      </section>

    </Listpagestyle>
  );
}
