<template>
  <div>
    <div>
		<input
		type="file"
		name="file"
		ref ="file"
		@change="changeImg($event.target.files)"
		accept="image/gif, image/jpeg , image/png"
		style = "display : none;"
		/>
		
    </div>
    <v-overlay  v-show="showCropper" :dark="false">
        <v-card id= "cropper" style="width:400px;height:500px; "  class="mx-auto pa-3 pb-12" elevation="11">
            <v-row> 
                <div style="width:400px;height:400px">
                    <VueCropper
                    ref="cropper" 
                    :outputSize= "options.outputSize"
                    :outputType= "options.outputType"
                    :img="this.img"
                    :autoCrop= "options.autoCrop"
                    :fixed= "options.fixed"
                    :fixedNumber = "options.fixedNumber"
                    :canMove= "options.canMove"
                    :canMoveBox= "options.canMoveBox"
                    :centerBox= "options.centerBox"
                    :canScale = "options.canScale"

                    > </VueCropper>
                </div>
            </v-row>

                <v-row >
                    <input type="range" ref="scaleSlide" @input="changeScale()" min="-10" max="10" step="0.1" value ='0' style=" width: 80%;height:40px;margin:auto">
                </v-row>
                <v-row class="mt-2 pa-4">
                    <v-btn @click="showCropper = false">
                        关闭
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color= 'primary' @click="showCropper= false;cropped()" >确认</v-btn>
                </v-row>

        </v-card>
    </v-overlay>

  </div>
</template>

<script>
import { VueCropper }  from 'vue-cropper' 
export default{
	name:'Cropper',
	data(){
		return{
			img:'',
			croppedImg: '',
			showCropper:false,
			options:{
				outputSize: 1,
				outputType: 'png',
				img:"this.img",
				autoCrop: true,
				fixed: true,
				fixedNumber: [1,1],
				canMove: false,
				canMoveBox: true,
				centerBox: true,
				canScale :false
			},
			lastValue: 0
		}
	},
	methods:{
		upload(){
			//触发原生input元素的点击事件
           	this.$refs.file.click()
		},
		async changeImg(files){
			if(!this.check(files[0])){
				this.$msg.info('兄啊，上传的图片也太大了吧？')
			}else{
					this.img = await this.readToBase64(files[0])
                    this.$refs.file.value = null
					this.showCropper= true
				}
		},
		check(file){
			console.log(file)
			if(file.size > 10240000){
				return false
			}
			else{
				return true
			}
		},
		readToBase64(file){
			return new Promise((resolve,reject)=>{
				let reader  = new FileReader
				reader.readAsDataURL(file)
				reader.onload = ()=>{
					resolve(reader.result)
				}
			})
		},
		changeScale(){
			this.$refs.cropper.changeScale(this.$refs.scaleSlide.value-this.lastValue)	
			this.lastValue = this.$refs.scaleSlide.value
		},
		cropped(){
			// this.$refs.cropper.getCropData(data => {
			// 	console.log(data)  
			// })
			this.$refs.cropper.getCropBlob(data => {
                this.uploadImg(data)
			})
            this.$refs.cropper.stopCrop()	
		},
        async uploadImg(data){
            let param = new FormData
            param.append('file',data)
            let ret = await this.$service.file.uploadAvatar(param)
            console.log(data)
            console.log(ret)
			this.updateUserInfo()
		},
		updateUserInfo() {
        this.$service.user.getInfo().then(ret => {
            let res = ret.data
            if (res.code === 200) {
                this.$store.commit('updateUserInfo', res.data)
            } else {
                this.$msg.error('获取用户信息失败')
            }
            })
            .catch(err => {
            this.$msg.info(err)
            })

        }
	},
	components:{
		VueCropper
	}
}
</script>

<style scoped>

	
</style>