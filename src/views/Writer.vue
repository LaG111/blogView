<template>
  <v-app class="Writer" >
    <AppBar title="写作"></AppBar>
    <v-main>
      <Dialog v-bind:content="dialogContent" ref="Dia">
      </Dialog>
      
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
          <v-card class="editor" width="800px" flat >
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
              <vue-html5-editor
              :content="inputfield.content.placeholder"
              :z-index="1"
              :height= "800"
              :auto-height= "true"
              v-if="inputfield.content"
              @change="updateData"
            ></vue-html5-editor>
          </v-form>
        </v-card>`
        </v-col>
            
        <v-col >
            <v-row   >
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
              class="gray tile mx-auto mt-16" 
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
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar.vue'
import Dialog from '@/components/Dialog.vue'
import axios from 'axios'
export default {
  name: 'Writer',
  data(){
    return {
      loader: null,
      loadingUpload: false,
      loadingPreview:false,
      loadingSave: false,
      title: '',
      // 标题
      intro: '',
      // 简介
      // images: [],
      // 配图，可以有多张
      content:'',
      // 内容
      dialogContent:''
    }
  },
  computed:{
    // 设置form的placeholder
    inputfield(){
      return{
        content:{
        }
      }
    },
  },
  methods:{
    updateData(e) {
        console.log(this)
        this.content=e
    },
    upload () {
      this.$service.article.postArticle({
        title: this.title,
        intro: this.intro,
        content: this.content
      }).then(res => {
        if (res.code === 200) {
          this.$refs.Dia.openDialog('点击前往文章')
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
    AppBar,
    Dialog,
  }
}
</script>

<style scoped>
</style>