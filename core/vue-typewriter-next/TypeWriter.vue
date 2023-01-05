<template>
  <label ref="typewriterNode" :class="[ns.be('label-container')]"></label>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, toRefs } from 'vue'
  import { typewriterProps, TypewriterProps } from './typewriter-props'
  import { PrintTypeWriter } from './use-typewriter'
  import { useNameSpace } from '../hooks/useNameSpace'

  export default defineComponent({
    name: 'VueTypeWriterNext',
    props: typewriterProps,
    setup(props: TypewriterProps) {
      const { words, appendSpeed, reduceSpeed } = toRefs(props)
      const typewriterNode = ref<HTMLLabelElement>()
      const ns = useNameSpace('vue-typewriter-next')

      onMounted(() => {
        // eslint-disable-next-line no-new
        new PrintTypeWriter(typewriterNode.value!, words.value, appendSpeed.value, reduceSpeed.value)
      })

      return { typewriterNode, ns }
    }
  })
</script>

<style lang="scss" src="./typewriter.scss"></style>
