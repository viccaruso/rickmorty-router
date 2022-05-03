import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nameplate.css';

export default function CharacterNameplate({ character }) {
  console.log('character', character);
  return (
    <>
      <div className={styles.nameplate}>
        <Link to={`/characters/${character.id}`}>
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <img src={character.image} alt={`An image of ${character.name}`} />
        </Link>
      </div>
    </>
  );
}
