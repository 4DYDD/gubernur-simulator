import React from "react";
import MapGrid from "./MapGrid";
import GameUI from "./components/GameUI"; // Impor GameUI

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white text-center py-6 text-xl font-bold">
        Gubernur Simulator
      </header>
      <div className="flex-grow flex items-center justify-center relative top-[-150px]">
        <MapGrid />
      </div>
      {/* Ganti footer dan rendering popup dengan komponen GameUI */}
      <GameUI />
    </div>
  );
}
