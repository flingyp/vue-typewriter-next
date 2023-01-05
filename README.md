<div align="center">
    <h1>Vue Typewriter Next</h1>
    <h3>Typewriter of Vue3 Component</h3>
</div>

## Installation

`pnpm install vue-typewriter-next`

## Usage

### Import Component

**Import the Typewriter Component in your Vue Component File**

```ts
import { VueTypewriterNext } from 'vue-typewriter-next'
```

**Register the Typewriter Component to Global Component**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueTypewriterNext from 'vue-typewriter-next'

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
