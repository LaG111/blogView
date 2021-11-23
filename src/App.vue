<template>
  <div id="app">
    <v-app>
        <router-view/>
      <!-- <Message /> -->
    </v-app>
  </div>
</template>
<script>  
import Message from '@/components/Message'
export default {
  components:{
    Message
  }
}
</script>

