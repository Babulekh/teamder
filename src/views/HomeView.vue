<template>
  <TitleBlock title="Проекты" />
  <ProjectsList name="Babulekh" />
</template>

<script>
import { defineComponent } from 'vue'
import ProjectsList from '@/components/ProjectsList.vue'
import TitleBlock from '@/components/TitleBlock.vue'

export default defineComponent({
  components: { ProjectsList, TitleBlock }
})
</script>
