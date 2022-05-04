import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../services/api';

export default function CharacterCard() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const char = await fetchCharacterById(id);
      setCharacter(char);
      setLoading(false);
    }
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{character.name}</h3>
          <img src={character.image} alt={`An image of ${character.name}`} />
          <p>{`Species: ${character.species}`}</p>
          <p>{`Gender: ${character.gender}`}</p>
          <p>{`Status: ${character.status}`}</p>
        </div>
      )}
    </>
  );
}
