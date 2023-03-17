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
import Header from '@/components/layout/HeaderVue.vue'
import MainSection from '@/components/layout/section/MainVue.vue'
import Footer from '@/components/layout/FooterVue.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    MainSection,
    Footer
  }
}
</script>
