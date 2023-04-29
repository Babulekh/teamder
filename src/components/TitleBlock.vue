<template>
  <div class="titleBlock">
    <h1 class="titleBlock__title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.titleBlock {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  padding-left: 76px;
  background: linear-gradient(118.16deg, #a0a3ef 0%, rgba(224, 231, 243, 0) 67.43%),
    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fcfafe 100%);
}

.titleBlock__title {
  font-size: 34px;
  line-height: 50px;
}
</style>
