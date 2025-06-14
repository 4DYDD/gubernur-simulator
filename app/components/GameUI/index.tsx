"use client";

import React from "react";
import MenuButton from "../MenuButton";
import ZonePopup from "../ZonePopup";
import FacilityPopup from "../FacilityPopup";
import StatisticsPopup from "../StatisticsPopup";
import { usePopupStore } from "../../store/popupStore";
import {
  faHome,
  faBuilding,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

const GameUI: React.FC = () => {
  const { activePopup } = usePopupStore();

  return (
    <>
      <footer className="bg-gray-800 text-white flex justify-around fixed bottom-0 w-full">
        <MenuButton label="Zona" popupTarget="zone" icon={faHome} />
        <MenuButton
          label="Fasilitas"
          popupTarget="facility"
          icon={faBuilding}
        />
        <MenuButton
          label="Statistik"
          popupTarget="statistics"
          icon={faChartBar}
        />
      </footer>

      {activePopup === "zone" && <ZonePopup />}
      {activePopup === "facility" && <FacilityPopup />}
      {activePopup === "statistics" && <StatisticsPopup />}
    </>
  );
};

export default GameUI;
