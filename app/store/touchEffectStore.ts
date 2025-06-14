import { RefObject } from "react";
import { create } from "zustand";

interface TouchEffectActions {
  applyTouchStart: (elementRef: RefObject<HTMLElement>, scale?: number) => void;
  applyTouchEnd: (elementRef: RefObject<HTMLElement>) => void;
}

const DEFAULT_SCALE = 0.9;

export const useTouchEffectStore = create<TouchEffectActions>()(() => ({
  applyTouchStart: (elementRef, scale = DEFAULT_SCALE) => {
    if (elementRef.current) {
      // Anda bisa menambahkan transisi di sini jika belum diatur via CSS global
      // elementRef.current.style.transition = 'transform 0.05s ease-out';
      elementRef.current.style.transform = `scale(${scale})`;
    }
  },
  applyTouchEnd: (elementRef) => {
    if (elementRef.current) {
      elementRef.current.style.transform = "scale(1)";
    }
  },
}));
