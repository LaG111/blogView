<template>
  <div class="Writer" >
      <v-row>
        <v-col>
    `     <v-card class="writer-sidebar " width="300px" flat>
            <v-expansion-panels focusable accordion >
              <v-expansion-panel 
                v-for="(item,i) in 2"
                :key="i"
              >
                <v-expansion-panel-header>
                  这里是还没完成的文章缓存功能
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  所以右边的save和preview按钮也是没用的
                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="editor" width="1100px" flat >
          <v-form  >
            <v-text-field
                  v-model="title"
                  label="标题"
                  class="font-weight-bold"
            ></v-text-field>

            <v-text-field
                  v-model="intro"
                  label="介绍"
                  
            ></v-text-field>

            <v-label  class="font-weight-bold">正文</v-label>
            <Editor ref="editor" ></Editor>
          </v-form>
        </v-card>`
        </v-col>
            
        <v-col >
            <v-row>
              <v-btn 
              class="success tile mx-auto mt-8"
              x-large
              :loading="loadingUpload"
              :disabled="loadingUpload"
              @click="upload()">
                <v-icon left dark >
                  mdi-arrow-up
                </v-icon>
                提交
              </v-btn>
            </v-row>
            <v-row  >
              <v-btn
              class="info tile mx-auto mt-8" 
              x-large
              :loading="loadingSave"
              :disabled="loadingSave"
              @click="save()"
              >
                <v-icon left dark >
                  mdi-check
                </v-icon>
                保存
              </v-btn>
            </v-row>
            <v-row class="" >
              <v-btn
              class="gray tile mx-auto mt-8" 
              x-large
              :loading="loadingPreview"
              :disabled="loadingPreview"
              @click="preview()"
              
              >
                <v-icon left dark >
                  mdi-eye
                </v-icon>
                预览
              </v-btn>
            </v-row>
        </v-col>
        
      </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'
// import xss from 'xss'
export default {
  name: 'Writer',
  data(){
    return {
      loadingUpload: false,
      loadingPreview:false,
      loadingSave: false,
      title: '',
      intro: '',
      content:'',
      writer:'',
      mode:''
    }
  },
  computed:{

  },
  mounted(){
    console.log(this.$route.params)
    if (this.$route.query.type==='edit'){
      this.getLastVersion()
      console.log('edit mode')
      // this.writer = this.$route.params.article.writer
      this.mode = 'edit'
    }else{
      console.log('normal mode')
      // this.writer = this.$store.state.userinfo.username
      this.mode ='normal'
    }


    // 设置过滤防止xss攻击
    // 不过滤css，因为富文本编辑器内有很多
//////TMD搞不来以后再搞
    // console.log(xss.whiteList)
    // const whiteList = xss.whiteList
    // whiteList.font = []
    // const options = {
    //   whiteList : whiteList,
    //   css : false
    // };
    // console.log(options)
    // this.myxss = new xss.FilterXSS(options) ;
  },
  created(){
  },
  methods:{
    async getLastVersion(){
      console.log(this.$route.query.articleId)
      await this.$service.article
          .getArticleInfo(this.$route.query.articleId)
          .then(ret => {
              let res=ret.data
              console.log('res')
              console.log(res)
              if (res.code === 200) {
                  this.title = res.data.article.title
                  this.intro = res.data.article.intro
                  this.$refs.editor.initEditorData(res.data.article.content)
              }
          })
    },
    upload(){
      if(!this.validate()){
        return
      }else if(this.mode === 'normal'){
        this.normalUpload()
      }else if(this.mode === 'edit'){
        this.editUpload()
      }
    },
    editUpload(){
        this.$service.article.editArticle({
          id: this.$route.query.articleId,
          title: this.title,
          intro: this.intro,
          content: this.$refs.editor.editorData,
          // 根据id找到文章，不会更新writer
          // writer: this.writer
        }).then(ret => {
          let res=ret.data
          console.log(res)
          if (res.code === 200) {
            this.$msg.success({message:'文章更新成功',time:1000})
            setTimeout(()=>{
              this.$router.push({path:'/Article',query:{id:this.$route.query.articleId}})
            },1000)
          }
        })

    },
    normalUpload(){
        this.$service.article.postArticle({
          title: this.title,
          intro: this.intro,
          content: this.$refs.editor.editorData,
          // writer直接从token中读取
          // writer: this.writer
        }).then(ret => {
          let res=ret.data
          if (res.code === 200) {
            this.$msg.success({message:'文章发布成功',time:1000})
            console.log('?????')
            console.log(this.$route.query.articleId)
            setTimeout(()=>{
              this.$router.push({path:'/Article',query:{id:res.id}})
            },1000)
          }
        })
      
    },
    // updateContent(){
    //   // this.content = this.myxss.process(this.$refs.editor.editorData)
    //   this.content = this.$refs.editor.editorData
    //   console.log(this.content)
    // },
    save(){
      let v = this
      v.loadingSave = true
      console.log("tijiaohoutai成功")
      setTimeout(()=>{
        v.loadingSave = false
      },3000)
    },
    preview() {
    },
    validate(){
      if(this.title === ''||this.intro === ''||this.$refs.editor.editorData === ''){
        this.$msg.info('不得为空')
        return false
      }else if(!this.$store.state.userinfo.isLogin){
        this.$msg.info('登陆状态错误')
        return false
      }else{
        return true
      }


    }

  },
  watch: {

  },
  components: {
    Editor
  }
}
</script>

<style scoped>
</style>