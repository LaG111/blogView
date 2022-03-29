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
const Message = ()=>import('./components/Message.vue')
const Dialog = ()=> import('./components/Dialog.vue')
const AppBar = ()=> import('./components/AppBar.vue')

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

