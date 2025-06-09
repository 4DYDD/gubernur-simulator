"use client";

import React, { useEffect, useState } from "react";
import MapGrid from "./MapGrid";
import ZonePopup from "./ZonePopup";
import addClickedEffect from "@/utils/clickedEffect";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    addClickedEffect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white text-center py-6 text-xl font-bold">
        Gubernur Simulator
      </header>
      <div className="flex-grow flex items-center justify-center relative top-[-150px]">
        <MapGrid />
      </div>
      <footer className="bg-gray-800 text-white pb-8 flex justify-around fixed bottom-0 w-full">
        <button
          className="menu-item text-sm h-24 px-4 transall"
          onClick={() => setShowPopup(true)}
        >
          Zona
        </button>
        <button className="menu-item text-sm h-24 px-4">Fasilitas</button>
        <button className="menu-item text-sm h-24 px-4">Statistik</button>
      </footer>
      {showPopup && <ZonePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
