<template>
    <v-app class="Aricle">
        <AppBar title=""></AppBar>
        <v-card flat height="80px"></v-card>
        <v-col>
            <v-row justify="center" align="center">
                <v-card flat width="1000px">
                    <v-card-title  class="text-h4 font-weight-bold" >
                        {{this.articleData.title}}
                    </v-card-title>
                    <v-card-text v-html="this.articleData.content" class=" text-body-2">
                    </v-card-text>
                </v-card>  
            </v-row>
        </v-col>

    </v-app>
    

</template>
<script>
import AppBar from '@/components/AppBar.vue'
export default {
    data(){
        return{
            articleData:{}
        }
    },
    created(){
        this.getArticle()
    },
    methods:{
        getArticle () {
        console.log('当前文章ID：' + this.$route.query.id)
        this.$service.article
            .getArticleInfo(this.$route.query.id)
            .then(res => {
                console.log(res)
                if (res.data.code === 200) {
                    this.articleData = res.data.data.article
                    console.log(this.articleData.content)
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
        AppBar
    }
}
</script>

<style scoped>
</style>