<template>
    <div class="Aricle">
        <v-card flat height="80px"></v-card>
        <v-col>
            <v-row justify="center" align="center">
                <v-card  width="1000px">
                    <v-card-title  class="teal--text text-h4 font-weight-bold " >
                        {{this.articleData.title}}
                    </v-card-title>
                    <v-card-text class="mb-6">
                        {{this.articleData.intro}}
                        <v-divider></v-divider>
                        Writer:{{this.articleData.writer}}

                    </v-card-text >
                    <div id="article" v-html="this.articleData.content" class="px-4">
                    </div>
                </v-card>  
            </v-row>
        </v-col>
    </div>
</template>
<script>
export default {
    data(){
        return{
            articleData:{},
            loading:true
        }
    },
    mounted(){
        this.getArticle()
    },
    methods:{
        getArticle () {
        this.$service.article
            .getArticleInfo(this.$route.query.id)
            .then(ret => {
                let res=ret.data
                console.log(res)
                if (res.code === 200) {
                    this.articleData = res.data.article
                    // this.comments = this.topicData.article.comments
                    // if (this.topicData.article.img) {
                    // this.showArticleimg = true
                    // }
                    // 日期格式等下改
                    // let time = this.topicData.article.datetime
                    // this.topicData.article.datetime = time.substring(0, 10)
                
                }
            })
        },
    },
    components:{
    }
}
</script>

<style scoped>
#article >>> blockquote {
    display: block; 
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}

</style>