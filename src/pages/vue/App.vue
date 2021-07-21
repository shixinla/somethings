<template>
  <div class="app-container">hello vue</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../global.css'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.app-container {
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>