<template>
  <div>
    <form id="postForm" class="container" action="/post/add" method="post" th:object="${postForm}">
      <div class="row">
        <div class="row w-100 mt-4 d-flex">
          <div class="col flex-fill">
            <input type="hidden" id="postId" :value="post.postId" />
          </div>
          <div class="col">
            <p>{{ post.categoryFullName }}</p>
          </div>
          <div class="col d-flex justify-content-end" th:if="${session.loginMember}">
            <button type="button" class="btn btn-secondary" th:onclick="|location.href='@{{postId}/edit(postId=${postForm.postId})}'|">수정하기</button>
          </div>
        </div>

        <div class="row w-100 d-flex d-none">
          <div
            th:style="|background-image: url('data:${postForm.based64ThumbnailImage?.contentType};base64,${postForm.based64ThumbnailImage?.based64ImgContent}');|"
          ></div>
          <!--        <img th:src="'data:' + ${postForm.based64ThumbnailImage?.contentType} + ';base64,' + ${postForm.based64ThumbnailImage?.based64ImgContent}">-->
          <hr class="mt-2" />
        </div>

        <div class="row w-100 d-flex">
          <h2>{{ post.title }}</h2>
          <p class="text-muted fw-light" style="font-size: 14px; height: 20px">{{ post.member }} · {{ post.createDate }}</p>
          <hr class="mt-2" />
        </div>
      </div>

      <div class="row w-100 d-flex" style="min-height: 450px">
        <div class="col flex-fill">viewer</div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {
    postId() {
      return this.$route.params.postId
    }
  },
  data() {
    return {
      post: {
        postId: '1',
        categoryFullName: '개발',
        title: '블로그 개발기(1)',
        preview: '이번 글에서는 비지니스 요구사항을 정리하고 화면설계서를 작성해 보려고 한다. 요구사항 목록 회원 회원 등록 회원 로그인 게시글 게시글 목록...',
        member: '박깅이',
        createDate: '2022-03-05'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
