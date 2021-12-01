<template>
  <div>    
    <v-sheet>
        <v-card tile flat height ="200px"></v-card>
        <v-col>
          <article-card
          v-for="item in articleCardList"
          :key = item.id
          :article = item
          :control = true
          >
          </article-card>
        </v-col>
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleCard from '@/components/ArticleCard.vue'
export default {
  data(){
    return{
      articleCardList:[]
    }
  },
  mounted(){
    this.getarticleCardList()
  },
  methods:{
    async getarticleCardList () {
      let ret = await this.$service.article.getMyArticleList(this.$store.state.userinfo.username)
      console.log(ret)
      let res= ret.data
      if (res.code === 200) {
        this.articleCardList = res.data.map(item => {
          return {
            title: item.article.title,
            id: item.article.id,
            intro: item.article.intro,
            abstract:item.article.abstract,
            writer:item.article.writer,
            date: item.article.datetime
          }
        })
      }
    },
  },
  name: 'MyArticle',
  components: {
    ArticleCard

  }
}
</script>
