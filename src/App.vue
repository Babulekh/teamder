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
  <wrapper>
    <RouterView />
  </wrapper>
  <footer></footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.header {
  height: 100vh;
  width: 100%;
  top: 0;
  position: sticky;
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
</style>
