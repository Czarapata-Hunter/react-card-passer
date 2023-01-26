import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import CardList from './CardList';

export default function Player({
  player,
  hand,
  // setFrom,
  // setSelectedCard,
  // selectedCard,
  // to
}) {
  const { to, setTo } = useGameContext();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        // setFrom={setFrom}
        // selectedCard={selectedCard}
        // setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
