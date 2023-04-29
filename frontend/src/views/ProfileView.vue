<template>
  <div class="profile"></div>
  <div class="projects">
    <ProjectsList :name="$route.params.finalCrumb" />
  </div>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue'

export default { components: { ProjectsList } }
</script>
