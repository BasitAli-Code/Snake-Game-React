import React, { useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";

const GameBoard = ({
  snake,
  setSnake,
  direction,
  food,
  setFood,
  gameOver,
  setGameOver,
  boardSize,
  setScore,
}) => {
  const cellSize = 20; 

 
  const generateFood = () => ({
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  });


  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "RIGHT") head.x += 1;

    if (head.x < 0 || head.y < 0 || head.x >= boardSize || head.y >= boardSize) {
      setGameOver(true);
      return;
    }

 
    if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setScore((prev) => prev + 1);
      setFood(generateFood());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="relative mx-auto mt-8 w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]
      bg-gray-900 border-4 border-cyan-500 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.5)] overflow-hidden"
      style={{ aspectRatio: "1 / 1" }}
    >
      <Snake body={snake} cellSize={cellSize} />
      <Food position={food} cellSize={cellSize} />

      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-2xl font-bold">
          Game Over
        </div>
      )}
    </div>
  );
};

export default GameBoard;

