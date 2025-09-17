import React from "react";

const Snake = ({ body, cellSize }) => {
  return (
    <>
      {body.map((segment, index) => (
        <div
          key={index}
          className="absolute bg-green-500 rounded-sm"
          style={{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            left: `${segment.x * cellSize}px`,
            top: `${segment.y * cellSize}px`,
            borderRadius: index === 0 ? "50%" : "2px",
            backgroundColor: index === 0 ? "#4ade80" : "#22c55e",
            zIndex: 10,
          }}
        />
      ))}
    </>
  );
};

export default Snake;