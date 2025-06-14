"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHospital,
  faSchool,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const FacilityPopup: React.FC = () => {
  return (
    <div className="fixed animate-squish bottom-[103px] left-0 right-0 bg-white border border-gray-300 shadow-lg pt-4 flex flex-col items-center mx-auto max-w-md">
      <h2 className="text-lg font-bold mb-3 text-center text-gray-800">
        Pilih Fasilitas
      </h2>
      <div className="flex justify-start items-center w-full !overflow-x-auto">
        <div className="flex justify-evenly items-stretch h-full gap-3 pb-8 px-3">
          {/* Tombol Fasilitas: Kantor Pemerintahan */}
          <button className="w-[150px] bg-purple-500 text-white rounded cursor-pointer hover:bg-purple-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1" // Gaya ikon
              icon={faBuilding}
              size="xl" // Ukuran ikon
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Kantor Pemerintahan
            </span>
          </button>
          {/* Tombol Fasilitas: Rumah Sakit */}
          <button className="w-[150px] bg-pink-500 text-white rounded cursor-pointer hover:bg-pink-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faHospital}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Rumah Sakit
            </span>
          </button>
          {/* Tombol Fasilitas: Sekolah */}
          <button className="w-[150px] bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faSchool}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Sekolah
            </span>
          </button>
          {/* Tombol Fasilitas: Taman Kota */}
          <button className="w-[150px] bg-teal-500 text-white rounded cursor-pointer hover:bg-teal-600 transition-colors h-[67px] flexc">
            <FontAwesomeIcon
              className="w-[75px] ps-1"
              icon={faTree}
              size="xl"
            />
            <span className="text-[11px] font-bold text-left w-full pe-2">
              Taman Kota
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityPopup;
