import { create } from "zustand";

interface MenuThrottleState {
  isThrottled: boolean;
  actions: {
    startThrottle: (duration: number) => void;
  };
}

let throttleTimeout: NodeJS.Timeout | null = null;

export const useMenuThrottleStore = create<MenuThrottleState>((set, get) => ({
  isThrottled: false,
  actions: {
    startThrottle: (duration) => {
      // Jika sudah di-throttle, jangan lakukan apa-apa (atau reset, tergantung kebutuhan)
      // Untuk kasus ini, kita cegah throttle baru jika masih aktif agar tidak memperpanjang tanpa sengaja
      // Namun, jika tombol diklik saat throttled, handleClick di MenuButton akan return lebih dulu.
      // Jadi, pemanggilan startThrottle hanya terjadi jika !isThrottled.

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      set({ isThrottled: true });
      throttleTimeout = setTimeout(() => {
        set({ isThrottled: false });
        throttleTimeout = null;
      }, duration);
    },
  },
}));
