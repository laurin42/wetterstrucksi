import GhostContentApi from "@tryghost/content-api";

const api = new GhostContentApi({
  url: process.env.GHOST_API_URL || "http://127.0.0.1:2368",
  key: process.env.GHOST_CONTENT_KEY || "",
  version: "v5.0",
});

export default api;
