<template>
  <v-app class="home">    
    <app-bar></app-bar>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import AppBar from '@/components/AppBar.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    AppBar
  }
}
</script>
