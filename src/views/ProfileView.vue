<template>
  <div class="profile">
    {{ $route.params.username }}
  </div>
  <div class="projects">
    <ProjectsList :name="$route.params.username" />
  </div>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue'

export default { components: { ProjectsList } }
</script>
