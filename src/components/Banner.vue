<template>
    <div id="backImgContainer">
        <div id="backImg" :style="{'background-image':`url(${this.imgUrl})`}" alt="背景">
            <svg id="clip" viewBox="0 0 2560 100" preserveAspectRatio="none">
                <polygon points="2560 0 2560 100 0 100" ></polygon>
            </svg>
        </div>
    </div>
    
</template>

<script>
import banner from '../static/banner'
export default {
    data() {
        return {
            imgUrl:'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qcgkxh/fbfdfd9841a8aae5_1639136092172.jpg'
        }
    },
    mounted() {
        this.getRandomImamge()
    },
    methods:{
        getRandomImamge(){
            this.imgUrl = banner.bannerList[Math.floor( Math.random() * banner.bannerList.length)]
        }
    }
    
}
</script>

<style scoped>
    #backImgContainer{
        position: relative;
        height: 450px;
        margin-top: -110px
    }
    #backImg{
        opacity: 0.6;
        position: absolute;
        background-position-y: center;
        background-position-x: center;
        background-size: 100% auto;
        height: 450px;
        left: 0;
        right: 0;
        z-index: 4;
    }
    #clip{
      position: absolute;
      bottom: 0;
    }
    #clip  polygon{
      fill:white;
    }


@media   (max-width:480px) {
    #backImg{
        background-size: auto 100%;
    }
}
</style>