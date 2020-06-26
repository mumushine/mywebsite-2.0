<template>
    <div>
         <v-header></v-header>
         <div id="left">
           <div><p style="font-size:16px"> 你的当前路径为{{msg}}</p>
           </div>
           <hr> 
           <h1 id="zygh">我的职业规划</h1>
           <p>现在社会是一个个经济迅速发展的社会，也是一个充满竞争的社会，提前做好自己的规划
              对我们更好的适应社会打下基础，作为新时代的大学生，就应该对社会有一个清醒的认识, 
              对现在的就业形式，社会的的政治环境、经济环境、文化环境等等，对自己的性格能力都应
              有清醒的认识，只有这样我们才能更好适应社会，为社会做出更大的贡献，更好的实现自己
              的人生价值。
           </p>
           <p> -----------------------------------------------------------------------------------------------------------------------------</p>
           <h2 id="sxjl">实习经历</h2>
           <p>2018年7月至2018年9月，在恒生电子云永网络第二产品部实习，职位为 初级软件工程师，主要为产品部门进行一些文档编辑工作，操作使用手册、系统部署手册等。</p> 

           <p>2019年7月9月，在恒生电子云永网络第二产品部实习，职位为 初级软件工程师，作为实习生进入公司学习，参与公司一楼大厅专利墙第一版本的软件开发，了解软件的开发流程，学习并使用springboot进行后端开发，学习vue的基础使用，熟练使用公司相关的项目管理工具：SVN、青铜器等</p>

           <p>2020年4月至5月，在恒生电子数据中台发展部进行实习工作（远程办公），主要参与信息披露与监管报送6.0产品的质保工作，在此期入学习JRES3.0技术框架知识，完成流程批审、产品信息维护等研发工作，同时质保相关ETL的采集及部份业务数据清洗工作。</p>
           <p> -----------------------------------------------------------------------------------------------------------------------------</p>
           <h2 id="wlgh">未来规划</h2>
           <p>短期规划（2020～2021）：利用还在学校的时间，好好安排时间，来养成好的学习习惯，并且对自己缺少的知识来进行查漏补缺，利用假期去实习，通过实战来提高自己的编码水平以及团队合作精神的理解，大三的暑假去实习，希望这次实习，可以真正意义的开始帮忙干活，同时我能够学够我需要的知识
              活肯定是做不完的，如果我没有做完任务，希望不要厚着脸皮回家，没完成任务的话，工作日就不要在八点前回家，周末就去老老实实加班，可能我不够聪明，也不够能干，那我就
              用时间来堆，我不信别人能做完的事情，我做不出来。
           </p>
           <p>中期规划（2021～2030）: 好好工作，趁年轻，多加班，多干活，不要偷懒。好好写十年代码，但是一定要注意身体</p>
           <p>长期规划（2030～2050）: 还没有想好</p>
           
           <p>踏踏实实做自己的事情，十年写代码不够就写二十年。踏实一些，不要着急，你想要的，岁月都会给你。</p>
           <p> -----------------------------------------------------------------------------------------------------------------------------</p>
           <h2 id="grfx">个人分析</h2>
           <p> -----------------------------------------------------------------------------------------------------------------------------</p>
           
         </div>
         <div id="right">
             <v-catalog :cataloglist="cataloglist"></v-catalog>
         </div>
         
         <v-bottom></v-bottom>
        
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import ShowBox from '../components/ShowBox.vue';
import Catalog from '../components/Catalog.vue';
import Bottom from  '../components/Bottom.vue';
import Contact from '../components/Contacter.vue'
export default {
    data(){
      
        return {
           msg:this.$route.path,
           cataloglist:[
                {
                    key : 0,
                    value : 'zygh',
                    name :  '职业规划',
                },
                {
                    key : 1,
                    value : 'sxjl',
                    name :  '实习经历',
                },
                {
                    key : 2,
                    value : 'wlgh',
                    name : '未来规划',
                },
                {
                    key : 3,
                    value : 'grfx',
                    name : '个人分析'
                },
            ],
        }
    },
    components:{
       'v-header' : Header,
       'v-showme' : ShowBox,
       'v-bottom' : Bottom,
       'v-contact' : Contact,
       'v-catalog' : Catalog,
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
#left h2{
    text-align: left;
}

#dash{
    border:1 dashed;
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
    margin-left: 4%;
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


