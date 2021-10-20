<template>
  <v-app class="Writer" >
    <v-main>
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
          <v-form action="">
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
              :height= "500"
              :auto-heigth= "true"
              v-if="inputfield.content"
              @change="updateData"
            ></vue-html5-editor>
          </v-form>
        </v-card>`
        </v-col>
            
        <v-col >
            <v-row class=""  >
              <v-btn class="success  mx-auto mt-10"  large>
                <v-icon left dark >
                  mdi-check
                </v-icon>
                提交
              </v-btn>
            </v-row>
            <v-row class="" >
              <v-btn class="info  mx-auto mt-10" large>
                <v-icon left dark >
                  mdi-check
                </v-icon>
                保存
              </v-btn>
            </v-row>
        </v-col>
        
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return {
      title: '',
      // 标题
      intro: '',
      // 简介
      images: [],
      // 配图，可以有多张
      content: '',
      // 内容
    }
  },
  computed:{
    // 设置form的placeholder
    inputfield(){
      return{
            title:{
            },
            intro:{
            },
            content:{
            }
      }
    },
  },
  methods:{
        updateData() {
            
        },
  },
  components: {
  }
}
</script>

<style scoped>
  
</style>