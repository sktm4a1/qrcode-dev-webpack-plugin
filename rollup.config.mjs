import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            exports: "default",
        },
        {
            file: "dist/index.mjs",
            format: "esm",
        },
    ],
    plugins: [typescript()],
};
