vue.
<template>
  <div>
    <div>
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLange" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLange" />
      <label for="js">JS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLange" />
      <label for="css">CSS</label>
    </div>
    <div>선택한 지역: {{ favoriteLange }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteLange: []
    }
  }
}
</script>

<style></style>
