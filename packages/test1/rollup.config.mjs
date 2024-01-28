import typescript from "@rollup/plugin-typescript";

export default {
  input: {
    index: "src/index.ts",
  },
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "dist",
      entryFileNames: "[name].mjs",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
  external: ["@playwright/test"],
};
