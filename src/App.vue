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
  mounted(){
    this.getSetting()
  },
  methods:{
    async getSetting(){
      let ret = await this.$service.setting.getSetting()
      console.log(ret)
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