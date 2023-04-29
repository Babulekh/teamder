<template>
  <div class="projectList">
    <div class="projectList__list">
      <div class="projectList__project" v-for="repo in list">{{ repo.name }}</div>
    </div>
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

<style>
.projectList__list {
  display: flex;
  flex-direction: column;
}

.projectList__project {
  margin-bottom: 8px;
  padding: 0 80px;
}
</style>
