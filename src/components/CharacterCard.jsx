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
      console.log('id', id);
      console.log('char', char);
      setCharacter(char);
      setLoading(false);
    }
    fetch();
  }, []);

  return <p>hello</p>;
}
