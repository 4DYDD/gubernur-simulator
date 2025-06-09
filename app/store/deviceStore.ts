import { create } from "zustand";

interface DeviceState {
  isMobile: boolean;
  // Tambahkan state atau action lain jika diperlukan di masa mendatang
}

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false, // Nilai default, bisa di-override dari server
}));
