module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],

  darkMode: "class", // permite usar <html class="dark">

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1120px",
        xl: "1280px",
      },
    },

    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        fg: "rgb(var(--color-fg) / <alpha-value>)",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },

      borderRadius: {
        base: "var(--radius-base)",
        lg: "var(--radius-lg)",
      },

      transitionTimingFunction: {
        smooth: "var(--transition)",
      },

      boxShadow: {
        soft: "0 4px 18px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),   // inputs mais bonitos
    require("@tailwindcss/typography"), // textos longos top
  ],
}
