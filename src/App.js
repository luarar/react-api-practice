import React from "react";
import styled from 'styled-components';
import Grid from './components/grid';


function App() {
  return (
    <Container>
      <Navbar>Superhero App</Navbar>
      <Grid />
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

const Navbar = styled.div`
  height:4em;
  background:#F9F9F9;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:2em;
  border-bottom:1px solid #D6D6D6;
  @media (max-width:470px) {
    font-size:1.5em;
    height:2em;
  }
`;

export default App;