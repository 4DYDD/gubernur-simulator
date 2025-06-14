"use client";

import React, { useRef, RefObject } from "react"; // Hapus useState dan useEffect yang tidak terpakai
import { usePopupStore, PopupType } from "../../store/popupStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTouchEffectStore } from "../../store/touchEffectStore";
import { useMenuThrottleStore } from "../../store/menuThrottleStore"; // Impor store throttle global

interface MenuButtonProps {
  label: string;
  popupTarget: Exclude<PopupType, null>;
  icon?: IconDefinition;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  popupTarget,
  icon,
  className,
}) => {
  const { togglePopup, activePopup } = usePopupStore();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { applyTouchStart, applyTouchEnd } = useTouchEffectStore();
  // Ambil status throttle dan aksi dari store global
  const {
    isThrottled,
    actions: { startThrottle },
  } = useMenuThrottleStore();

  const handleClick = () => {
    // Jika sedang di-throttle secara global, jangan lakukan apa-apa
    if (isThrottled) return;

    togglePopup(popupTarget);
    // Mulai throttle global selama 300ms
    startThrottle(150);
  };

  const handleTouchStart = () => {
    // Jika sedang di-throttle secara global, jangan terapkan efek sentuhan
    if (isThrottled) return;
    if (buttonRef.current) {
      applyTouchStart(buttonRef as RefObject<HTMLElement>);
    }
  };

  const handleTouchEnd = () => {
    // Efek touchend bisa tetap berjalan untuk mengembalikan skala,
    // karena onTouchStart sudah dicegah jika throttled.
    if (buttonRef.current) {
      applyTouchEnd(buttonRef as RefObject<HTMLElement>);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`menu-item text-sm px-4 font-bold transall flex-1 pt-3 pb-7 rounded-lg select-none mt-1 mb-2 mx-0.5 text-center bg-gray-700 flexcc ${
        activePopup === popupTarget && !isThrottled && "!bg-gray-600" // Tambahkan !isThrottled untuk status aktif
      } transition-colors ${className} ${
        isThrottled ? "opacity-50 cursor-not-allowed" : ""
      }`} // Tambah style saat throttled
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd} // Biasanya sama dengan onTouchEnd
      disabled={isThrottled} // Nonaktifkan tombol jika sedang di-throttle secara global
    >
      {icon && (
        <FontAwesomeIcon icon={icon} size="xl" className="mb-2 h-5 w-5" />
      )}
      {label}
    </button>
  );
};

export default MenuButton;
