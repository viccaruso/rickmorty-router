import fetch from 'cross-fetch';

export async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await res.json();
  return results;
}

export async function fetchCharacterById(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const results = await res.json();
  console.log('results', results);
  return results;
}
