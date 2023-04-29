<template>
  <div class="">
    <ul>
      <li v-for="repo in list">{{ repo.name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String
  },
  data() {
    return {
      list: {}
    }
  },
  async mounted() {
    const rawList = await fetch(`https://api.github.com/users/${this.$props.name}/repos`)
    this.list = await rawList.json()
  }
})
</script>

<style></style>
