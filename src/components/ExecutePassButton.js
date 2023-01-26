import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { from, to, selectedCard } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from{' '}
      {/* Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '} */}
      {from} to {to}
    </div>
  );
}
