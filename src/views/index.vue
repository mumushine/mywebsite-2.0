<template>
    <div>
         <v-header></v-header>
         
         <div id="left">
            <span>WELCOME TO MY WORLD</span><br>
            <img src="../assets/desk.jpeg" alt="" ><br>
            <p> OR AT LEAST MY WEBSITE</p>
            <p id="abstract">欢迎光临暮暮的个人小站，在这里，你可以查看关于我的个人信息，我原创的技术博客，我对于职业的规划，以及我的生活剪辑，还可以对我进行留言
            如果需要更多信息可以添加我的QQ或微信
            </p>
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
           
        }
    },
    components:{
       'v-header' : Header,
       'v-showme' : ShowBox,
       'v-bottom' : Bottom,
       'v-contact' : Contact,
    },
    methods:{
     
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


