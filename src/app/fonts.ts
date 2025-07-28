import localFont from "next/font/local";

export const nasalization = localFont({
  src: "../assets/fonts/nasalization.otf",
  weight: "400",
  style: "normal",
  preload: true,
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const quentin = localFont({
  src: "../assets/fonts/quentin.otf",
  weight: "400",
  style: "normal",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});
