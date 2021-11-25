<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view/>
    </v-main>
    <!-- <Dialog></Dialog> -->
    <Message />
  </v-app>
</template>
<script>  
import Message from '@/components/Message'
import AppBar from '@/components/AppBar.vue'
import Dialog from '@/components/Dialog.vue'

export default {
  components:{
    Message,
    AppBar,
    Dialog
  }
}
</script>

<style>
    .font-color-primary{
        color:#00695C
    }
</style>