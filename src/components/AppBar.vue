<template>
  <v-app-bar
    app
    :color= "barColor"
    dark
    hide-on-scroll
    height="60px"
    :elevation="elevation"
  >
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <router-link to="secret">
        <v-btn icon>
            T
        </v-btn>
      </router-link> -->
    <router-link to="home">
      <v-btn icon class="" >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>
    <v-btn icon @click="gotoWriter" class="mx-lg-4">
      <v-icon>mdi-pen</v-icon>
    </v-btn>
    <avatar class="mx-lg-12"/>
  </v-app-bar>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
export default {
  name: "AppBar",
  data() {
    return {
      barColor: 'transparent',
      elevation: 0,
    };
  },
  props: {
    title: "",
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    Avatar,
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >= 0 && window.pageYOffset <300) {
        this.barColor = 'transparent'
        this.elevation = '6'
      }else{
        this.barColor = 'teal darken-3'
        this.elevation = '6'
      }
    },
    gotoWriter() {
      if (!this.$store.state.userinfo.isLogin) {
        this.$msg.info("请先登录");
      } else {
        this.$router.push({ path: "/writer" });
      }
    },
  },
};
</script>

<style scoped lang="less">
v-app-bar{
  avatar{
    opacity: 1
  }
  v-btn{
    v-icon{
      opacity: 1
    }
  }
}
</style>