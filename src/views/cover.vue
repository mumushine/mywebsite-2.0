<template>
  <div id="main">
      <router-link to="/index">
      <img src="../assets/long1.jpeg" alt="">
      </router-link>
      <v-bottom></v-bottom>
  </div>
</template>

<script>
import Bottom from '../components/Bottom'
export default {
    components:{
       'v-bottom' : Bottom
    }
}
</script>

<style>
#main{
    background-image: '../assets/long1.jpeg';
}

#main img{
    height: 100%;
    width: 100%;
}
</style>