<template>
    <v-card 
    class="mx-auto mt-16 px-16"
    width="800px"
    elevation="6"
    @click="gotoActicle"
    >
        <v-card-title>
            {{this.articleTitle}}
            <v-spacer></v-spacer>
            <v-btn icon v-if="showDelBtn" @click.stop="deleteArticle"> 
                <v-icon>
                    x
                </v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            {{this.articleIntro}}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name:'ArticleCard',
    props:{
        articleTitle:String,
        articleIntro:String,
        articleId:String
    },
    created(){

    },
    methods:{
        gotoActicle(){
            this.$router.push({path:'/Article',query:{id:this.articleId}})
            
        },
        deleteArticle(){
            this.$service.article.deleteArticle(this.articleId)
            .then(ret => {
                let res=ret.data
                if (res.code === 200) {
                    this.$msg.success({message:'文章删除成功',time:100})
                    this.selfClose()
                }
            })
        },
        selfClose() {
        // destroy the vue listeners, etc
        this.$destroy();

        // remove the element from the DOM
        this.$el.parentNode.removeChild(this.$el);
        }
    },
    computed:{
        showDelBtn(){
            return (this.$store.state.userinfo.username ==="LunaticRed")
        }
    }
}
</script>