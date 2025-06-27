import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import path from "path";
import sassGlobImports from "vite-plugin-sass-glob-import";
import fs from 'fs';

const isProduction = process.env.NODE_ENV === "production";
const outDir = path.resolve(process.cwd(), './../app/public');
const manifestPath = outDir + '/.vite/manifest.json';

console.log('vite NODE_ENV ',process.env.NODE_ENV);
console.log('vite outDir ',outDir);
export default defineConfig({
  // plugins: [react()],
  base: "/",
    server: {
        host: '127.0.0.1',
        port: "8081",
        strictPort: true,
        hot: true,
        origin: "http://127.0.0.1:8081"
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer],
        },
        preprocessorOptions: {
            scss: {
                sassOptions: {},
            },
        },
    },
    plugins: [
        react(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "assets/icons")],
            symbolId: "icon-[dir]-[name]",
        }),
        sassGlobImports(),
        {
            name: "jsx",
            handleHotUpdate({ file, server }) { // Перегружаем страницу при изменении View файлов
                if (file.endsWith(".jsx")) {
                    server.ws.send({
                        type: "full-reload",
                        path: "*",
                    });
                }
            },
        }
    ],
 
    build: {
        assetsInlineLimit: 0,
        emptyOutDir: true,
        manifest: '.vite/manifest.json',
        sourcemap: !isProduction,
        assetsDir: 'assets',
        publicDir: path.resolve(process.cwd(), "./public"),
        outDir: outDir,
        rollupOptions: {
            input: {
                appjs: "./src/main.jsx",
               // main: "./theme/src/js/main.js",
                app: "./scss/app.scss",
            }
        },
    },
})
