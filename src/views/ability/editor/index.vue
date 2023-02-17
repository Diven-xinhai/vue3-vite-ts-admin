<template>
  <div class="editor-box">
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <el-button type="primary" @click="getContent">获取内容</el-button>
    <div class="content-box" v-html="showContent"></div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
const mode = ref("default"); // 或 'simple'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

let showContent = ref("");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      //上传图片配置
      // server: baseUrl + "/microsoft/api/v1/plane/messageTemplate/uploadImage", //上传接口地址
      fieldName: "file", //上传文件名
      methods: "post",
      // timeout: 5 * 1000, // 5s
      // meta: { token: "xxx", a: 100 },
      metaWithUrl: true, // 参数拼接到 url 上
      // headers: { Accept: "text/x-json" },
      maxFileSize: 10 * 1024 * 1024, // 10M
      // base64LimitSize: 5 * 1024, // 5kb 以下插入 base64
      onBeforeUpload(files: any) {
        if (files.extension == "svg") {
          // globalProperties.$message.info("不支持此格式图片");
          return false; // 返回哪些文件可以上传 会阻止上传
        }
      },
      onProgress(progress: any) {
        console.log("onProgress", progress);
      },
      onSuccess(file: any, res: any) {
        console.log("onSuccess", file, res);
      },
      onFailed(file: any, res: any) {
        console.log("onFailed", file, res);
      },
      onError(file: any, err: any, res: any) {
        console.error("onError", file, err, res);
      },

      // // 用户自定义插入图片
      customInsert(res: any, insertFn: any) {
        const imgInfo = res || {};
        //data为后端返回的图片地址
        const { data } = imgInfo;
        if (!data) throw new Error(`Image url is empty`);
        // 自己插入图片
        insertFn(data);
      },
    },
  },
};

const getContent = () => {
  console.log(valueHtml.value);
  showContent.value = valueHtml.value;
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
<style lang="scss" scoped>
.editor-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .content-box {
    width: 100%;
    min-height: 100px;
    border: 1px solid #ccc;
  }
}
</style>
