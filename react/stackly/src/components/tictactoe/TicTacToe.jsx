import React, { useState } from "react";
import { RotateCcw, Circle, X, } from "lucide-react";
import"./TicTacToe.css"
export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (updateBoard) => {
    for (const combination of winningCombination) {
      const [a, b, c] = combination;

      if (
        updateBoard[a] &&
        updateBoard[a] === updateBoard[b] &&
        updateBoard[b] === updateBoard[c]
      ) {
        return updateBoard[a];
      }
    }
    return null;
  };

  const handleCheck = (index) => {
    if (board[index]) {
      return;
    }

    if (winner || isDraw) {
      return;
    }

    const updateBoard = [...board];

    updateBoard[index] = currentPlayer;

    setBoard(updateBoard);

    const gameWinner = checkWinner(updateBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    const boardIsFull = updateBoard.every((cell) => {
      cell !== "";
    });

    if (boardIsFull) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleRest = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setIsDraw(false);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <div>
        <p className="game-label"> REACT GAME </p>
        <h2>Tic-Tac-Toe</h2>
        <p className="game-description">
          A simple XO game built using React useState.
        </p>
      </div>
      <div className="game-card">
        
        <div className="game-status">
          
          {winner ? (
            <>
              
              <span>GAME OVER</span> <h3> Player {winner} Wins! </h3>
            </>
          ) : isDraw ? (
            <>
              
              <span>GAME OVER</span> <h3> It's a Draw! </h3>
            </>
          ) : (
            <>
              
              <span>YOUR TURN</span> <h3> Player {currentPlayer} </h3>
            </>
          )}
        </div>
        <div className="game-board">
          
          {board.map((cell, index) => (
            <button
              key={index}
              className={`game-cell ${cell ? `cell-${cell.toLowerCase()}` : ""}`}
              onClick={() => handleCheck(index)}
              disabled={Boolean(cell) || Boolean(winner) || isDraw}
            >
              
              {cell === "X" && <X size={42} strokeWidth={2.5} />}
              {cell === "O" && <Circle size={38} strokeWidth={2.5} />}
            </button>
          ))}
        </div>
        <button className="restart-button" onClick={handleRest}>
          
          <RotateCcw size={17} /> Restart Game
        </button>
      </div>
      <div className="game-info">
        
        <div className="player-info player-x">
          
          <div className="player-symbol">
            
            <X size={20} />
          </div>
          <div>
            
            <small>PLAYER 1</small> <strong>X</strong>
          </div>
        </div>
        {/* Player O */}
        <div className="player-info player-o">
          
          <div className="player-symbol">
            
            <Circle size={19} />
          </div>
          <div>
            
            <small>PLAYER 2</small> <strong>O</strong>
          </div>
        </div>
      </div>
      
    </div>
  );
}
