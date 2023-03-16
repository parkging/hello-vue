<template>
<div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
</div>
</template>
<script>
export default {
  data () {
    return {
      userName: 'Park Ging',
      message: 'Welcome 박깅이의 홈페이지'
    }
  }
}
</script>
