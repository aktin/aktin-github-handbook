import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {searchPlugin} from '@vuepress/plugin-search'
import dotenv from 'dotenv'
import {readFileSync} from "node:fs"
import {resolve} from "node:path"
import MarkdownIt from "markdown-it"

dotenv.config()

const refsPath = resolve(process.cwd(), "docs/.vuepress/_refs.md")
const refsSrc = readFileSync(refsPath, "utf-8")
const mdTmp = new MarkdownIt()
const env = {}
mdTmp.parse(refsSrc, env)
const GLOBAL_REFS = env.references || {}

// theme docs : https://ecosystem.vuejs.press/themes/default/
export default {
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/logo.png",
    sidebarDepth: 1,
    sidebar: [
      {
        text: "Home",
        children: ["index"]
      },
      {
        text: "Installation",
        prefix: "install",
        children: [
          "server-install.md",
          "debian-install.md",
          "docker-install.md",
          "configuration.md",
          "test-operability.md"
        ],
      },
      {
        text: "Updates und Patches",
        prefix: "update",
        children: [
          "distribution-upgrade.md",
          "debian-update.md",
          "docker-update.md",
          "migration.md"
        ],
      },
      {
        text: "Sonstiges",
        prefix: "misc",
        children: [
          "hardware.md",
          "network.md",
        ]
      },
    ],
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
  head: [["link", {rel: "icon", href: ".vuepress/public/images/signet.png"}]],
  plugins: [
    searchPlugin({}),
    // inject global refs
    (app) => ({
      name: "global-link-refs",
      extendsMarkdown(md) {
        md.core.ruler.before("inline", "seed-global-refs", (state) => {
          state.env.references = {
            ...GLOBAL_REFS,
            ...(state.env.references || {}),
          }
        })
      },
    }),
  ],
}
