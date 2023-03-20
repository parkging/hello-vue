<template>
  <div>
    <div class="row">
      <h4 class="mt-4 col">
        <span class="me-2">{{ boardName }}</span>
        <span class="badge rounded-pill text-bg-secondary">{{ postCount }}</span>
      </h4>
      <div class="col d-flex justify-content-end" th:if="${session.loginMember}">
        <button class="btn btn-secondary my-auto me-5" th:onclick="|location.href='@{/post/0/add}'|">글쓰기</button>
      </div>
    </div>

    <div class="row">
      <div class="list-group" style="min-height: 760px">
        <a
          th:href="@{/post/{postId} (postId=${postForm?.postId})}"
          class="list-group-item list-group-item-action"
          v-for="post in posts"
          :key="post.postId"
          @click="$router.push({ name: 'post', params: { postId: post.postId } })"
        >
          <div class="row">
            <div :class="post.thumbnailImage === '' ? 'col-12' : 'col-9'">
              <small class="">{{ post.categoryFullName }}</small>

              <div class="d-flex w-100 justify-content-between mb-1 mt-2">
                <h5 class="mb-1">{{ post.title }}</h5>
              </div>

              <p class="mb-1" style="overflow: hidden">{{ post.preview }}</p>

              <small class="text-muted">{{ post.member }}</small>
              <small class="text-muted">·</small>
              <small class="text-muted"> {{ post.createDate }}</small>
            </div>
            <div class="col-3 d-flex justify-content-center" style="max-width: 200px">
              <img class="img-fluid" style="object-fit: contain" :src="post.thumbnailImage" />
            </div>
          </div>
        </a>

        <p th:if="not ${boardForm?.postCount}" class="mx-auto my-auto">{{ postCount > 0 ? '' : '게시글이 존재하지 않습니다.' }}</p>
      </div>

      <div class="d-flex justify-content-center mt-4">
        <div
          class="btn-group me-2 mt-2"
          role="group"
          aria-label="Second group"
          th:with="start=${boardForm?.startPage?:1}, current=${boardForm?.currentPage?:1}, end=${boardForm?.endPage?:1}, cnt=${boardForm?.postCount?:1}, size=${boardForm?.pageSize?:1}"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            th:if="${start gt 1} ? true : false"
            th:onclick="|fetchPage('@{/boarder/{categoryName}?page={pageNum}(categoryName=${categoryName},pageNum=${start-2})}','frag_boarder')|"
            v-if="startPage > 1"
          >
            &lt;
          </button>
          <button
            type="button"
            style="width: 40px"
            th:each="pageNum : ${#numbers.sequence(start, end)}"
            th:class="${pageNum eq current} ? 'btn btn-secondary' : 'btn btn-outline-secondary'"
            th:text="${pageNum}"
            th:onclick="|fetchPage('@{/boarder/{categoryName}?page={pageNum}(categoryName=${categoryName},pageNum=${pageNum}-1)}','frag_boarder')|"
            :class="startPage + i - 1 === currentPage ? 'btn btn-secondary' : 'btn btn-outline-secondary'"
            :key="i"
            v-for="i in endPage - startPage + 1"
          >
            {{ startPage + i - 1 }}
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary"
            th:if="${end lt ((cnt-1)/size)+1 } ? true : false"
            th:onclick="|fetchPage('@{/boarder/{categoryName}?page={pageNum}(categoryName=${categoryName},pageNum=${end})}','frag_boarder')|"
            v-if="endPage < (postCount - 1) / pageSize + 1"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardVue',
  components: {},
  data() {
    return {
      boardName: '전체 글',
      startPage: 1,
      currentPage: 1,
      endPage: 2,
      postCount: 6,
      pageSize: 5,
      posts: [
        {
          postId: '1',
          categoryFullName: '개발',
          title: '블로그 개발기(1)',
          preview: '출처 바로가기httpsmosei.tistory.comentryEAB8B0ECA1B4ED9484EBA19CECA09DED8AB8EBA5BCgitrepositoryEC9790EC97B...',
          thumbnailImage: '',
          member: '박깅이',
          createDate: '2022-03-05'
        },
        {
          postId: '2',
          categoryFullName: '개발',
          title: '블로그 개발기(2)',
          preview: '이번 글에서는 비지니스 요구사항을 정리하고 화면설계서를 작성해 보려고 한다. 요구사항 목록 회원 회원 등록 회원 로그인 게시글 게시글 목록...',
          thumbnailImage: '',
          member: '박깅이',
          createDate: '2022-03-05'
        },
        {
          postId: '3',
          categoryFullName: '개발',
          title: '블로그 개발기(3)',
          preview:
            '아바시리에서 유빙선을 타도 막상 유빙이 없는 경우가 많다. 하지만 유빙을 못보는 대신 저~ 멀리 시레코토를 볼 수 있다. 유빙이 있으면 날씨가 좋지 않아 시레코토..',
          thumbnailImage:
            'https://lh3.googleusercontent.com/pw/AMWts8CQEiFBtM9EPf7cr3f6Fx8fOXnqeqbaM35YZI6vw-AZ3FeifaCBsEEGyaUzM-JsF9oCbz0yxU6mTtmqQeH36Rez96JGfoKFnsD2zB-wmHEAYj5DK23bx8gsduHGaTeQGVRcBGUioCbfP47oiMLf13UNqA=w1580-h1306-no?authuser=0',
          member: '박깅이',
          createDate: '2022-03-05'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
