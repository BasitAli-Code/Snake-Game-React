import React from "react";

const ArrowControls = ({ onDirectionChange }) => {
  const btn = "w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 border-2 border-cyan-500 rounded-full text-cyan-400 font-bold shadow-lg hover:shadow-xl hover:bg-gray-700 transition cursor-pointer flex justify-center items-center text-2xl sm:text-3xl";

  return (
    <div className="mt-10 flex flex-col items-center gap-6 md:hidden">
      <button onClick={() => onDirectionChange("UP")} className={btn}>↑</button>
      <div className="flex gap-6">
        <button onClick={() => onDirectionChange("LEFT")} className={btn}>←</button>
        <button onClick={() => onDirectionChange("DOWN")} className={btn}>↓</button>
        <button onClick={() => onDirectionChange("RIGHT")} className={btn}>→</button>
      </div>
    </div>
  );
};

export default ArrowControls;
