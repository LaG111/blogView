<template>
    <div>
        <v-card  width="300px" flat>
            <v-expansion-panels focusable accordion >
              <v-expansion-panel 
                v-for="(item) in draftCardList"
                :key="item._id"
              >
                <v-expansion-panel-header>
                  {{item.title}}
                </v-expansion-panel-header>

                <v-expansion-panel-content min-height= "300px">
                    {{item.intro}}
                    <v-divider></v-divider>
                    {{item.abstract}}
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
                        id: item.id,
                        intro: item.intro,
                        abstract:item.abstract,
                    }
                })
            }
        },
        
         
    }
}
</script>