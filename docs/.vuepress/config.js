import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/assets/public/logo.png',
    sidebar: ['/', '/page1', 'page2', '/guide/page3'],
  }),

  lang: 'de-DE',
  title: 'AKTIN Data Warehouse Handbook',
  description: "AKTIN Data Warehouse documentation site, providing user manuals, support guides, and FAQs",
  head: [['link', {rel: 'icon', href: '/assets/public/signet.png'}]],
})
