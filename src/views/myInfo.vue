<template>
    <div>
         <v-header></v-header>
         <div id="left">
           <div><p style="font-size:16px"> 你的当前路径为{{msg}}</p>
           </div>
           <hr> 

           <p>大家好，我是吴作伟，来自浙江丽水庆元县   <br><br><br>
           我是一个大三的计算机系学生，将在2021毕业，毕业于杭州电子科技大学信息工程学院，在大学期间，我始终以提高自身的综合素质为目的，以个人的全面发展为奋斗方向，树立正确的人生观、价值观和世界观。<br><br>
           本人热情开朗，形象阳光，学习态度良好，遇事乐观，遇到问题勇于解决，为人热忱，开朗大方，乐于助人，吃苦耐劳，能承受较大压力，注重细节方面，对未来充满希望，对自己有严格要求，力求全方面发展。<br><br> 
           我喜欢对所学知识进行编写文档总结，既可以可以帮助消化，又可以帮助其他的人，因此编写了很多技术文档，并且我喜欢交际，擅长倾听并且与他人沟通，收获了不少的朋友，我还喜欢打羽毛球和健身来争强个人的身体素质。我热衷于学习并使用新兴的技术，来提高自己技术水平，比如这个页面用的就是最近热门的vue框架  <br><br>
           为适应社会发展的需求，我认真学习专业知识，发挥自己的特长，挖掘自身的潜力，结合暑期社会实践，从而提高了自己的学习能力和分析处理问题能力。<br><br>
           踏实一些，不要着急，你想要的，岁月都会给你。<br><br>
           小吴，请务必加油! <br>
           </p>
           <img src="../assets/mine/m6.jpeg" alt="">
         </div>
         <div id="right">
             <v-showme></v-showme>
         </div>
         <!--<div id="rightdown">
             <v-contact></v-contact>
         </div>-->
         
         <v-bottom></v-bottom>
        
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import ShowBox from '../components/ShowBox.vue';
import Bottom from  '../components/Bottom.vue';
import Contact from '../components/Contacter.vue'
export default {
    data(){
      
        return {
           msg:this.$route.path
        }
    },
    components:{
       'v-header' : Header,
       'v-showme' : ShowBox,
       'v-bottom' : Bottom,
       'v-contact' : Contact,
    },
    methods:{
        show(){
            let route = this.$route
            console.log(this.$route)
            alert(route)
        }
    }
    
}
</script>
<style scoped>
#left{
    float: left;
    margin-left: 10%;
    width: 800px;
    
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
#left span{
    font-size: 32px;
}
#left img{
    height: 450px;
}
#left  p{
    margin-top: 40px;
    padding-top: 40px;
    font-size: 20px;
    font-family:"STKaiti";
    text-align: left;
    
}

#first {
    font-size: 10px;
    text-align: center;
}
#abstract{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#right{
    float: left;
    margin-left: 2%;
    height: 400px;
    width: 400px;
  
}
#rightdown{
    float:right;
    height: 150px;
    width: 380px;
    margin-top:10%;
    margin-right: 5.5%;

}
</style>


