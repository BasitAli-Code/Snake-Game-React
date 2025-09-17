import React from "react";

const Food = ({ position, cellSize }) => {
  return (
    <div
      className="absolute bg-red-500 rounded-full"
      style={{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        left: `${position.x * cellSize}px`,
        top: `${position.y * cellSize}px`,
      }}
    />
  );
};

export default Food;