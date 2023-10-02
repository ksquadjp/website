/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: 0,
            visibility: "hidden",
          },
          to: { opacity: 1 },
        },
        disappear: {
          from: { opacity: 1 },
          to: {
            opacity: 0,
            visibility: "hidden",
          },
        },
        fadeInBottom: {
          from: {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 0.3s linear forwards",
        disappear: "disappear 0.3s linear forwards",
        fadeInBottom: "fadeInBottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [],
};
