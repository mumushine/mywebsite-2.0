<template>
    <div id="max">
	<nav v-bind:class="active" >
		<img id="logo" src="../assets/mumu.png" alt="/" height="90px" width="200px">
		<router-link to="/index" class="home" v-on:mouseover="mouseover1()" v-on:mouseleave="mouseleave1()" :style="style1">首页</router-link>
		<router-link to="/myinfo" class="projects" v-on:mouseover="mouseover2()" v-on:mouseleave="mouseleave2()" :style="style2">个人名片</router-link>
		<router-link to="/myblogs" class="services" v-on:mouseover="mouseover3()" v-on:mouseleave="mouseleave3()" :style="style3">技术博客</router-link>
		<router-link to="/careerPlan" class="contact" v-on:mouseover="mouseover4()" v-on:mouseleave="mouseleave4()" :style="style4">职业生涯</router-link>
		<router-link to="/mylife" class="contact" v-on:mouseover="mouseover5()" v-on:mouseleave="mouseleave5()" :style="style5">我的生活
		<div id="test" ref="test">
			<ul style="list-style-type:none;">
				<li><router-link to="/mylife/growth">成长经历</router-link>></li>
				<li><router-link to="/mylife/unilife">大学生活</router-link></li>
				<li><router-link to="/mylife/dayily">我的日常</router-link></li>
			</ul>
		</div>
		</router-link>
		<router-link to="/messageBoard" class="contact" v-on:mouseover="mouseover6()" v-on:mouseleave="mouseleave6()" :style="style6">留言板</router-link>
	</nav>
		
    </div>
</template>
<script>
export default {
	props :['test'],
    data(){
        return{
            msg:'我是一个头部组件',
			style1:'',
			style2:'',
			style3:'',
			style4:'',
			style5:'',
			style6:'',
			style7:'',
			message:'我是子组件信息'
        }
    },
    methods: {
		makeActive: function(item){
			// 模型改变，视图会自动更新
            this.active = item;
            //alert(item)
		},
		mouseover1(){
			this.style1 = 'background-color: #cccccc';
		},
		mouseleave1(){
			this.style1 = '';
		},
		mouseover2(){
			this.style2 = 'background-color: #cccccc';
		},
		mouseleave2(){
			this.style2 = '';
		},
		mouseover3(){
			this.style3 = 'background-color: #cccccc';
		},
		mouseleave3(){
			this.style3 = '';
		},
		mouseover4(){
			this.style4 = 'background-color: #cccccc';
		},
		mouseleave4(){
			this.style4 = '';
		},
		mouseover5(){
			this.style5 = 'background-color: #cccccc';
			this.$refs.test.style.display = 'block'
			this.$refs.test.style.background = '#cccccc';

		},
		mouseleave5(){
			this.style5 = '';
			this.$refs.test.style.display = 'none';
		},
		mouseover6(){
			this.style6 = 'background-color: #cccccc';
		},
		mouseleave6(){
			this.style6 = '';
		},
        click(){
            this.$emit('childFn', this.message);
        }
        
	},
}
</script>
<style scoped>
    .header{
        background:black;
        color: gainsboro;
    }

	*{
		margin:0;
		padding:0;
	}

	#logo{
		float: left;
		margin-top: 10px;
		margin-left: 20%;
	}
	body{
		font:15px/1.3 'Open Sans', sans-serif;
		color: #5e5b64;
		text-align:center;
	}

	a, a:visited {
		outline:none;
		color:#389dc1;
	}

	a:hover{
		color: red;
		text-decoration:none;
	}

	

	section, footer, header, aside, nav{
		display: block;
	}
	nav{
		width: 95%;
		height: 100px;
		display:inline-block;
		margin:10px auto 45px;
		background-color: #fdf9fa;
		box-shadow:0 1px 1px #ccc;
		border-radius:0;
		text-align: right;
		margin-left: 2.5%;
	}

	nav a{
		display:inline-block;
		padding: 18px 30px;
		margin-top: 30px;
		color: #494949 !important;
		font-weight:bold;
		font-size:14px;
		text-decoration:none !important;
		line-height:1;
		text-transform: uppercase;
		-webkit-transition:background-color 0.25s;
		-moz-transition:background-color 0.25s;
		transition:background-color 0.25s;
	}

	nav a:first-child{
		border-radius:2px 0 0 2px;
	}

	nav a:last-child{
		border-radius:0 2px 2px 0;
	}

	p{
		font-size:22px;
		font-weight:bold;
		color:#7d9098;
	}

	p b{
		color:#ffffff;
		display:inline-block;
		padding:5px 10px;
		background-color:#c4d7e0;
		border-radius:2px;
		text-transform:uppercase;
		font-size:18px;
	}

	#test{
		display: none;
		font-weight:bold;
		font-size:14px;
		text-decoration:none !important;
		line-height:1;
		text-transform: uppercase;
		position: absolute;
		left: 81.5%;
		bottom: 56.2%;
		font-style: black;
		z-index: 9999;

	}
	#test ul li{
		margin-top: 10px;
	}
    </style>