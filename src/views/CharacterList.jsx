import React, { useEffect, useState } from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import CharacterNameplate from '../components/CharacterNameplate';
import fetchCharacters from '../services/api';

export default function CharacterList() {
  const history = useHistory();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const chars = await fetchCharacters();
      setCharacters(chars);
      setLoading(false);
    }
    fetch();
  }, []);
  return characters.map((char, index) => (
    <CharacterNameplate key={index} character={char} />
  ));
}
