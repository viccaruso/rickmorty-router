import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nameplate.css';

export default function CharacterNameplate({ character }) {
  console.log('character', character);
  return (
    <>
      <Link to={`/characters/${character.id}`}>
        <div className={styles.nameplate}>
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <img src={character.image} alt={`An image of ${character.name}`} />
        </div>
      </Link>
    </>
  );
}
