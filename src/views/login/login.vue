<template>
  <div class="hello">
    <v-header />
    <el-form :model="viewPanel" status-icon :rules="rules" ref="viewPanel" label-width="100px">
        <el-form-item label="用户名" prop="userName">
            <el-input type="primary" v-model="viewPanel.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="viewPanel.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('viewPanel')">提交</el-button>
            <el-button @click="resetForm('viewPanel')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import axiosHttp from "@/utils/axiosHttp"
import { Button, Select,Form } from 'element-ui';
export default {
  name: "HelloWzw",
  data() {
    return {
      msg: "登录界面",
      urls:{
          loginUrl:'http://localhost:8090/login',
          loginUrl2:'/api/login',
      },
      viewPanel:{
          userName: '',
          password: ''
      },
      rules: {
          userName: [
            { message: '用户名不能为空', required: true, trigger: 'blur' }
          ],
          password: [
            { message: '密码不能为空', required: true, trigger: 'blur' }
          ] 
        }
      };
  },
  methods: {
      submitForm(formName) {
        let param = {...this.viewPanel};
            axiosHttp["post"](this.urls.loginUrl, param).then(res => {
                if (res.data.code == "200") {
                    let data = res.data.data;
                    this.$message.success(data)
                }
            }).catch(error => {
                this.$message.error('系统故障，请联系管理员')
            })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  components: {
    "v-header": Header
  }
};
</script>
