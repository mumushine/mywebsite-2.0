<template>
  <div id="backgroud">
    <vue-particles
      color="#dedede"
      :particleOpacity="1"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />
    <div id="mes">
      <v-header :test="data"></v-header>

      <child-com @childFn="parentFn"></child-com>

      <div class="newheadtest">
        这里是新的头部组件测试
        <v-headtest></v-headtest>
      </div>

      <div class="axiostest">
        这里是axios的测试区
        <button @click="axiosclick()">点我发送axios请求</button>
      </div>

      <div class="weathertest">
        这里是weather的测试区
        <button @click="handweatherInfo()">点我接收weather信息</button>
      </div>

      <div class="dialogtest">
        这里是dialog弹窗测试区
        <button @click="openMask">点我弹出弹出框</button>
        <v-dialog
          v-model="sendVal"
          type="confirm"
          title="留言框"
          v-on:cancel="clickCancel()"
          @danger="clickDanger()"
          @confirm="clickConfirm()"
          dangerText="Delete"
        />
      </div>

      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Slider from "../components/slidertest.vue";
import axios from "axios";
import Dialog from "../components/Dialog.vue";
import headtest from "../components/headtest";

export default {
  data() {
    "";
    return {
      weather: [],
      retuenlist: [],
      imgArray: [
        { imgsrc: require("../assets/pan1.jpeg") },
        { imgsrc: require("../assets/shuaige.jpeg") },
        { imgsrc: require("../assets/fengjing.jpg") },
        { imgsrc: require("../assets/family.jpg") }
      ],
      data: "我是父组件信息",
      sendVal: false,
      dialogFormVisible: false,
      form: {}
    };
  },
  components: {
    "v-header": Header,
    "v-slider": Slider,
    "v-dialog": Dialog,
    "v-headtest": headtest
  },
  methods: {
    parentFn(childData) {
      this.message = childData;
    },
    axiosclick() {
      const url = "http://localhost:8090/selectallcomment";
      axios
        .post(url)
        .then(res => {
          console.log(res);
          if (res.status == "200") {
            for (let i = 0; i < res.data.length; i++) {
              let item = {};
              item.name = res.data[i].name + "";
              item.age = res.data[i].age + "";
              this.retuenlist.push(item);
            }
          }
          console.log(this.retuenlist);
          //console.log(this.retuenlist)
        })
        .catch(res => {});
    },
    handweatherInfo() {
      const url = "http://localhost:8090/get/临安";
      axios.post(url).then(res => {
        console.log(res.data.data.forecast[0]);
        if (res.status == 200) {
          this.weather = res.data.data.forecast[0];
        }
        console.log(this.weather);
      });
    },
    openMask(index) {
      this.sendVal = true;
    },
    clickCancel() {
      console.log("点击了取消");
    },
    clickDanger() {
      console.log("这里是danger回调");
    },
    clickConfirm() {
      console.log("点击了confirm");
    }
  }
};
</script>
<style scoped>
v-slider {
  margin-top: 100px;
}

.axiostest {
  margin-top: 200px;
  border: 1px solid black;
}

.weathertest {
  margin-top: 200px;
  border: 1px solid black;
}

.dialogtest {
  margin-top: 200px;
  border: 1px solid black;
}

.newheadtest {
  margin-top: 200px;
  border: 1px solid black;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}
.particles {
  background-color: black;
  margin-top: 200px;
  height: 100%;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: page;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
#mes {
  position: relative;
}
</style>