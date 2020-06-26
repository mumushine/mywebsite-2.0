<template>
    <div>
         <v-header></v-header>
         <div>
             <div id="left">
                <div id="left_top">
                     <img src="../assets/mine/m6.jpeg" alt="">
                     <p>自闭菜鸟小吴的博客<br>码龄： 3年</p>
                     <div>
                        <p>
                            17 <br>
                            原创
                        </p>
                         <p>
                            17 <br>
                            原创
                        </p>
                         <p>
                            17 <br>
                            原创
                        </p>
                         <p>
                            17 <br>
                            原创
                        </p>
                     </div>
                    <br><br><br><br><br><br>
                </div>
                <div id="search">
                   
                    <input type="text" style="width:200px">
                    <button style="margin-left:20px">搜索</button>
                  
                </div>
                <div id="pages">
                    最新文章目录
                    <div v-for="(item,i) in list" class="detail">
                        {{item.name}}
                    </div>
                </div>
             </div>
             <div id="right">
                 <div id="search2"> 
                     <input type="text" style="width:50%;height:30px;margin-left:30%">
                     <button> 搜索文章</button>
                     <button> 新增文章</button>
                 </div>
                <div v-for="(item,index) in articlelist" :key="index" class="article">
                   <a :href="item.url"  >
                       <span class="status">{{item.status}}</span>
                       {{item.name}}
                   </a><br>
                   <a :href="item.url">
                       <span class="description">{{item.description}}</span>
                   </a> <b></b>
                   <p style="font-size: 14px;">{{item.time}}</p>
                  
                </div>
             </div>
         </div>
        <v-bottom/>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Bottom from '../components/Bottom'
export default {
    data(){
        return {
           list:[
                {id:1, name:'Jave EE 的自学经历'},
                {id:2, name:'我的springboot报错日志'},
                {id:3, name:'vue项目的搭建（mac版）'},
                {id:4, name:'idea for mac 黑夜模式的设置'},
                {id:5, name:'javaee实现购物车'},
                {id:6, name:'我的Java历程之俄罗斯方块'},
           ],
           articlelist:[
                {
                    id:1,
                    name:'Jave EE 的自学经历',
                    description:'要解决最最基本的问题自我总结有三个： 1.怎么样把数据从前端传至后台； 2.怎么样把从数据库拿到的数据显示到前端web页面； 3.怎么样把所需的数据从数据库取出； 所用为Springmvc框架，所用的案例是上学期的购物车； .xml文件内是从数据库拿数据的语句； mapper文件是封装从数据库拿...',
                    status:'原创',
                    url:'https://blog.csdn.net/qq_40544575/article/details/95175850',
                    time:'2019-07-09 14:40:52'
                },
                {
                    id:2,
                    name:'我的springboot报错日志',
                    description:'1	.要防止依赖重复导入，不然会报错 There was an unexpected error (type=Not Found, status=404). No message available',
                    status:'原创',
                    url:'',
                    time:'2019-07-09 14:40:52'
                },
                {
                    id:3,
                    name:'vue项目的搭建（mac版）',
                    description:'这问题真的是快磨死我了，纠结了俩天了，各种坑，各种踩。 最大的问题是mac下的权限问题，网上有关于权限的介绍，大概就是macOs为了安全，设定了一个Rootless（就是困扰我们的权限问题），这个东西可以关闭，但是为了安全，我没敢关。 简介：OSX10.11之后推出的Rootless机制，一个内核...',
                    status:'原创',
                    url:'',
                    time:'2019-07-09 14:40:52'
                },
                {
                    id:4,
                    name:'idea for mac 黑夜模式的设置',
                    description:'Mac下的idea与Windows下的idea，有些略微的差别。 导致我很久没有找到setting，跳进了坑，后来摸索出坑的小方法。 这个就是mac下的设置。 切换方法： 进入设置后，点击Editor——Color Scheme—— General，选中Scheme，切换模式，最后添加依赖。（...',
                    status:'原创',
                    url:'',
                    time:'2019-07-09 14:40:52'
                },
                {
                    id:5, 
                    name:'javaee实现购物车',
                    description:'此为上课老师所教授内容。写的目的权当为我温习的方法。 数据库的逻辑设计（简略的E-R图） 具体的数据库表的设计： 购物逻辑层',
                    status:'原创',
                    url:'',
                    time:'2019-07-09 14:40:52'
                },
                {
                    id:6,
                    name:'我的Java历程之俄罗斯方块',
                    description:'了解到一共有五种方块。分别是T字型，田字型，一字型，L字型，Z字型。 规则补充： 把每一个种方块拆分为单独的一个最小单位块。 向右移动时，列数加一；向左移动，时列数减一；向下移动时，行数加一。 import java.awt.*; import java.awt.Image; publ...',
                    status:'原创',
                    url:'',
                    time:'2019-07-09 14:40:52'
                },
           ]
        }
    },
    components:{
       'v-header' : Header,
       'v-bottom' : Bottom,
    },
    methods:{
     
    }
    
}
</script>
<style scoped>
#left{
    float: left;
    margin-left: 3%;
    height: 100%;
    width: 20%;
    border: black 1px solid;
}

#left_top{
    margin-top: 2%;
    border: black 1px solid;
    height: 180px;
}

#left_top img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
}

#left_top p{
    float: left;
    margin-top: 20px;
    margin-left: 30px
}

#search{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    margin-top: 2%;
    border: black 1px solid;
}

#search2{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    margin-top: 2%;
    border: black 1px solid;
}

#pages{
    margin-top: 2%;
    border: black 1px solid;
}

.detail{
    margin-top: 50px;
}



#right{
    float: left;
    margin-left: 5%;
    padding-bottom: 5%;
    height: 100%;
    width: 65%;
    border: black 1px solid;
}

.article{
    margin-top: 20px;
    padding-left: 20px;
    border: black 1px solid;
}

.article:hover a{
    color: #5094d5;
}

.article:hover{
    background: #f9fafc
}

.article a{
    color: #222226;
    font-size: 18px;
    
    text-decoration:none;
}

.status{
    width: 34px;
    height: 20px;
    font-size: 12px;
    font-family: 'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;
    border-radius: 2px;
    margin-right: 8px;
    color: #e33e33;
    background-color: rgba(227,62,51,0.1); 
}

.description{
    font-size: 14px;
    line-height: 22px;
    white-space: normal;
    color: #999aaa;
    
    
}

</style>