<template>
  <div id="header">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid row">
        <div class="col-7 d-flex justify-content-left"><a class="navbar-brand ms-3" href="/">박깅이의 블로그</a></div>

        <div class="col-2"><a class="" href="/logout" th:if="${session.loginMember}">로그아웃</a></div>

        <div class="col-1 d-lg-none navbar-dark me-4">
          <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!--      <div class="col-md-3 d-none d-lg-block">-->
        <div class="col-2 d-none">
          <form class="d-flex" role="search" style="float: right">
            <input class="form-control me-2 w-auto" type="search" placeholder="Search" aria-label="Search" style="" />
            <button class="btn btn-secondary" type="submit" style="max-width: 73px" align="right">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderVue',
  components: {},
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
<style scoped>
#header {
  height: 50px !important;
}
</style>
