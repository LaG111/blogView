<template>
  <div>
    <div>
		<v-avatar>
			<img/>
		</v-avatar>
		<v-btn @click="upload">
			点击上传图片	
		</v-btn>
		<form ref ='form' style="display :none">
			<input
		type="file"
		name="file"
		ref ="file"
		@change="changeImg($event.target.files)"
		accept="image/gif, image/jpeg , image/png"
		style="display :none"/>
		</form>
		
    </div>
		<v-dialog   v-model="showCropper" persistent>

			<div style="" class="pa -2">
				<img id='img' ref='img' :src="img" alt="" style="display:block; max-width: 100%; width:200px" v-if="imgToggle">
			</div>
			<v-row>
				<v-col>
					<v-btn @click="imgToggle= false;showCropper =false;">关闭</v-btn>
				</v-col>
				<v-col>
					<v-btn primary @click="imgToggle= false;showCropper =false;">确认</v-btn>
				</v-col>
			</v-row>
		</v-dialog>

  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css';
export default{
	name:'secret',
	data(){
		return{
			img:'',
			croppedImg: '',
			showCropper:false,
			imgToggle:false
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
					this.cropTrigger()
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
		cropTrigger(){
			this.showCropper =true
			this.imgToggle = true
			this.$nextTick(()=>{
				let img = this.$refs.img
				console.log('===========')
				console.log(img)
				let cropper = new Cropper(img,{
					aspectRatio:  1 / 1,
					viewMode :2,
					dragMode : 'move'
					})
			})
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
	},
	components:{
	}
}
</script>

<style scoped>

	
</style>