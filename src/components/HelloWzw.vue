<template>
  <div class="hello">
    <v-header/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'HelloWzw',
  data () {
    return {
      msg: 'Hello!这里是小吴同学'
    }
  },
  components:{
       'v-header' : Header,
  }
}
</script>
