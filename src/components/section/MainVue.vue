<template>
  <div class="container" id="section">
    <div class="row">
      <div class="col-lg-9 col-md-12" id="content">
        <router-view></router-view>
      </div>
      <div class="col-md-3 sol-sm-0 mt-4">
        <SideMenuVue></SideMenuVue>
      </div>
    </div>
  </div>
</template>
<script>
// import BoardVue from '@/components/section/board/BoardVue.vue'
import SideMenuVue from '@/components/section/sidemenu/SideMenuVue.vue'
export default {
  name: 'MainSection',
  components: {
    SideMenuVue
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    this.$router.push('board')
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
#section {
  min-height: calc(100vh - 198px) !important;
}
</style>
