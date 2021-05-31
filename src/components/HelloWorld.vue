<template>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <router-link to="/LifeCycle">LifeCycle</router-link>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p class="p-cls">
    Edit
    <code class="code-cls">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
.p-cls {
  color: red;
  .code-cls {
    color: blue;
  }
}
</style>
