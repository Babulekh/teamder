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
    <p>
      <a :href="`https://github.com/${projectOwner}/${project.githubLink}`">
        Link to Github project
      </a>
    </p>
    <div class="readme" v-html="readme"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'

export default {
  data() {
    return {
      project: {},
      projectOwner: '',
      rawReadme: ''
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

    try {
      const response = await axios.get(`http://localhost:3000/api/users/${this.project.creator}`)
      this.projectOwner = response.data.name
    } catch (error) {
      console.log(`не удалось сохранить данные, статус: ${error}`)
    }

    try {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${this.projectOwner}/${this.project.githubLink}/main/README.md`
      )
      this.rawReadme = response.data
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    readme() {
      return marked(this.rawReadme)
    }
  }
}
</script>
