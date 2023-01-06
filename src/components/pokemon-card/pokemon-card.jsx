// Attempt to use hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal } from 'react-bootstrap';

export function PokemonCard(pokemon) {
  const [showDetails, setShowDetails] = useState(false);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonHeight, setPokemonHeight] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);

  // useEffect(() => {
  //   fetch('props.url')
  //   .then(response => {
  //     setPokemonImage(response.data.sprites.front_default);
  //     setPokemonHeight(response.data.height);
  //     setPokemonTypes(response.data.types);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }, []);

  // handleClick = () => {
  //   setShowDetails(!showDetails)
  // }

  // getPokemonDetails = () => {
  //   const { pokemon } = props;
  //   const detailsUrl = pokemon.url;

  //   axios.get(detailsUrl)
  //   .then(response => {
  //     setPokemonImage(response.data.sprites.front_default);
  //     setPokemonHeight(response.data.height);
  //     setPokemonTypes(response.data.types);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  return(
    <>
      <Card className="pokemon-card text-center" onClick={handleShow}>
        <Card.Title className="text-center">
          Pokemon's name goes here
          {/* {pokemon.name} */}
          {/* {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)} */}
        </Card.Title>
      </Card>

      <Modal
        show={showDetails}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Pokemon's name will go here
            {/* {props.name.charAt(0).toUpperCase()+props.name.slice(1)} */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Pokemon's image, height, and types will go here.
          {/* <Image crossOrigin="anonymous" src={pokemonImage}/>
          <p><b>Height</b>: {pokemonHeight} meters</p>
          <p><b>Types</b>: {pokemonTypes.map((item) => item.type.name).join(', ') }</p> */}
        </Modal.Body>
      </Modal>
    </>
  )
}