import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { PokemonModal } from '../pokemon-modal/pokemon-modal';

export class PokemonCard extends React.Component {

  constructor() {
    super();
    this.state = {
      showDetails: false,
      pokemonImage: '',
      pokemonHeight: '',
      pokemonTypes: [],
    };
  }

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  getPokemonDetails = () => {
    const { pokemon } = this.props;
    const detailsUrl = pokemon.url;

    axios.get(detailsUrl)
    .then(response => {
      this.setState({
        pokemonImage: response.data.sprites.front_default,
        pokemonHeight: response.data.height,
        pokemonTypes: response.data.types,
      })
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    const { pokemon } = this.props;
    const { pokemonImage, pokemonHeight, pokemonTypes } = this.state;

    return (
  
      <Card className="pokemon-card text-center" onClick={this.getPokemonDetails}>
        <Card.Title className="text-center">
          {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
        </Card.Title>
      
      <div className="pokemon-details">
        {this.state.showDetails && 
          <Card.Body>
            <Card.Img crossOrigin="anonymous" src={pokemonImage}/>
            <p><b>Height</b>: {pokemonHeight} meters</p>
            <p><b>Types</b>: {pokemonTypes.map((item) => item.type.name).join(', ') }</p>
          </Card.Body>
        }
        {this.state.showDetails
          ? <Button className="toggle-button" variant="outline-primary"  size="sm" onClick={this.handleClick}>Hide Details</Button>
          : <Button className="toggle-button" variant="outline-primary" size="sm" onClick={this.handleClick}>Show Details</Button>
        }
        
      </div>
      </Card>
    )
  }
}