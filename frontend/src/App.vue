<template>
  <header class="header">
    <div class="logo">Teamder</div>
    <div class="userCard">
      <div class="avatar"></div>
      <div class="userCard__info">
        <div class="userCard__name">Babulekh</div>
        <div class="userCard__role">Frontend web developer</div>
      </div>
    </div>
    <menu class="headerMenu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/profile/Babulekh">Profile</RouterLink>
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
  }
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
