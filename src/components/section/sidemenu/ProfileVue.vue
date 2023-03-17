<template>
  <div>
    <div id="frag_profile" class="row" th:fragment="frag_profile">
      <div class="card mx-auto" style="width: 18rem">
        <img
          class="card-img-top mt-3"
          alt="..."
          src="https://lh3.googleusercontent.com/pw/AMWts8CQEiFBtM9EPf7cr3f6Fx8fOXnqeqbaM35YZI6vw-AZ3FeifaCBsEEGyaUzM-JsF9oCbz0yxU6mTtmqQeH36Rez96JGfoKFnsD2zB-wmHEAYj5DK23bx8gsduHGaTeQGVRcBGUioCbfP47oiMLf13UNqA=w1580-h1306-no?authuser=0"
        />
        <div class="card-body">
          <h5 class="card-title">박깅이</h5>
          <p class="card-text">도전하는 개발자!</p>
          <a href="https://github.com/parkging" target="_blank" class="card-link">github.</a>
          <a href="https://parkging.notion.site/parkging/Park-JunYoung-df66f129dd78442e9a84c3980174c6e5" target="_blank" class="card-link">portfolio.</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileVue',
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
