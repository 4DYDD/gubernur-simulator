import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

interface ZonePopupProps {
  onClose: () => void;
}

const ZonePopup: React.FC<ZonePopupProps> = ({ onClose }) => {
  const handleResidentialClick = () => {
    alert("Zona Perumahan dipilih");
  };

  const handleCommercialClick = () => {
    alert("Zona Komersial dipilih");
  };

  const handleIndustrialClick = () => {
    alert("Zona Industrial dipilih");
  };

  return (
    <div className="fixed bottom-32 left-0 right-0 bg-white border border-gray-300 shadow-lg p-4 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Pilih Zona</h2>
      <div className="flex gap-4">
        <div
          className="w-16 h-16 flex items-center justify-center bg-green-500 cursor-pointer rounded-lg shadow-md clicked transall"
          title="Zona Perumahan"
          onClick={handleResidentialClick}
        >
          <FontAwesomeIcon icon={faHome} size="2x" color="white" />
        </div>
        <div
          className="w-16 h-16 flex items-center justify-center bg-blue-500 cursor-pointer rounded-lg shadow-md"
          title="Zona Komersial"
          onClick={handleCommercialClick}
        >
          <FontAwesomeIcon icon={faBuilding} size="2x" color="white" />
        </div>
        <div
          className="w-16 h-16 flex items-center justify-center bg-yellow-500 cursor-pointer rounded-lg shadow-md"
          title="Zona Industrial"
          onClick={handleIndustrialClick}
        >
          <FontAwesomeIcon icon={faIndustry} size="2x" color="white" />
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={onClose}
      >
        Tutup
      </button>
    </div>
  );
};

export default ZonePopup;
