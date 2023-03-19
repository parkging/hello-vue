<template>
  <div v-if='article'>
    <div id="viewer"/>
  </div>
</template>
<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'highlight.js/styles/github.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import codeSyntaxHightlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';

export default {
  components: {}, 
  data() {
  return {
      sampleData: ''
    }
  },
  setup() {}, 
  created() {}, 
  mounted: {
  getViewer() {
      this.getArticle().then((res) => {
        new Viewer({
          el: document.querySelector('#viewer'),
          // 표시하고자 하는 내용은 여기에 들어간다.
          initialValue: res,
          plugins: [[codeSyntaxHightlight, { hljs }]],
        });
      });
    },
},

  unmounted() {},
  methods: {}
}
</script>