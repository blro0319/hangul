import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Hangul.js",
  description: "Handles Korean with JavaScript",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started/" },
      { text: "API", link: "/api/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/blro0319/hangul" },
    ],
  },
});
