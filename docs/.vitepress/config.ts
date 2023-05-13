import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Hangul.js",
  description: "Handles Korean with JavaScript",
  locales: {
    root: {
      label: "한국어",
      lang: "ko-KR",
      themeConfig: {
        nav: [
          { text: "시작하기", link: "/get-started/" },
          { text: "API", link: "/api/" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/blro0319/hangul" },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Get Started", link: "/en/get-started/" },
          { text: "API", link: "/en/api/" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/blro0319/hangul" },
        ],
      },
    },
  },
});
