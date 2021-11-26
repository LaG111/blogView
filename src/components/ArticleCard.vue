<template>
    <v-card 
    class="mx-auto mt-16 px-16"
    width="800px"
    height='300px'
    elevation="6"
    @click="gotoActicle"
    >
        <v-card-title class="teal--text text-h5  ">
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
        <v-card-text>
            <v-row>
                <v-col cols="4">
                    作者: {{this.article.writer}}
                </v-col>
                <v-col cols="8">
                    时间: {{this.article.date}}
                </v-col>
            </v-row>
            
            
        </v-card-text>
        <v-card-text>
            {{this.article.intro}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            {{this.article.abstract}}
        </v-card-text>

    </v-card>
</template>
<script>
export default {
    name:'ArticleCard',
    props:{
        article: {}
    },
    created(){
    },
    methods:{
        gotoActicle(){
            this.$router.push({path:'/Article',query:{id:this.article.id}})
        },
        deleteArticle(){
            this.$service.article.deleteArticle(this.article.id)
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
        selfClose() {
        // destroy the vue listeners, etc
        this.$destroy();

        // remove the element from the DOM
        this.$el.parentNode.removeChild(this.$el);
        }
    },
    computed:{
        showControl(){
            return (this.control||this.$store.state.userinfo.isSuper)
        }
    }
}
</script>