<template>
    <div>
        <v-card  width="300px" flat>
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
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        getDraftList()
    },
    methods:{
        async getDraftList () {
            let ret = await this.$service.article.listDraft()
            let res = ret.data
            console.log(res)
            if (res.code === 200) {
                this.articleCardList = res.data.map(item => {
                // let time = this.setTime(nowtime)
                    return {
                        title: item.article.title,
                        id: item.article.id,
                        intro: item.article.intro,
                        abstract:item.article.abstract,
                    }
                })
            }
        },
        
    }
}
</script>