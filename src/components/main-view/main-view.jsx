import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemonList: [],
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(response => {
      this.setState({
        pokemonList: response.data.results
      });
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { pokemonList } = this.state;

    return (
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
}