import React from "react";

const MapGrid: React.FC = () => {
  const gridSize = 10; // Ukuran grid (10x10)

  return (
    <div
      className="grid grid-cols-10 grid-rows-10 w-full h-full border border-gray-300"
      style={{ aspectRatio: "1 / 1" }}
    >
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div
          key={index}
          className="cell cursor-pointer clicked transall border border-gray-400 bg-gray-100 hover:bg-gray-200"
          style={{ width: "100%", height: "100%", borderWidth: "0.5px" }}
        ></div>
      ))}
    </div>
  );
};

export default MapGrid;
