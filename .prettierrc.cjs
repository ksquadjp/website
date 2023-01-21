module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
