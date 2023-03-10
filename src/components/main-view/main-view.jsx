import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export function MainView() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(response => response.json())
    .then(response => setPokemonList(response.results))
    .catch(error => console.log(error))
  })

  return(
      <Container>
        <h1 className="text-center">Sarah's Pokedex</h1>
        <Row>
          {pokemonList.map((p) => (
            <Col xs={6} sm={5} md={4} lg={3} key={p.name}>
              <PokemonCard pokemon={p} />
            </Col>
          ))}
        </Row>
      </Container>
  )
}