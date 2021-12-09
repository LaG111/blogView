<template>
<div>
    <v-row>
        <v-col>
            <v-card width="800px" height="800px" class="ma-auto pa-12" >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-avatar
                            color="brown"
                            size="150"
                        >
                            <img :src="userinfo.avatar" alt="头像">
                            <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                >
                                    <v-btn :href="userinfo.avatar" >查看头像</v-btn>
                                    <v-btn @click="newAvatar()" >上传头像</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-avatar>
                    </template>
                </v-hover>
                <v-divider></v-divider>
                <h1>
                    {{userinfo.username}}
                </h1>
                <h3>
                    反正用户信息也就一个username，所以只有一个头像上传功能
                </h3>
            </v-card>
        </v-col>
    </v-row>
    
<cropper ref='Cropper'></cropper>
</div>
</template>
<script>
import Cropper from '@/components/Cropper.vue'
export default {
    components:{
        Cropper
    },
    methods:{
        newAvatar(){
            this.$refs.Cropper.upload()
        },
        
    },
    computed:{
      isLogin() {
        return this.$store.state.userinfo.isLogin
      },
      userinfo(){
        return this.$store.state.userinfo
      }
    }
}
</script>
    

