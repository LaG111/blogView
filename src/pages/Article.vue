<template>
    <div class="Aricle">
        <banner></banner>
        <v-card flat height="80px"></v-card>
        <v-col>
            <v-row justify="center" align="center">
                <v-card  width="1000px" min-height="600px">
                    <v-card-title  class="teal--text text-h4 font-weight-bold " >
                        {{this.article.title}}
                        <v-spacer></v-spacer>
                        <v-btn icon v-if="showControl" @click.stop="editArticle" color="primary"> 
                            <v-icon>
                                mdi-file-edit
                            </v-icon>
                        </v-btn>
                        <v-btn icon v-if="showControl" @click.stop="deleteArticle" color="primary"> 
                            <v-icon>
                                mdi-trash-can
                            </v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text class="mb-6">
                        {{this.article.intro}}
                        <v-divider></v-divider>
                        Writer:{{this.article.writer}}

                    </v-card-text >
                    <div id="article" v-html="this.article.content" class="px-4">
                    </div>
                </v-card>  
            </v-row>
        </v-col>
    </div>
</template>
<script>
import Banner from '../components/Banner.vue'
export default {
    data(){
        return{
            article:{},
            loading:true
        }
    },
    mounted(){
        this.getArticle()
    },
    methods:{
        async getArticle () {
            await this.$service.article
                .getArticleInfo(this.$route.query.id)
                .then(ret => {
                    let res=ret.data
                    console.log(res)
                    if (res.code === 200) {
                        this.article = res.data.article
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
        async deleteArticle(){
            await this.$service.article.deleteArticle(this.article.id)
            .then(ret => {
                let res=ret.data
                if (res.code === 200) {
                    this.$msg.success({message:'文章删除成功',time:800})
                    this.selfClose()
                }
            })
        },
        
        editArticle(){
            this.$router.push({name:'Writer',query: {
                type:'edit',
                articleId:this.article.id}})
        },
    },
    components:{
        Banner
    },
    computed:{
        showControl(){
            return ((this.article.writer === this.$store.state.userinfo.username)||this.$store.state.userinfo.isSuper)
        }
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