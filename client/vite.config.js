import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      dedupe: ["react", "react-dom"],
    },
    define: {
      "process.env.REACT_APP_BACKEND_URL": JSON.stringify(
        env.REACT_APP_BACKEND_URL,
      ),
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
    plugins: [react()],
    build: {
      // Increase warning limit (in KB) to reduce noisy warnings for large bundles
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-dom"))
                return "vendor_react";
              if (id.includes("react-router-dom")) return "vendor_router";
              if (id.includes("react-slick") || id.includes("slick-carousel"))
                return "vendor_slick";
              return "vendor";
            }
          },
        },
      },
    },
  };
});
