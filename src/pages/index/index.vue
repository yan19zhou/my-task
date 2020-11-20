<template>
  <suspense>
    <view class="index position-r">
      <text>{{code}}</text>
      <AtButton class="center-both">使用微信登录</AtButton>
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
    login(code);
    return { code };
  },
};

function login(code) {
  Taro.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        code.value = res.code;
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    },
  });
}
</script>
