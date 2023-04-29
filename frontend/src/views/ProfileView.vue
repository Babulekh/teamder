<template>
  <div class="profile">
    <div class="projectManager">
      <p>
        <b>Название проекта</b><br />
        <input type="text" v-model="projectTitle" />
      </p>
      <p>
        <b>Опишите проект</b><br />
        <textarea v-model="projectDescription"></textarea>
      </p>
      <p>
        <b>Ссылка на гитхаб</b><br />
        <input type="text" v-model="projectLink" />
      </p>
      <p>
        <b>Ссылка на картинку</b><br />
        <input type="text" v-model="projectImage" />
      </p>
      <div>
        <b>Укажите требуемые скиллы</b><br />
        <div v-for="(skill, index) in userSkills" :key="index">
          <input v-model="userSkills[index]" type="text" />
          <button @click="removeSkill(index)">Remove</button>
        </div>
        <button @click="addSkill">Add Skill</button>
      </div>
      <button @click="createProject">Создать проект</button>
    </div>
  </div>
  <div class="projects">
    <h2>Зарегистрированные проекты</h2>
    <div class="">
      <div class="" v-for="(project) in projectList">
        <RouterLink class=""  :to="`/projectDetail/${project._id}`">
          {{ project.name }}
        </RouterLink>
        <br>
      </div>
    </div>

    <h2>Проекты из GitHub</h2>
    <ProjectsList :name="$store.state.userName" />
  </div>
</template>

<script>
import axios from 'axios'
import ProjectsList from '../components/ProjectsList.vue'

export default {
  components: { ProjectsList },
  data() {
    return {
      projectTitle: '',
      projectImage: '',
      projectDescription: '',
      projectLink: '',
      userSkills: [''],
      projectList: []
    }
  },
  methods: {
    addSkill() {
      this.userSkills.push('')
    },
    removeSkill(index) {
      this.userSkills.splice(index, 1)
    },
    async createProject() {
      try {
        const response = await axios.post('http://localhost:3000/api/projects/', {
          name: this.projectTitle,
          description: this.projectDescription,
          creator: this.userId,
          skills: this.userSkills,
          githubLink: this.projectLink,
          images: [this.projectImage]
        })

        console.log(response.data._id)
        this.getProjectsOfUser()
      } catch (error) {
        console.error(error.message)
        this.errorMessage = 'Cannot create project'
      }
    },
    async getProjectsOfUser() {
      console.log(this.userId)
      try {
        const response = await axios.get(
          `http://localhost:3000/api/projects/createdBy/${this.userId}`
        )
        this.projectList = await response.data
      } catch (error) {
        console.error(error.message)
        this.errorMessage = 'Cannot get projects'
      }
    }
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId
    }
  },
  async mounted() {
    await this.getProjectsOfUser()
  }
}
</script>
