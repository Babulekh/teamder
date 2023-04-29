<template>
  <div class="">
    <h2>Рекомендуемые проекты</h2>
    <div class="" v-for="(project) in getFilteredProjects" :key="project._id">
        <div class="">{{ project.name }}</div>
        <div class="">{{ project.description }}</div>
        <div class="">автор: {{ project.creator }}</div>
        <button @click="applyProject(project._id)">Принять</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        projectsList: [],
    }
  },
  methods: {
    async getAllProjects() {
      console.log(this.userId)
      try {
        const response = await axios.get('http://localhost:3000/api/projects/')
        this.projectsList = await response.data
      } catch (error) {
        console.error(error.message)
        this.errorMessage = 'Cannot get projects'
      }
    },
    applyProject(id) {
        // TODO отправка заявки на сервер
    }
  },
  async mounted() {
    await this.getAllProjects();
  },
  computed: {
    getFilteredProjects() {
        return this.projectsList.filter((project) => project.creator !== this.$store.state.userId);
    }
  }
}
</script>
