<template>
  <div>
    <input type="text" v-model="num1"/>
    <button @click="myFunction">클릭</button>
    <br>
    <input type="text" v-model.number="num1"/> +
    <input type="text" v-model.number="num2"/> =
    <span>{{ num1 + num2 }}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num1: '1',
      num2: '1'
    }
  },
  methods: {
    myFunction () {
      console.log(this.num1)
    }
  }
}
</script>

<style>

</style>
