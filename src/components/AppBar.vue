<template>
    <v-app-bar
      app
      color="teal darken-3"
      dark
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <router-link to="secret">
        <v-btn icon>
            T
        </v-btn>
      </router-link> -->
      <router-link to="home">
        <v-btn icon>
            <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
        <v-btn icon @click="gotoWriter">
            <v-icon>mdi-pen</v-icon>
        </v-btn>
      <avatar/>
    </v-app-bar>
</template>

<script>

import Avatar from '@/components/Avatar.vue'
export default {
  name: 'AppBar',
  props: {
      title:""
  },
  components:{
      Avatar
  },
  methods:{
    gotoWriter(){
      if(! this.$store.state.userinfo.isLogin){
        this.$msg.info('请先登录')
      }else{
        this.$router.push({path:'/writer'})
      }
    }
  }
}

  </script>
