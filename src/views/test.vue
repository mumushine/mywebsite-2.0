<template>
  <div>
    这里是测试界面
    <div>
      <button @click="axiostest()">点我发送axios虚拟请求</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    axiostest() {
      this.$axios
        .post("/api/selectallcomment", {
        })
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          alert("错误：" + res);
        });
    }
  }
};
</script>

<style>
</style>