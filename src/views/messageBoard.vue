<template>
    <div id="mian2">
        <vue-particles
                class="particles"
                color="#e8f88d"
                :particleOpacity="1"
                :particlesNumber="120"
                shapeType="star"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                
            />
        <div id="mes">
         <v-header></v-header>
           <div id="head">
               <div id="head_img">
                   <img src="../assets/logo.jpeg" style="width: 126px;height: 126px;">
                </div>
               <div id="head_detail"> 
                   <h1>Breaking.X</h1><br>
                   <ul>
                       <li>主页</li>
                       <li>相册</li>
                       <li>日志</li>
                       <li>说说</li>
                       <li>留言栏</li>
                  
                   </ul>
                </div>
                <div id="weather">
                    {{weather.forecast[0].date}}
                    {{weather.forecast[0].type}} <br><br>
                    {{weather.forecast[0].fengxiang}}
                    {{weather.forecast[0].low}}~~{{weather.forecast[0].high}} <br><br>
                    温馨提示：{{weather.ganmao}}
                </div>
           </div>
           <div id="main">
                <div><h3>留言版</h3></div>
                <hr>
                <dir>
                        <h4>主人寄语</h4>
                        <p>你好你好你好，欢迎光临我的空间，这里是我的留言栏<br></p>
                </dir>
                <div id="board_top">
                        <div>
                        <h4>留言板（{{productList.length}})</h4>
                        </div>
                        <div style="margin-top:2.5%;margin-left:76%;padding-left:%1">
                            <button @click="openMask">我要留言</button>
                        </div>
                </div>
                <hr>
                <v-dialog v-model="sendVal" type="confirm" title="留言框"  v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"/>    
                
                <div id="bootpage" style="margin-bottom: 100px;border: solid 1px #255117;" >
                <v-bootpage :productList="productList"></v-bootpage>
               </div>
               
           </div>
           </div>
          
    </div>
    
</template>
<script>
import Header from '../components/Header.vue'
import Bootpage from '../components/Bootpage'
import axios from 'axios'
import Dialog from '../components/Dialog'
export default {
    data(){
        return {
            style: '',
            flag : false,
            productList:[],
            weather:[],
            currentPageData:[],
            sendVal: false,
        }
    },
    components:{
         'v-header' : Header,
         'v-bootpage' : Bootpage,
         'v-dialog' : Dialog
    },
    mounted(){
        this.handcommentInfo();
        this.handweatherInfo();
    },
    methods:{
        comment1(){
            //弹出的是一个提示
            var name=prompt("输入的内容","");
             if (name!=null && name!="") {
            alert("你输入的是" + name);
            }
        },
        comment(){
            this.flag = !this.flag;
            if(this.flag){
                this.style = "display: block";
            }else{
                this.style = "display: none";
            }
            
        },
        parentFn(childData) {
        this.currentPageData = childData;
        },
        handcommentInfo(){
            const url = 'http://localhost:8090/selectallcomment';
            axios.post(url).then(
                res => {
                    if(res.status == '200'){
                       for(let i = 0; i < res.data.length; i++){
                            let item = {};
                            item.id = res.data[i].id + "";
                            item.username = res.data[i].username + "";
                            item.details = res.data[i].details + "";
                            item.favourable = res.data[i].favourable + "";
                            item.comment_time = res.data[i].comment_time + "";
                            this.productList.push(item);
                       }
                    } 
                }
            ).catch(
                res => {
                    
                },
            );
        },
        handweatherInfo(){
            const url = 'http://localhost:8090/get/临安' 
            axios.post(url).then(
                 res => {
                     
                     if(res.status == 200){
                        this.weather = res.data.data;
                      
                        console.log(this.weather.forecast[0].date)
                     }
                 }
            )
        },
        openMask(index){
            this.sendVal = true;
        },
        

    }
    
}
</script>
<style scoped>
#mes{
   position: relative;
}

#head{
 width: 80%;
 margin-left: 10%;

 display: flex
}

#head_img{
    margin-left: 5%;
    margin-top: 2%;
}

#head_detail{
   margin-left: 2%;
   width: 300px;
}

#head_detail ul{
    list-style:none;
    margin-left: -40px;
    
}

#head_detail li{
    display: inline;
    line-height: 40px;
    margin-left: 10px;
}

#weather{
    padding-top: 20px;
    width: 300px;
    margin-left: 30%;
}


#main{
    margin-left: 20%;
    margin-top: 5%;
    width: 60%;
    border: solid 2px #255117;
    text-align: center;
    padding: 20px 20px 20px 20px;
    
}

#main h3,#main h4{
    color: #255117;
    text-align: left;
}

#board_top{
   display: flex;
  
}

#comment{
    border: solid 1px #255117;
    display: none;
}

#bootpage{
    margin-bottom: 100px;
}

#particles-js{
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;    
}

#main2{
    height: 100%;
    width: 100%;
}
</style>