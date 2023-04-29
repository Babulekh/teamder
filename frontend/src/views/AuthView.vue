<template>
  <div class="page">
    <div class="authPage">
      <div class="v-authBlock__registrationWrapper">
        <h2>Регистрация</h2>
        <p>
          <b>Ваше имя:</b><br>
          <input type="text" v-model="username" />
        </p>
        <p>
          <b>Опишите себя</b><br>
          <textarea v-model="userBio"></textarea>
        </p>
        <p>
          <b>Укажите опыт работы</b><br>
          <input type="text" v-model="userExpirience" />
        </p>
        <div>
          <b>Укажите ваши скиллы</b><br>
          <div v-for="(skill, index) in userSkills" :key="index">
            <input v-model="userSkills[index]" type="text" />
            <button @click="removeSkill(index)">Remove</button>
          </div>
          <button @click="addSkill">Add Skill</button>
        </div>
        <br>
        <button @click="registrateUser">Зарегистрироваться</button>
      </div>
      <div class="v-authBlock__loginWrapper">
        <h2>Уже зарегистрировались? Введите свое имя:</h2>
        <input type="text" v-model="username" />
        <button @click="loginUser">Войти</button>
      </div>
      <div class="status">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      userBio: '',
      userExpirience: 0,
      userSkills: [''],
      errorMessage: '',
    }
  },
  methods: {
    addSkill() {
      this.userSkills.push('')
    },
    removeSkill(index) {
      this.userSkills.splice(index, 1)
    },
    async setUser(userId) {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${userId}`)
        this.$store.commit('setUserId', response.data.id)
        this.$store.commit('setUserName', response.data.name)
        this.$store.commit('setUserBio', response.data.description)
        this.$store.commit('setUserSkills', response.data.skills)
      } catch (error) {
        console.log(`не удалось сохранить данные, статус: ${error}`)
      }
    },

    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/findByName', {
          name: this.username
        })
        await this.setUser(response.data.id)
        console.log(response.data.id)
        this.$router.push('/')
      } catch (error) {
        console.error(error.message)
        this.errorMessage = 'User not found'
      }
    },

    async registrateUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/', {
          name: this.username,
          skills: this.userSkills,
          experience: +this.userExpirience,
          description: this.userBio
        })
        await this.setUser(response.data._id)
        console.log(response.data._id)
        this.$router.push('/')
      } catch (error) {
        console.error(error.message)
        this.errorMessage = 'Cannot create user'
      }
    }
  }
}
</script>

<style scoped>
.authPage {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
