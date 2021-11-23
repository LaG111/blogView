<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            上传成功
        </v-card-title>

        <v-card-text>
          {{content}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data(){
      return{
        dialog:false,
        content:""
      }
  },
  props: {
  },
  methods: {
      openDialog(content){
        this.content = content
        this.dialog = true
      },
      closeDialog(){
          this.dialog=false
          this.content = ' '
      }
  }
}
</script>