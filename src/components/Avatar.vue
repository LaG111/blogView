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
            <span class="white--text text-h5">{{ userinfo.username }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar
              color="brown"
            >
              <span class="white--text text-h5">{{  }}</span>
            </v-avatar>
            <h3>{{ userinfo.username }}</h3>
            <p class="text-caption mt-1">
              {{  }}
            </p>
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
              @click="dialog = true"
            >
              Logout
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
      
    <div class="text-center ">
      <v-dialog
      v-model="dialog"
      width="500"
      persistent
      >
      <div
      class="mb-n4">
        <v-card 
        >
          <!-- <v-card-title class="text-h5 primary lighten-2">
            提示
          </v-card-title> -->

          <v-card-text>
            确认取消登录
          </v-card-text>


          <v-card-actions>
            <v-btn flat class=“teal--text” @click="logout">
              确认
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              flat
              @click="dialog=false"
            >
              取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
        
      </v-dialog>
    </div>
  </div>


</template>


<script>
export default {
    name: 'Avatar',
    props: {
    },
    data: () => ({
      dialog:false
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
        localStorage.removeItem('token');

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