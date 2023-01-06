<div align="center">
  <h2>Vue Typewriter Next</h2>
  <h6>Typewriter of Vue3 Component</h6>

<a href="https://www.npmjs.com/package/vue-typewriter-next" target="__blank"><img src="https://img.shields.io/npm/v/vue-typewriter-next" alt="NPM version"></a> 
<a href="https://www.npmjs.com/package/vue-typewriter-next" target="__blank"><img src="https://img.shields.io/npm/l/vue-typewriter-next?style=plastic" alt="NPM version"></a> 
<a href="https://www.npmjs.com/package/@flypeng/tool" target="__blank"><img src="https://img.shields.io/npm/dm/vue-typewriter-next" alt="NPM downloads"></a>

</div>

## Installation

`pnpm install vue-typewriter-next`

## Usage

### Import Component

**Import the Typewriter Component in your Vue Component File**

```ts
import { VueTypewriterNext } from 'vue-typewriter-next'
import 'vue-typewriter-next/dist/style.css'
```

**Register the Typewriter Component to Global Component**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueTypewriterNext from 'vue-typewriter-next'
import 'vue-typewriter-next/dist/style.css'

const app = createApp(App)
app.use(VueTypewriterNext)
app.mount('#app')
```

### Using Component

```html
<vue-typewriter-next
  :words="['Vue Typewriter Next', 'Typewriter of Vue3 Component', 'I Love Coding']"
></vue-typewriter-next>
```
