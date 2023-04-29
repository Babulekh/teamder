<template>
  <header class="header">
    <div class="logo">Teamder</div>
    <div class="userCard">
      <div class="avatar"></div>
      <div class="userCard__info">
        <div class="userCard__name">{{ getUserName }}</div>
        <div class="userCard__role">{{ getUserBio }}</div>
        <div class="userCard__skills">
          <br>
          <p>Скиллы</p>
          <div class="userCard__skill" v-for="(skill) in getUserSkills">
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
    <menu class="headerMenu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="`/profile/${getUserName}`">Profile</RouterLink>
      <RouterLink to="/news">Рекомендации</RouterLink>
    </menu>
  </header>
  <main>
    <TitleBlock :title="$route.params.finalCrumb || $route.name" />
    <div class="content">
      <RouterView />
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TitleBlock from '@/components/TitleBlock.vue'

export default {
  components: {
    TitleBlock
  },
  computed: {
    getUserName() {
      return this.$store.getters.getUserName
    },
    getUserBio() {
      return this.$store.getters.getUserBio
    },
    getUserSkills() {
      return this.$store.getters.getUserSkills
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: sticky;
  top: 0;
  box-shadow: 3px 3px 3px #f3f1fb;
}

.logo {
  margin-bottom: 40px;
}

.userCard {
  margin-bottom: 80px;
}

.headerMenu {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.headerMenu .router-link-active {
  font-weight: bold;
}

.content {
  padding: 0 80px;
}
</style>
