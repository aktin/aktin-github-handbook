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
          children: [
            {
              text: "Server Installation",
              link: "server.md"
            },
            {
              text: "Debian Installation",
              link: "debian.md"
            },
            {
              text: "Docker Installation",
              link: "docker.md"
            },
            {
              text: "Konfiguration",
              link: "configuration.md"
            },
            {
              text: "Funktionsfähigkeit testen",
              link: "test-operability.md"
            }
          ],
        },
        {
          text: "Updates",
          prefix: "update",
          children: [],
        },
        {
          text: "Schnittstellen",
          prefix: "interfaces",
          children: [
            {
              text: "Übersicht",
              link: "index.md"
            },
            {
              text: "Basismodul",
              link: "Basismodul.md"
            },
            {
              text: "Einführung in CDA",
              link: "cda-einfuehrung.md"
            },
            {
              text: "CDA Kurzanleitung",
              link: "cda-quickstart.md"
            },
            {
              text: "CDA Release v1.21",
              link: "cda-release-v1.21.md"
            },
            {
              text: "CDA Release v1.26",
              link: "cda-release-v1.26.md"
            },
            {
              text: "HL7 FHIR",
              link: "hl7-fhir.md"
            },
            {
              text: "IHE XDS.b SOAP",
              link: "xds.md"
            }
          ],
        },
        {
          text: "Entwicklung",
          prefix: "development",
          children: [
            {
              text: "Demo Server",
              link: "demo-server.md"
            },
            {
              text: "Roadmap",
              link: "roadmap.md"
            },
            {
              text: "Changelog",
              link: "changelog.md"
            },
                        {
              text: "i2b2 Handbuch",
              link: "i2b2-manual.md"
            }
          ],
        },
        {
          text: "Sonstiges",
          prefix: "misc",
          children: [
            {
              text: "Netzwerk",
              link: "network.md"
            },
            {
              text: "Fehler",
              link: "errors.md"
            },
            {
              text: "FAQ",
              link: "faq.md"
            },
            {
              text: "Support",
              link: "support.md"
            }
          ],
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
