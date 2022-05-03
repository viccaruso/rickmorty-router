import fetch from 'cross-fetch';

export default async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await res.json();
  return results;
}
