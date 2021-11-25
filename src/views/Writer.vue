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
                  Item
                </v-expansion-panel-header>

                <v-expansion-panel-content>
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
            <Editor ref="editor"></Editor>
          </v-form>
        </v-card>`
        </v-col>
            
        <v-col >
            <v-row>
              <v-btn 
              class="success tile mx-auto mt-12"
              large
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
              class="info tile mx-auto mt-16" 
              large
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
              class="gray tile mx-auto mt-10" 
              large
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
import Dialog from '@/components/Dialog.vue'
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
    }
  },
  computed:{

  },
  mounted(){
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
  methods:{
    updateContent(){
      // this.content = this.myxss.process(this.$refs.editor.editorData)
      this.content = this.$refs.editor.editorData
      console.log(this.content)
    },
    upload () {
      this.updateContent()
      this.$service.article.postArticle({
        title: this.title,
        intro: this.intro,
        content: this.content
      }).then(ret => {
        let res=ret.data
        console.log(res)
        if (res.code === 200) {
          this.$msg.success({message:'文章发布成功',time:1000})
          setTimeout(()=>{
            this.$router.push({path:'/Article',query:{id:res.id}})
          },1000)
        }
      })
    },
    save(){
      let v = this
      v.loadingSave = true
      console.log("tijiaohoutai成功")
      setTimeout(()=>{
        v.loadingSave = false
      },3000)
    },
    preview() {
      this.$refs.Dia.openDialog()
      console.log("tijiaohoutai成功")

    },


  },
  watch: {

  },
  components: {
    Dialog,
    Editor
  }
}
</script>

<style scoped>
</style>