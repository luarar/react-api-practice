import React, { useState, useEffect } from 'react';
import Hero from './hero';
import styled from 'styled-components';
import axios from 'axios';

const Grid = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const heroesRequest = async () => {
      try {
        const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
        setHeroes(response.data.slice(0,20));
      } catch (e) {
        console.log('error');
      }
    };
    heroesRequest();
  }, []);

  return (

    <Container>
      { heroes.map((hero) => (
        <Hero {...hero} key={hero.id} />
      )) }
    </Container>
  );
};

const Container = styled.div`
  margin-top:1.5em;
  display: grid;
  place-items: start;
  grid-column-gap: 20px;
  margin-bottom:2em;
  padding-left: 2em;
  padding-right: 2em;
  @media (min-width:320px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    margin-bottom:.6em;
    padding-left: .6em;
    padding-right: .6em;
  }
  @media(min-width:768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 25px;
  }
  @media(min-width:1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(min-width:1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default Grid;
