import { defineClientConfig } from "vuepress/client"
import CustomFooter from "./components/CustomFooter.vue"

export default defineClientConfig({
  rootComponents: [CustomFooter],
})
