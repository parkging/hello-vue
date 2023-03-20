<template>
  <div>
    <div id="frag_side_menu" class="" th:fragment="frag_side_menu">
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <!--        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>-->
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body container">
          <ProfileVue></ProfileVue>
          <CategoryVue></CategoryVue>
        </div>
      </div>

      <div class="container d-none d-lg-block">
        <ProfileVue></ProfileVue>
        <CategoryVue></CategoryVue>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileVue from '@/components/section/sidemenu/ProfileVue.vue'
import CategoryVue from '@/components/section/sidemenu/CategoryVue.vue'
export default {
  name: 'SideMenuVue',
  components: {
    ProfileVue,
    CategoryVue
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
