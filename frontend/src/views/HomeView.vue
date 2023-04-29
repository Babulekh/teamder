<template>
  <ProjectsList :name="$store.state.userName" />
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  components: {ProjectsList},
  setup() {
    const store = useStore()
    const router = useRouter()

    // вычисляемое свойство, которое возвращает значение id из store
    const userId = computed(() => store.state.userId)
    const userName = computed(() => store.state.userName)

    // функция, которая перенаправляет пользователя на страницу авторизации, если userId равен null
    const redirectToAuthIfNeeded = () => {
      if (userId.value === null) {
        router.push('/auth')
      } else {
        router.push('/')
      }
    }

    // вызываем функцию перенаправления при монтировании компонента
    redirectToAuthIfNeeded()

    return {}
  }
}
</script>
