module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        grayBackground: "#f2f2f2",
        secondary: "#ffed4a",
        transparent: "#000009",
        brown: "#632d00",
      },
    },
  },
  variants: {},
  plugins: [],
};
