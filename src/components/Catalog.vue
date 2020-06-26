<template>
   <div id="catalog">
       <h1 style="margin-bottom:100px">目录</h1>
       <p v-for="(item,index) in cataloglist" :key="index" v-on:click="skipclick(index)" class="p1">
           {{item.name}}
       </p>
   </div>
</template>

<script>
export default {
    props:{
        cataloglist: [],
    },
    data(){
        return{
            style:''
        }
    },
    methods:{
        skipclick(index){
            window.location.hash = this.cataloglist[index].value
        }
    }
    
}
</script>

<style>
#catalog{
    border: black 1px solid;
    position: fixed;
    width: 20%;
    height: 50%;
    text-align: center;
}

.p1:hover{
    color: blue;
}
</style>