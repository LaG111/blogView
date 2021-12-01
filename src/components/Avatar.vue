<template>
  <div>
    <router-link to="login">
      <v-btn v-if="!isLogin" icon x-large bottom>
          登录
      </v-btn>
    </router-link>
    <v-menu
      v-if="isLogin"
      bottom
      min-width="200px"
      rounded
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          x-large
          v-on="on"
        >
          <v-avatar
            color="brown"
            size="48"
          >
            <img :src="userinfo.avatar" alt="头像">
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar
            >
              <img :src="userinfo.avatar" alt="头像">
            </v-avatar>
            <h3>{{ userinfo.username }}</h3>

            <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              rounded
              text
              @click="gotoAccount"
            >
              Edit Account
            </v-btn>
              <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              rounded
              text
              @click="gotoMyArticle"
            >
              My Article
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              rounded
              text
              color='error'
              @click="logout"
            >
              Logout
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </div>


</template>


<script>
export default {
    name: 'Avatar',
    props: {
    },
    data: () => ({
    }),
    methods:{
      gotoLogin(){
        this.$router.push({path:'/login'})
      },
      gotoAccount(){
        this.$router.push({path:'/account'})
      },
      gotoMyArticle(){
        this.$router.push({path:'/MyArticle'})
      },
      logout(){
        window.localStorage.removeItem('token');
        this.$store.commit('logout')
      }
    },
    computed:{
      isLogin() {
        return this.$store.state.userinfo.isLogin
      },
      userinfo(){
        return this.$store.state.userinfo
      }
    }
}
</script>