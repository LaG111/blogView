<template>
    <v-app>
        <v-col align="center" justify="center">
            <v-card width="400px" height="500px" class="pa-6 mt-12" >
                <v-card-title class="font-color-primary">账 号 登 录</v-card-title>
                <v-form ref="form"
                v-model="valid"
                >
                    <v-col>
                        <v-row class="mt-2 mb-14">
                            <v-text-field
                                v-model="username"
                                label="Username"
                                class="font-weight-bold"
                                :rules="[rules.required, rules.usernameRule]"
                            ></v-text-field>
                        </v-row>
                        <v-row class="mt-2 mb-14">
                            <v-text-field
                                v-model="password"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.passwordRule]"
                                :type="passwordShow ? 'text' : 'password'"
                                label="Password"
                                counter
                                @click:append="passwordShow = !passwordShow"
                            ></v-text-field>
                        </v-row>
                        <v-row >
                            <v-btn color="primary" 
                            block 
                            @click="login" 
                            :loading="loading"
                            :disabled="loading||!valid"
                            >登录</v-btn>
                        </v-row>
                        <v-row >
                            <v-spacer></v-spacer>
                            <router-link to="register" color="primary" >注册</router-link>
                        </v-row>
                    </v-col>
                </v-form>
            </v-card>
        </v-col>
    </v-app>

</template>

<script>
import {isvalidUsername ,isvalidPassword} from '../utils/formRules'
export default{
    data(){
        return{
            username:'',
            password:'',
            passwordShow: false,
            loading:false,
            valid:'',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                usernameRule: v=> isvalidUsername(v) ||'用户名需要是数字、字母、下划线的组合，字母至少存在一位',
                passwordRule: v=> isvalidPassword(v) ||'密码需要是8-18位字符'
            },
        }
    },
    methods: {
        login () {
            this.loading = true
            this.validate() 
            this.$service.user.getUserToken({
                username:this.username,
                password:this.password
            })
            .then(ret => {
                let res = ret.data
                if (res.code === 200) {
                    console.log(res)
                    this.$msg.success({ message: res.msg , time : 1000 })
                    console.log(res.data['token'])
                    window.localStorage.removeItem('token')
                    window.localStorage.setItem('token', res.data['token'])
                    this.addUserInfo()
                    //     setTimeout(() => {
                    //     this.$router.push('/home')
                    // }, 1000)
                }
                else if(res.code === 201)
                    this.$msg.info(res.msg)
            })
            .then(()=>{
                this.loading=false
            })
            .catch(err => {
                console.log(err)
            })
        },
        addUserInfo () {
        this.$service.user.getInfo().then(ret => {
            let res = ret.data
            if (res.code === 200) {
                this.$store.commit('login', res.data['userInfo'])
            } else {
                this.$msg.error('获取用户信息失败')
            }
            })
            .catch(err => {
            this.$msg.info(err)
            })
        },

        validate () {
        this.$refs.form.validate()
      },
    },
}

</script>

<style scoped>
</style>