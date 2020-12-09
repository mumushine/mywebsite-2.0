<template>
  <div class="hello">
    <v-header />
    <h1>{{ msg }}</h1>
    <el-button type="primary">饿了么按钮</el-button>
    <button>普通按钮</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { Button, Select } from 'element-ui';
export default {
  name: "HelloWzw",
  data() {
    return {
      msg: "Hello!这里是小吴同学"
    };
  },
  components: {
    "v-header": Header
  }
};
</script>
