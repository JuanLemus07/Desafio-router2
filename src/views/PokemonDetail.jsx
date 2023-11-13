/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching Pokémon details');
        }

        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pokemonDetail'>
      <h2>{pokemonData.name}</h2>
      <img className='poke' src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>ID: {pokemonData.id}</p>
      <p>Tipo: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;
