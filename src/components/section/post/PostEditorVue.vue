<template>
  <div>
    <form
      id="postForm"
      class="container"
      enctype="multipart/form-data"
      th:object="${postForm}"
      th:action="${postId}? @{'/post/'+ ${postId}+'/update'} : @{'/post/0/add'}"
      action="/post/add"
      method="post"
    >
      <div class="row w-100 my-4 d-flex">
        <div class="col flex-fill">
          <input type="hidden" id="postId" th:field="${postForm.postId}" />
        </div>
        <div class="col flex-fill">
          <label class="form-label" for="title">카테고리</label>
        </div>
        <div class="col flex-fill">
          <select class="form-select" aria-label="Default select example" id="category" th:field="${postForm.categoryId}">
            <option selected value="">카테고리를 선택하세요</option>
            <option
              th:each="categoryForm : ${categoryForms}"
              th:value="${categoryForm.id}"
              th:disabled="${categoryForm.hasChild}?true:false"
              th:selected="${categoryForm.id eq postForm.categoryId}"
              th:text="${categoryForm.parentId ge 1 ? '&nbsp;'+categoryForm.name : categoryForm.name}"
            ></option>
          </select>
        </div>
      </div>

      <div class="row w-100 d-flex">
        <div class="col flex-fill">
          <label class="form-label" for="title">제목</label>
        </div>
        <div class="col flex-fill">
          <input class="form-control" type="text" id="title" th:field="${postForm.title}" />
        </div>
      </div>

      <div class="row w-100 my-4 d-flex">
        <div class="col flex-fill">
          <label class="form-label" for="thumbnailImage"></label>
        </div>
        <div class="col flex-fill">
          <input class="form-control" type="file" id="thumbnailImage" th:field="${postForm.thumbnailImage}" />
        </div>
        <div class="col flex-fill">
          <label class="form-label" th:text="${postForm.thumbnailImage?.name}"></label>
        </div>
      </div>

      <div class="row w-100 d-flex">
        <div class="col flex-fill">
          <label class="form-label" for="editor">내용</label>
        </div>

        <div class="col flex-fill"></div>
      </div>

      <div class="row w-100 my-2">
        <div class="d-flex flex-row justify-content-end">
          <div class="me-2">
            <button type="button" onclick="save()" class="btn border border-primary">저장</button>
          </div>
          <div class="me-2">
            <button type="button" onclick="saveTemp()" class="btn border border-warning">임시저장</button>
          </div>
          <div class="me-2">
            <button type="button" onclick="cancel();" class="btn border border-danger">취소</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
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
