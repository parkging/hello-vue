<template>
  <editor :initialValue="editorText" :options="editorOptions" height="500px" initialEditType="markdown" previewStyle="tab" :plugins="plugins" />
</template>
<script>
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
// import { codeSyntaxHighlight } from '@toast-ui/editor-plugin-code-syntax-highlight'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all'
// import { colorSyntax } from '@toast-ui/editor-plugin-color-syntax'

export default {
  components: {
    editor: Editor
  },
  data() {
    return {
      editorText: 'This is initialValue.',
      previewStyle: 'tab',
      height: 'auto',
      plugins: [codeSyntaxHighlight],
      editorOptions: {
        hideModeSwitch: false
      }
    }
  }
}
</script>
