<template>
  <v-app >
    <app-bar></app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
    <!-- <Dialog></Dialog> -->
    <message/>
  </v-app>
</template>
<script>  
import Message from './components/Message.vue'
import Dialog from './components/Dialog.vue'
import AppBar from './components/AppBar.vue'

export default {
  mounted(){
    this.getSetting()
  },
  methods:{
    async getSetting(){
      let ret = await this.$service.setting.getSetting()
      this.$store.commit('getSetting', ret.data.data.setting)
    }
  },
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

