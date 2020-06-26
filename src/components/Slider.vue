<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
                        <img :src='img.imgsrc'>
                </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>


<script>
export default {
    props:{
        imgArray: [],
    },
  data () {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
    }
  },
  methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === this.imgArray.length) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 80%;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 600px;
  }
  li {
    position: absolute;
  }
  img {
    width: 100%;
    height: 600px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background:lightskyblue !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>