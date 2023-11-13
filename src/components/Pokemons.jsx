/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Pokemons = () => {
	const [pokemonName, setPokemonName] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }

      const data = await response.json();
      navigate(`/pokemon/${data.id}`);
    } catch (error) {
      console.error('Error searching for Pokémon:', error);
    }
  };

  return (
    <div className='pokemons'>
      <h2>Buscar Pokémon</h2>
      <input
        type="text"
        placeholder="nombre o id del pokemon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <NavLink to="/pokemondetails" ><button onClick={handleSearch}>Buscar</button></NavLink>
      
    </div>
  );
};

export default Pokemons;
