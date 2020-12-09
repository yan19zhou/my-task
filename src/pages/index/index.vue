<template>
  <suspense>
    <view class="index position-r">
      <text>{{code}}</text>
      <AtButton class="center-both" @tap="toHome">使用微信登录</AtButton>
      <view class="wrap">
        <view class="Avatar center-both">
          <open-data type="userAvatarUrl"></open-data>
        </view>
      </view>
    </view>
  </suspense>
</template>

<script>
import Taro, { Component } from "@tarojs/taro";
import { ref, onMounted } from "vue";
import "./index.scss";

export default {
  setup() {
    let code = ref(null);
    // 点击事件
    let toHome = goHome;
    onMounted(() => {
      // 异步函数请求数据
      login(code);
    });
    return { code, toHome };
  },
};

async function login(code) {
  /*   
   登录接口
   一个异步请求的范例
   */
  let data = await Taro.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        return res.code;
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    },
  });
  code.value = data;
}
function goHome() {
  // 路由跳转
  Taro.switchTab({ url: "/pages/task/index" });
}
</script>
