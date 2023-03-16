<template>
  <div>
    <input type="text" name="" id="" :value="userId" readonly />
    <img :src="imgSrc" alt="" style="width: 100%; height: auto" />
    <br />
    <input type="text" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'dd',
      imgSrc: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg',
      txt1: ''
    }
  }
}
</script>

<style></style>
