<template>
  <div>ddd</div>
  <!-- <div ref="groundElRef"></div> -->
  <editor :initialValue="editorText" :options="editorOptions" height="500px" initialEditType="wysiwyg" previewStyle="vertical" />
</template>
<script>
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

export default {
  components: {
    editor: Editor
  },
  mounted() {},
  data() {
    return {
      editorText: 'This is initialValue.',
      editorOptions: {
        hideModeSwitch: true
      }
    }
  }
}
</script>
