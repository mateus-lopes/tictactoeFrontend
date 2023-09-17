import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import './styles.css';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const resetButton = {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '.6em',
    border: 'none',
    position: 'fixed',
    bottom: '1em',
    left: '0',
    width: '100%',
    padding: '10px',
    cursor: 'pointer',
  }

  const historyButton = {
    backgroundColor: '#0000001b',
    color: 'white',
    fontSize: '.5em',
    border: 'none',
    padding: '1em',
    cursor: 'pointer',
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      const player = move % 2 === 0 ? 'X' : 'O';
      description = <button style={historyButton} onClick={() => jumpTo(move)}>Go to move #{move} &nbsp; [ {player} ]</button>
    } else {
      description = <button style={resetButton} onClick={() => resetGame()}>Reset game</button>
    }
    return (
      <li key={move}>
        {description}
      </li>
    );
  });

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <History moves={moves} />
    </div>
  );
}

