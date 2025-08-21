import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from "@vuepress/theme-default"
import dotenv from 'dotenv'

dotenv.config()

export default defineUserConfig({
  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/images/logo.png',
    sidebar: ['/', '/folder1/page1', 'folder2/page2'],
    repo: 'https://github.com/aktin/aktin-github-handbook.git',
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: 'Zuletzt aktualisiert',
    contributors: false,

    versions: {
      dwh: process.env.DWH_VERSION,
      api: process.env.API_VERSION,
    }
  }),

  lang: 'de-DE',
  title: `AKTIN Data Warehouse ${process.env.DWH_VERSION}`,
  description: "AKTIN Data Warehouse documentation site, providing user manuals, support guides, and FAQs",

  head: [
    ['link', {rel: 'icon', href: '.vuepress/public/images/signet.png'}],
  ],
})
