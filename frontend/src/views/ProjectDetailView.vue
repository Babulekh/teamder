<template>
  <div>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <div>
      <p>Skills required:</p>
      <ul>
        <li v-for="skill in project.skills">{{ skill }}</li>
      </ul>
    </div>
    <p>Created by: {{ project.creator }}</p>
    <p>Created at: {{ project.dateCreated }}</p>
    <p><a :href="project.githubLink">Link to Github project</a></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      project: {},
    }
  },
  async mounted() {
    const projectId = this.$route.params.id
    try {
      const response = await axios.get(`http://localhost:3000/api/projects/${projectId}`)
      this.project = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>