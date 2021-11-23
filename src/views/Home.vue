<template>
  <v-app class="home">    
    <AppBar title="首页">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </AppBar>
    <v-sheet height = "1000px" >
        <v-card tile flat height ="200px"></v-card>
        <v-col>
          <ArticleCard
          v-for="item in articleCardList"
          :key = item.id
          :articleId = item.id
          :articleTitle= item.title
          :articleIntro = item.intro
          >
          </ArticleCard>
        </v-col>
    </v-sheet>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar.vue'
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
  methods:{
    async getarticleCardList () {
      let data = await this.$service.article.getArticleList()
      console.log(data)
      if (data.data.code === 200) {
        this.articleCardList = data.data.data.map(item => {
          // const date = new Date(item.article.datetime)
          // let nowtime = this.$moment(date).format('YYYY-MM-DD HH:mm:ss')
          // let time = this.setTime(nowtime)
          return {
            // time: time,
            title: item.article.title,
            id: item.article.id,
            // user: item.author.username,
            intro: item.article.intro,
            // image: '',
            // viewcount: item.article.data.view,
            // commentcount: item.article.data.comment,
            // nickname: '匿名者',
            // userimage: item.author.avatar
          }
        })
      }
    },
    gotoArticle(){

      router.push( {path: '/article', query: {id: this.article.topic_id }})
    },
  },
  name: 'Home',
  components: {
    AppBar,
    ArticleCard
  }
}
</script>
