import React from "react";

const Food = ({ position, cellSize }) => {
  return (
    <div
      className="absolute bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.7)]"
      style={{
        left: position.x * cellSize,
        top: position.y * cellSize,
        width: cellSize,
        height: cellSize,
      }}
    ></div>
  );
};

export default Food;
