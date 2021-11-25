<template>

<div class="text-center">
  <v-dialog
  v-model="dialog"
  width="500"
  persistent
  >
  <div
  class="mb-n4">
    <v-card 
    v-for = "(item ,index) in $store.state.msgPool" 
    :key="index"
    class='mb-4'
    >
      <!-- <v-card-title class="text-h5 primary lighten-2">
        提示
      </v-card-title> -->

      <v-card-text>
        {{item.message}}
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="msgClose(index)"
        >
          关闭
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
    
  </v-dialog>
</div>
</template>
<script>
export default {
  name:"Message",
  computed:{
    dialog:{
      get: function(){
        return this.$store.state.msgPool.length>0 ? true:false
      },
      set: function(){
        msgClose
        // 因为v-dialog必须要有个v-model绑定。但是我只需要他跟vuex联动，所以设置一个没用的setter
      }
    }
  },
  methods: {
    msgClose(index){
      this.$msg.msgClose(index)
    }
  },
}
</script>
