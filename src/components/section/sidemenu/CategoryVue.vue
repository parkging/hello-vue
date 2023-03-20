<template>
  <div>
    <div id="frag_category" class="mt-1 row" th:fragment="frag_category" th:object="${categoryForms}">
      <strong class="d-none d-md-block h7 my-2 mt-4" style="cursor: pointer" th:onclick="|location.href='@{/}'|"
        >카테고리
        <span class="badge rounded-pill text-bg-secondary"> {{ allPostCount }} </span>
      </strong>
      <hr class="d-none d-md-block my-2" />
      <ul class="list-group list-group-flush">
        <div :key="category.categoryId" v-for="category in categories">
          <li
            class="list-group-item"
            style="cursor: pointer"
            onMouseover="this.style.background='ghostwhite';"
            onMouseout="this.style.background='white';"
            th:onclick="|location.href='@{/boarder/{categoryName}(categoryName=${categoryForm.name})}'|"
          >
            <span class="d-inline" v-if="category.parentId > 0">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="d-inline me-1"> {{ category.categoryName }} </span>
            <span class="badge rounded-pill text-bg-secondary"> {{ category.postCount }}</span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryVue',
  components: {},
  data() {
    return {
      categories: [
        { categoryId: 1, categoryName: '일상과생각', postCount: 8, parentId: 0 },
        { categoryId: 2, categoryName: '개발', postCount: 4, parentId: 0 }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {
    allPostCount: {
      get: function () {
        let sum = 0
        for (const category of this.categories) {
          console.log(category.postCount)
          sum += category.postCount
        }
        return sum
      }
    }
  },
  methods: {}
}
</script>
