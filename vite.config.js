import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@services": path.resolve(__dirname, "src/services"),
            "@api": path.resolve(__dirname, "src/api"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@layout": path.resolve(__dirname, "src/layout"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
