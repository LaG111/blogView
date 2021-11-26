<template>
  <div class="edior">
    <div id="edit" ></div>
    <!-- <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
    <h3>内容预览</h3> -->
    <!-- 实际
    <v-card >
        <textarea name="" id="" cols="30" rows="10" v-model="editorData"></textarea>
    </v-card>
    显示
    <v-card v-html="editorData" class="reset"></v-card> -->
  </div>
</template>

<script>
// 引入 wangEditor
import wangEditor from 'wangeditor'
export default {
  data() {
    return {
      editor: null,
      editorData: ''
    }
  },
  mounted() {
    const editor = new wangEditor(`#edit`)
    //编辑器的功能设置 
    editor.config.uploadImgShowBase64 = true
    editor.config.zIndex = 2
    editor.config.menus = [
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        // 'todo',
        'justify',
        'quote',
        // 'emoticon',
        'image',
        // 'video',
        // 'table',
        // 'code',
        'splitLine',
        'undo',
        'redo',
    ]

    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
       this.editorData = newHtml
    }
    // 创建编辑器
    editor.create()
    this.editor = editor
  },
  methods: {
    initEditorData(data) {
      // 通过代码获取编辑器内容
      this.editor.txt.append(data)
    }
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
}
</script>

