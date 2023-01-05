import { ExtractPropTypes } from 'vue'

export const typewriterProps = {
  words: {
    type: Array<string>,
    required: true,
    default: () => []
  },
  appendSpeed: {
    type: Number,
    default: 500
  },
  reduceSpeed: {
    type: Number,
    default: 100
  },
  cursorColor: {
    type: String,
    default: '#dddddd'
  }
} as const

export type TypewriterProps = ExtractPropTypes<typeof typewriterProps>
