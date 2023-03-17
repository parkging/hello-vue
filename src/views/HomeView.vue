<template>
  <div class="home">
    <Header></Header>
    <MainSection></MainSection>
    <Footer></Footer>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/HeaderVue.vue'
import MainSection from '@/components/section/MainVue.vue'
import Footer from '@/components/FooterVue.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    MainSection,
    Footer
  }
}
</script>
