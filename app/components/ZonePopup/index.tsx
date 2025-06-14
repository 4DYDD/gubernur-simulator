"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStore, faIndustry } from "@fortawesome/free-solid-svg-icons";

const ZonePopup: React.FC = () => {
  return (
    <div className="fixed animate-squish bottom-[103px] left-0 right-0 bg-white border border-gray-300 shadow-lg pt-4 flex flex-col items-center mx-auto max-w-md">
      <h2 className="text-lg font-bold mb-3 text-center text-gray-800">
        Pilih Zona
      </h2>
      <div className="flex justify-start items-center w-full !overflow-x-auto">
        <div className="flex justify-evenly items-stretch h-full gap-3 pb-8 px-3">
          {/* Zona Perumahan */}
          <button className="w-[150px] bg-green-500 text-white rounded cursor-pointer hover:bg-green-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faHome}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Perumahan
            </span>
          </button>
          {/* Zona Komersial */}
          <button className="w-[150px] bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faStore}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Komersial
            </span>
          </button>
          {/* Zona Industri */}
          <button className="w-[150px] bg-yellow-500 text-white rounded cursor-pointer hover:bg-yellow-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faIndustry}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Industri
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZonePopup;
