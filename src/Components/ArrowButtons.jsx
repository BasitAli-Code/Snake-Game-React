import React from "react";

const ArrowControls = ({ onDirectionChange, gameOver }) => {
  const handleDirectionChange = (newDirection) => {
    if (gameOver) return;
    onDirectionChange(newDirection);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full mx-2"
          onClick={() => handleDirectionChange("UP")}
          disabled={gameOver}
        >
          ↑
        </button>
      </div>
      <div className=" flex justify-center mt-2">
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full mx-2"
          onClick={() => handleDirectionChange("LEFT")}
          disabled={gameOver}
        >
          ←
        </button>
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full mx-2"
          onClick={() => handleDirectionChange("DOWN")}
          disabled={gameOver}
        >
          ↓
        </button>
        <button
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full mx-2"
          onClick={() => handleDirectionChange("RIGHT")}
          disabled={gameOver}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ArrowControls;