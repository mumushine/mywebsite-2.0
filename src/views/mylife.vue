
<template>
    <div>   
        <v-header/>
        <div><v-slider :imgArray="imgArray"></v-slider></div>
        
        <v-bottom></v-bottom> 
    </div>

</template>
<script>
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Bottom from '../components/Bottom'
export default {
    data(){
        return {
            msg : '这里是首页',
            imgArray:[
              {imgsrc:require("../assets/pan1.jpeg")},
              {imgsrc:require("../assets/shuaige.jpeg")},
              {imgsrc:require("../assets/fengjing.jpg")},
              {imgsrc:require("../assets/family.jpg")},
            ],
          
        }
    },
    components:{
        'v-header' : Header,
        'v-slider' : Slider,
        'v-bottom' : Bottom,
    }
    
}
</script>
<style scoped>
#main{
    
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
}

#bottom{
    height: 15%;
    background-color: beige; color: #dbd4d4;
}
.wechat{
    
    float: right;;
    margin: 20px;
}
.wechat img{
    height: 60px;
    width: 60px;
}
</style>