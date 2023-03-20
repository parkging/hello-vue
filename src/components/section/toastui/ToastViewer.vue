<template>
  <div id="viewer"></div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all'
import Prism from 'prismjs'

import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import 'prismjs/themes/prism.css'

export default {
  components: {},
  props: {
    data: {}
  },
  data() {
    return {
      viewer: null,
      content: '# 동해물과 백두산이 마르고 닳도록\ndddd'
    }
  },
  mounted() {
    this.viewer = new Viewer({
      el: document.querySelector('#viewer'),
      viewer: true,
      plugins: [[codeSyntaxHighlight, { highlighter: Prism }]],
      height: 'auto',
      initialValue: this.content
    })
  },
  methods: {},
  watch: {}
}
</script>

<style></style>
