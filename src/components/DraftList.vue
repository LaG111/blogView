<template>
    <div>
        <v-card  width="300px" flat>
            <v-expansion-panels focusable accordion >
              <v-expansion-panel 
                v-for="(item,index) in draftCardList"
                :key="item.id"
              >
                <v-expansion-panel-header>
                  {{item.title}}
                  <v-spacer></v-spacer>
                </v-expansion-panel-header>

                <v-expansion-panel-content min-height= "300px" >
                    {{item.intro}}
                    <v-divider></v-divider>
                    {{item.abstract}}
                    <v-divider></v-divider>
                    <v-btn icon @click.stop="editArticle(item.id)" >
                        <v-icon>
                            mdi-file-edit
                        </v-icon>
                    </v-btn>
                    <v-btn icon @click.stop="deleteArticle(item.id,index)" > 
                        <v-icon>
                            mdi-trash-can
                        </v-icon>
                    </v-btn>
                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            draftCardList:[]
        }
    },
    mounted(){
        this.getDraftList()
    },
    methods:{
        async getDraftList () {
            let ret = await this.$service.article.listDraft()
            let res = ret.data
            if (res.code === 200) {
                console.log(res)
                this.draftCardList = res.data.map(item => {
                // let time = this.setTime(nowtime)
                    return {
                        title: item.title,
                        id: item._id,
                        intro: item.intro,
                        abstract:item.abstract,
                    }
                })
                console.log(this.draftCardList)
            }
        },
        editArticle(id){
            console.log(id)
            this.$router.push({name:'Writer',query: {
                type:'edit',
                articleId:id}})
        },
        deleteArticle(id,index){
            this.$service.article.deleteArticle(id)
            .then(ret => {
                let res=ret.data
                if (res.code === 200) {
                    this.$msg.success({message:'草稿删除成功',time:800})
                }
            this.draftCardList.splice(index,1)

            })
        },
         
    }
}
</script>