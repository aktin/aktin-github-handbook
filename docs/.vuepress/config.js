import {viteBundler} from "@vuepress/bundler-vite"
import {defaultTheme} from "@vuepress/theme-default"
import {searchPlugin} from "@vuepress/plugin-search"
import dotenv from "dotenv"

dotenv.config()

// theme docs : https://ecosystem.vuejs.press/themes/default/
export default {
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/logo.png",
    sidebar: [
      "/",
      "/folder1/page1",
      "folder2/page2"
    ],
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: "Zuletzt aktualisiert",
    contributors: false,
    versions: {
      dwh: process.env.DWH_VERSION,
      api: process.env.API_VERSION,
    },
    themePlugins: {
      // see default theme plugins here: https://ecosystem.vuejs.press/themes/default/plugin.html
      backToTop: false,
      seo: false,
      search: false,
    }
  }),
  lang: "de-DE",
  title: `AKTIN Data Warehouse v${process.env.DWH_VERSION} Handbook`,
  description: "AKTIN Data Warehouse documentation site, providing user manuals, support guides, and FAQs",
  head: [
    ["link", {rel: "icon", href: ".vuepress/public/images/signet.png"}],
  ],
  plugins: [
    // plugin docs: https://ecosystem.vuejs.press/plugins/
    searchPlugin({}),
  ],
}
