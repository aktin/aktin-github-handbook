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
    sidebar: {
      "/": [
        {
          text: "Home",
          children: ["index"]
        },
        {
          text: "Installation",
          prefix: "install",
          children: ["server.md", "debian.md", "docker.md", "configuration.md",
            "test-operability.md"],
        },
        {
          text: "Betrieb",
          prefix: "operation",
          children: ["i2b2-manual.md"],
        },
        {
          text: "Updates",
          prefix: "update",
          children: [],
        },
        {
          text: "Importschnitstelle",
          prefix: "import",
          children: [],
        },
        {
          text: "Sonstiges",
          prefix: "misc",
          children: ["network.md", "errors.md", "faq.md"],
        },
        {
          children: ["changelog.md"],
        }
      ],
    },
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: "Zuletzt aktualisiert",
    contributors: false,
    versions: {
      dwh: process.env.DWH_VERSION,
      api: process.env.API_VERSION,
      ubuntu: process.env.UBUNTU_VERSION,
      codename: process.env.UBUNTU_CODENAME,
    },
    themePlugins: {
      // see default theme plugins here: https://ecosystem.vuejs.press/themes/default/plugin.html
      backToTop: false,
      seo: false,
      sitemap: false,
    }
  }),
  lang: "de-DE",
  title: `AKTIN Data Warehouse v${process.env.DWH_VERSION} Handbuch`,
  description: "AKTIN Data Warehouse documentation site, providing user manuals, support guides, and FAQs",
  head: [
    ["link", {rel: "icon", href: ".vuepress/public/images/signet.png"}],
  ],
  plugins: [
    // plugin docs: https://ecosystem.vuejs.press/plugins/
    searchPlugin({}),
  ],
}
