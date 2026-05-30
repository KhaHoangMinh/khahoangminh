import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: false,
        minify: "terser",
    },
    resolve: {
        alias: {
            // Define the root alias "@" -> "src"
            "@": path.resolve(__dirname, "./src"),
            // Define shortcuts
            "config": path.resolve(__dirname, "./src/config"),
            "components": path.resolve(__dirname, "./src/components"),
            "utils": path.resolve(__dirname, "./src/lib/utils"),
            "atoms": path.resolve(__dirname, "./src/components/atoms"),
            "molecules": path.resolve(__dirname, "./src/components/molecules"),
            "organisms": path.resolve(__dirname, "./src/components/organisms"),
            "templates": path.resolve(__dirname, "./src/components/templates"),
            "pages": path.resolve(__dirname, "./src/pages"),
            "services": path.resolve(__dirname, "./src/services"),
            "lib": path.resolve(__dirname, "./src/lib"),
            "hooks": path.resolve(__dirname, "./src/hooks"),
        }
    },
    server: {
        port: 3000,
        host: '0.0.0.0', // This exposes the app to your local network
    },
})