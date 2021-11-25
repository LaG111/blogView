<template>
    <v-app-bar
      app
      color="teal darken-3
"
      dark
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="secret">
        <v-btn icon>
            T
        </v-btn>
      </router-link>
      <router-link to="home">
        <v-btn icon>
            <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="writer">
        <v-btn icon>
            <v-icon>mdi-pen</v-icon>
        </v-btn>
      </router-link>
      <Avatar/>
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
  }
}

  </script>
