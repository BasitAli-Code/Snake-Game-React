import React from "react";

const Snake = ({ body, cellSize }) => {
  return (
    <>
      {body.map((segment, index) => (
        <div
          key={index}
          className="absolute bg-cyan-400 rounded-sm shadow-[0_0_8px_rgba(0,255,255,0.7)]"
          style={{
            left: segment.x * cellSize,
            top: segment.y * cellSize,
            width: cellSize,
            height: cellSize,
          }}
        ></div>
      ))}
    </>
  );
};

export default Snake;
