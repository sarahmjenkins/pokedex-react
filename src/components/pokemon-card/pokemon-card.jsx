import React, { useState } from 'react';
import { Card, Modal, Image } from 'react-bootstrap';

export function PokemonCard({pokemon}) {
  const [showDetails, setShowDetails] = useState(false);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonHeight, setPokemonHeight] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const handleClose = () => setShowDetails(false);
  const handleShow = () => {
    setShowDetails(true);
    fetch(pokemon.url)
    .then(response => response.json())
    .then(response => {
      setPokemonImage(response.sprites.front_default);
      setPokemonHeight(response.height);
      setPokemonTypes(response.types);
    })
    .catch(error => console.log(error))
  }

  return(
    <>
      <Card className="pokemon-card text-center" onClick={handleShow}>
        <Card.Title className="text-center">
          {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
        </Card.Title>
      </Card>

      <Modal
        show={showDetails}
        onHide={handleClose}
        size="sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Image crossOrigin="anonymous" src={pokemonImage}/>
          <p><b>Height</b>: {pokemonHeight} meters</p>
          <p><b>Type(s)</b>: {pokemonTypes.map((item) => item.type.name).join(', ') }</p>
        </Modal.Body>
      </Modal>
    </>
  )
}