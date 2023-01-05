import { App } from 'vue'
import VueTypewriterNext from './vue-typewriter-next/TypeWriter.vue'

export { VueTypewriterNext }
export default {
  install(app: App) {
    app.component(VueTypewriterNext.name, VueTypewriterNext)
  }
}
