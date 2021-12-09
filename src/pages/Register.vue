<template>
    <v-app>
        <v-col align="center" justify="center">
            <v-card width="400px" height="500px" class="pa-6 mt-12" >
                <v-card-title class="font-color-primary">
                    <v-spacer></v-spacer>
                    账 号 注 册
                </v-card-title>
                <v-form ref="form"
                v-model="valid"
                >
                    <v-col>
                        <v-row class="mt-2 mb-8">
                            <v-text-field
                                v-model="username"
                                label="Username"
                                class="font-weight-bold"
                                :rules="[rules.required, rules.usernameRule]"
                            ></v-text-field>
                        </v-row>
                        <v-row class="mt-2 mb-8">
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
                        <v-row class="mt-2 mb-8">
                            <v-text-field
                                v-model="passwordConfirm"
                                :rules="[rules.required,rules.confirmRule]"
                                label= " PasswordConfirm"
                                type = 'password'
                                counter
                            ></v-text-field>
                        </v-row>
                        <v-row >
                            <v-btn color="primary" 
                            block 
                            @click="register" 
                            :loading="loading"
                            :disabled="loading||!valid"
                            >注册</v-btn>
                        </v-row>
                        <v-row >
                            <v-spacer></v-spacer>
                            <router-link to="login" color="primary" >登录</router-link>
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
            passwordConfirm:'',
            passwordShow: false,
            loading:false,
            valid:'',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                usernameRule: v=> isvalidUsername(v) ||'用户名需要是数字、字母、下划线的组合，字母至少存在一位',
                passwordRule: v=> isvalidPassword(v) ||'密码需要是8-18位字符',
                confirmRule:  v=> (v===this.password) ||'密码重复不正确' 
            },
        }
    },
    methods: {
        register () {
            this.loading = true
            this.validate() 
            this.$service.user.registUser({
                username:this.username,
                password:this.password
            })
            .then(ret => {
                console.log(ret)
                let res =ret.data
                console.log(res)
                if (res.code === 200) {
                    this.$msg.success({ message: res.msg })
                    // window.localStorage.setItem('token', res.data['token'])
                    // const test = window.localStorage.getItem('token')
                    // console.log(test)
                    // this.addUserInfo()
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000)
                }
                else if(res.code === 201)
                    this.$msg.info(res.msg)
            })
            .then(()=>{
                this.loading = false
            })
            .catch(err => {
                console.log(err)
                this.$msg.info({ message: err.body.msg })
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