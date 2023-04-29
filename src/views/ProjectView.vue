<template>
  <div class="project">
    {{ project.name }}
  </div>
</template>

<script>
export default {
  data() {
    return { project: {} }
  },
  async mounted() {
    const rawProject = await fetch(
      `https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.finalCrumb}`
    )
    this.project = await rawProject.json()
  }
}
</script>

<style></style>
