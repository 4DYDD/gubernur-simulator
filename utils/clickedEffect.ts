// Script untuk menambahkan efek clicked pada elemen yang memiliki event click
export default function addClickedEffect() {
  document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua elemen tombol di dalam dokumen
    const clickableElements = document.querySelectorAll<HTMLElement>("button");

    clickableElements.forEach((element) => {
      element.addEventListener("touchstart", () => {
        alert(element);
        element.style.color = "red";
      });

      element.addEventListener("touchend", () => {
        element.style.scale = "1";
      });

      // Tambahkan event "touchcancel" untuk menangani kasus ketika sentuhan dibatalkan
      element.addEventListener("touchcancel", () => {
        element.style.scale = "1";
      });
    });
  });
}
