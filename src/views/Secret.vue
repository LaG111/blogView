<template>
  <div>
    <div>
		<v-avatar>
			<img/>
		</v-avatar>
		<v-btn @click="upload">
			点击上传图片	
		</v-btn>
		<input
		type="file"
		name="file"
		ref ="file"
		@change="changeImg($event.target.files[0])"
		accept="image/gif, image/jpeg , image/png"
		style="display :none"/>

		<v-img :src="img" alt="" style = 'z-index: index 100;'> </v-img>
    </div>
  </div>
</template>

<script>
export default{
	name:'secret',
	data(){
		return{
			img:'',
			croppedImg: '',

		}
	},
	methods:{
		upload(){
			//触发原生input元素的点击事件
           	this.$refs.file.click()
		},
		changeImg(file){
			if(!this.check(file)){
				this.$msg.info('兄啊，上传的图片作为头像也太大了吧？')
			}else{
				let reader  = new FileReader
				reader.readAsDataURL(file)
				reader.onload = ()=>{
					this.img = reader.result    
				}
				cropTrigger()
			}
		},
		check(file){
			if(file.size > 10240000)
				return false
		},
		cropTrigger(){
			
		},
	}
}
</script>