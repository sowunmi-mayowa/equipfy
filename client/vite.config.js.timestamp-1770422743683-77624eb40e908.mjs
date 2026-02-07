// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/User/Documents/ovaborlabs/equipfy/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/Documents/ovaborlabs/equipfy/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_BACKEND_URL": JSON.stringify(env.REACT_APP_BACKEND_URL)
    },
    plugins: [react()],
    build: {
      // Increase warning limit (in KB) to reduce noisy warnings for large bundles
      chunkSizeWarningLimit: 2e3,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-dom"))
                return "vendor_react";
              if (id.includes("react-router-dom"))
                return "vendor_router";
              if (id.includes("react-slick") || id.includes("slick-carousel"))
                return "vendor_slick";
              return "vendor";
            }
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvY3VtZW50c1xcXFxvdmFib3JsYWJzXFxcXGVxdWlwZnlcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvY3VtZW50c1xcXFxvdmFib3JsYWJzXFxcXGVxdWlwZnlcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9vdmFib3JsYWJzL2VxdWlwZnkvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCc6IEpTT04uc3RyaW5naWZ5KGVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwpXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgLy8gSW5jcmVhc2Ugd2FybmluZyBsaW1pdCAoaW4gS0IpIHRvIHJlZHVjZSBub2lzeSB3YXJuaW5ncyBmb3IgbGFyZ2UgYnVuZGxlc1xyXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSkgcmV0dXJuICd2ZW5kb3JfcmVhY3QnO1xyXG4gICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygncmVhY3Qtcm91dGVyLWRvbScpKSByZXR1cm4gJ3ZlbmRvcl9yb3V0ZXInO1xyXG4gICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygncmVhY3Qtc2xpY2snKSB8fCBpZC5pbmNsdWRlcygnc2xpY2stY2Fyb3VzZWwnKSkgcmV0dXJuICd2ZW5kb3Jfc2xpY2snO1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsY0FBYyxlQUFlO0FBQ3pYLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04scUNBQXFDLEtBQUssVUFBVSxJQUFJLHFCQUFxQjtBQUFBLElBQy9FO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsT0FBTztBQUFBO0FBQUEsTUFFTCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLGtCQUFJLEdBQUcsU0FBUyxPQUFPLEtBQUssR0FBRyxTQUFTLFdBQVc7QUFBRyx1QkFBTztBQUM3RCxrQkFBSSxHQUFHLFNBQVMsa0JBQWtCO0FBQUcsdUJBQU87QUFDNUMsa0JBQUksR0FBRyxTQUFTLGFBQWEsS0FBSyxHQUFHLFNBQVMsZ0JBQWdCO0FBQUcsdUJBQU87QUFDeEUscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
