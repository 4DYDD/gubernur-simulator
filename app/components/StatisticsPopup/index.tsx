"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Mengimpor ikon baru untuk statistik
import {
  faUsers, // Ikon untuk Populasi
  faCoins, // Ikon untuk Pendapatan
  faSmile, // Ikon untuk Kepuasan Publik
} from "@fortawesome/free-solid-svg-icons";

const StatisticsPopup: React.FC = () => {
  return (
    <div className="fixed animate-squish bottom-[103px] left-0 right-0 bg-white border border-gray-300 shadow-lg pt-4 flex flex-col items-center mx-auto max-w-md">
      <h2 className="text-lg font-bold mb-3 text-center text-gray-800">
        Statistik Kota
      </h2>
      <div className="flex justify-start items-center w-full !overflow-x-auto">
        <div className="flex justify-evenly items-stretch h-full gap-3 pb-8 px-3">
          {/* Tombol pertama: Populasi */}
          <button className="w-[150px] bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faUsers}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Populasi
            </span>
          </button>
          {/* Tombol kedua: Pendapatan */}
          <button className="w-[150px] bg-yellow-500 text-white rounded cursor-pointer hover:bg-yellow-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faCoins}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Pendapatan
            </span>
          </button>
          {/* Tombol ketiga: Kepuasan Publik */}
          <button className="w-[150px] bg-purple-500 text-white rounded cursor-pointer hover:bg-purple-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faSmile}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Kepuasan Publik
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPopup;
