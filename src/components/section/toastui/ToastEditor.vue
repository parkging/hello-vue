<template>
  <div class="toast-edit" id="editor"></div>
</template>

<script>
import Editor from '@toast-ui/editor'
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
      editor: null,
      content: '동해물과 백두산이 마르고 닳도록'
    }
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector('#editor'),
      plugins: [[codeSyntaxHighlight, { highlighter: Prism }]],
      initialEditType: 'markdown',
      previewStyle: 'tab',
      hideModeSwitch: true,
      height: 'auto',
      initialValue: this.content
    })
  },
  methods: {},
  watch: {}
}
</script>

<style></style>
