<template>
  <div>
    <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      class2: { active: false, 'text-red': true }
    }
  }
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
