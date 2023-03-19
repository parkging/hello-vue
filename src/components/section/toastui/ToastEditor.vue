<template>
  <div class="toast-edit" id="editor" ref="editor"></div>
</template>

<script>
// import "prismjs/themes/prism.css";
// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
// import "tui-color-picker/dist/tui-color-picker.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
// import Prism from "prismjs";
// import "prismjs/components/prism-c";
// import "prismjs/components/prism-cpp";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-python";
// import "@toast-ui/editor/dist/i18n/ko-kr";
// import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
// import Editor from "@toast-ui/editor";
// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

// import 'codemirror/lib/codemirror.css'; // codemirror 스타일
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import 'highlight.js/styles/github.css'; // code block highlight 스타일

// toast ui 설치 시 highlight js 역시 자동으로 설치된다.
import codeSyntaxHightlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';

export default {
  components: {
  },
  props: {
    data: {
      type: String,
      default: "",
    },
   
  },
  data() {
    return {
      changedPrism: null,
      editor: null,
     
    };
  },
  mounted() {
    // this.changedPrism = Prism;

    this.setEditor();
    if (this.data) {
      try {
        this.editor.setMarkdown(this.data);
      } catch (e) {
        this.editor.setHTML(this.data);
      }
    }
  },
  methods: {
    setEditor() {
      this.editor = new Editor({
        // el: document.querySelector("#editor"),
        el: this.$refs.editor,
      plugins: [[codeSyntaxHightlight, { hljs }]],
        // plugins: [
        // codeSyntaxHightlight
        // //   // colorSyntax,
        // //   // [codeSyntaxHighlight, { highlighter: this.changedPrism }]
        // ],
        initialEditType: "markdown",
      // previewStyle: "tab",
      // height: "auto",
        // language: "ko",
        // events: {
        //   change: this.onChangeEditor,
        // },
        // hooks: {
        //   addImageBlobHook: this.addImageBlobHook,
        // },
      });
    },

    // onChangeEditor() {
    //   this.editorText = this.editor.getMarkdown();
    // },
  },
  watch: {
    // // watch를 활용한 props 변경 감지
    // data(newValue) {
    //   if (this.editorText !== newValue) {
    //     this.editor.setMarkdown(newValue);
    //   }
    // },

    // editorText(newValue, oldValue) {
    //   if (newValue !== oldValue) {
    //     this.$emit("setContent", this.editor.getMarkdown());
    //   }
    // },
  },
};
</script>

<style>

</style>