import React, { useEffect, useCallback, useRef, useState } from "react";
import Snake from "./Snake";
import Food from "./Food";

const GameBoard = ({
  snake, setSnake,
  direction,
  food, setFood,
  gameOver, setGameOver,
  boardSize,
  setScore
}) => {
  const boardRef = useRef(null);
  const [cellSize, setCellSize] = useState(24);

  // Recalculate cell size on window resize
  useEffect(() => {
    const updateSize = () => {
      if (boardRef.current) {
        const width = boardRef.current.offsetWidth;
        setCellSize(width / boardSize);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [boardSize]);

  const moveSnake = useCallback(() => {
    if (gameOver || !direction) return;

    const newHead = {
      x: snake[0].x + (direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0),
      y: snake[0].y + (direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0),
    };

    // Game Over if snake touches border wall
    if (
      newHead.x < 1 || newHead.y < 1 ||
      newHead.x > boardSize - 2 || newHead.y > boardSize - 2
    ) {
      setGameOver(true);
      return;
    }

    // Self collision
    if (snake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];

    // Eating food
    if (newHead.x === food.x && newHead.y === food.y) {
      setScore(prev => prev + 1);
      let newFood;
      do {
        newFood = {
          x: Math.floor(Math.random() * (boardSize - 2)) + 1,
          y: Math.floor(Math.random() * (boardSize - 2)) + 1,
        };
      } while (newSnake.some(s => s.x === newFood.x && s.y === newFood.y));
      setFood(newFood);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gameOver, boardSize, setGameOver, setScore, setFood, setSnake]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake, gameOver]);

  return (
    <div
      ref={boardRef}
      className="relative mx-auto mt-8 bg-gray-900 border-4 border-cyan-500 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.5)] overflow-hidden"
      style={{
        width: "90vw",
        maxWidth: "480px",
        aspectRatio: "1/1",
      }}
    >
      {/* 🧱 Visible Border Walls */}
      {Array.from({ length: boardSize }).map((_, i) => (
        <React.Fragment key={i}>
          {/* Top row */}
          <div
            className="absolute bg-cyan-700"
            style={{
              left: i * cellSize,
              top: 0,
              width: cellSize,
              height: cellSize,
            }}
          />
          {/* Bottom row */}
          <div
            className="absolute bg-cyan-700"
            style={{
              left: i * cellSize,
              top: (boardSize - 1) * cellSize,
              width: cellSize,
              height: cellSize,
            }}
          />
          {/* Left column */}
          <div
            className="absolute bg-cyan-700"
            style={{
              left: 0,
              top: i * cellSize,
              width: cellSize,
              height: cellSize,
            }}
          />
          {/* Right column */}
          <div
            className="absolute bg-cyan-700"
            style={{
              left: (boardSize - 1) * cellSize,
              top: i * cellSize,
              width: cellSize,
              height: cellSize,
            }}
          />
        </React.Fragment>
      ))}

      {/* Snake and Food */}
      <Snake body={snake} cellSize={cellSize} />
      <Food position={food} cellSize={cellSize} />

      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-3xl font-bold z-50">
          Game Over
        </div>
      )}
    </div>
  );
};

export default GameBoard;
