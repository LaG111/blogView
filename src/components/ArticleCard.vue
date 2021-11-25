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
            <v-btn icon v-if="showDelBtn"> 
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
    methods:{
        gotoActicle(){
            this.$router.push({path:'/Article',query:{id:this.articleId}})
        }
    },
    computed:{
        showDelBtn(){
            console.log(this.$store.state.userinfo.username)
            return true
            return (this.$store.state.userinfo.username ==="LunaticRed")
        }
    }
}
</script>