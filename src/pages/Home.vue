<template>
  <div>    
    <v-sheet>
        <v-card tile flat height ="200px"></v-card>
        <v-col>
          <article-card
          v-for="item in articleCardList"
          :key = item.id
          :article = item
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
  created(){
    this.getarticleCardList()
  },
  computed:{
    isSuper(){
      return this.$store.state.userinfo.isSuper
    }
  },
  methods:{
    async getarticleCardList () {
      let ret = await this.$service.article.getArticleList()
      let res =ret.data
      console.log(res)
      if (res.code === 200) {
        this.articleCardList = res.data.map(item => {
          // let time = this.setTime(nowtime)
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
  name: 'Home',
  components: {
    ArticleCard
  }
}
</script>
