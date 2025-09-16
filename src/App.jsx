import React, { useState, useEffect } from "react";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard";
import ArrowControls from "./Components/ArrowButtons";

const App = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState([{ x: 8, y: 10 }]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState({ x: 5, y: 5 });

  const boardSize = 20; // Grid size

  // Restart game
  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setSnake([{ x: 8, y: 10 }]);
    setDirection("RIGHT");
    setFood({ x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-cyan-400 p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
        🐍 Snake Game
      </h1>

      <ScoreBoard score={score} onRestart={handleRestart} />

      <GameBoard
        snake={snake}
        setSnake={setSnake}
        direction={direction}
        setDirection={setDirection}
        food={food}
        setFood={setFood}
        gameOver={gameOver}
        setGameOver={setGameOver}
        boardSize={boardSize}
        setScore={setScore}
      />

      <ArrowControls onDirectionChange={setDirection} />
    </div>
  );
};

export default App;
