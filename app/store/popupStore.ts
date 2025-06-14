import { create } from "zustand";

export type PopupType = "zone" | "facility" | "statistics" | null;

interface PopupState {
  activePopup: PopupType;
  openPopup: (popup: PopupType) => void;
  closePopup: () => void;
  togglePopup: (popup: PopupType) => void;
}

export const usePopupStore = create<PopupState>((set) => ({
  activePopup: null,
  openPopup: (popup) => set({ activePopup: popup }),
  closePopup: () => set({ activePopup: null }),
  togglePopup: (popup) =>
    set((state) => ({
      activePopup: state.activePopup === popup ? null : popup,
    })),
}));
