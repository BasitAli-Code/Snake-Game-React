import React from "react";

const ScoreBoard = ({ score = 0, onRestart }) => {
  return (
    <div className="flex justify-between items-center w-[90vw] max-w-[500px] px-6 py-3 mt-6 bg-gray-800 border-2 border-cyan-500 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.5)] text-cyan-400 font-bold text-lg sm:text-xl">
      <p>Score: {score}</p>
      <button onClick={onRestart} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md text-white transition-all duration-200 cursor-pointer">
        Restart
      </button>
    </div>
  );
};

export default ScoreBoard;
