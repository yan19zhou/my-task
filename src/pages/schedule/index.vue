<template>
  <view class="schedule">
    <text class="date">{{date}}</text>
    <view class="items">
      <view
        :class="['item',isComplete?'green_bg':'red_bg']"
        v-for="(project,index) in projects"
        :key="index"
      >
        <view>{{project.time}}</view>
        <view>{{project.duration}}</view>
        <view>{{project.name}}</view>
      </view>
    </view>
    <view>
      <AtButton class="btn" type="primary" @click="(e) => handleClick('secondary')">编辑日程</AtButton>
    </view>
  </view>
</template>

<script>
import Taro, { Component } from "@tarojs/taro";
import { ref, onMounted, getCurrentInstance } from "vue";

export default {
  setup(props, context) {
    //当前日期
    let date = ref(null);
    date = new Date().toLocaleDateString().replace(RegExp("/", "g"), "-");
    const projects = projectData();
    function handleClick(e) {
      console.log(e);
    }
    const { ctx } = getCurrentInstance();
    onMounted(() => {
      console.log(ctx.$echarts);
    });

    return {
      date,
      projects,
      handleClick,
    };
  },
};
function projectData(params) {
  const list = [
    {
      time: "07:30-08:00",
      duration: "30分钟",
      name: "洗漱",
      isComplete: false,
    },
    {
      time: "08:00-08:30",
      duration: "30分钟",
      name: "运动",
      isComplete: false,
    },
    {
      time: "19:45-20:15",
      duration: "30分钟",
      name: "散步",
      isComplete: false,
    },
    {
      time: "20:20-22:30",
      duration: "2小时10分",
      name: "点电视",
      isComplete: false,
    },
    {
      time: "22:30-22:45",
      duration: "15分钟",
      name: "运动",
      isComplete: false,
    },
    {
      time: "22:45-23:15",
      duration: "30分钟",
      name: "洗漱-护肤",
      isComplete: false,
    },
  ];
  return list;
}
</script>
<style lang="scss">
.schedule {
  width: 90%;
  margin: 0 auto;
  .date {
    font-size: 20px;
    display: inline-block;
    width: 100%;
  }
  .date::after {
    content: "";
    height: 1px;
    width: 90%;
    position: absolute;
    top: 40px;
    left: 5%;
    background-color: #ebebeb;
  }
  .items {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 48%;
      color: #fff;
      text-align: center;
      margin-top: 20px;
      padding: 10px 0;
      border-radius: 5px;
    }
  }
  .btn {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
