export default {
  pages: [
    "pages/index/index",
    "pages/schedule/index",
    "pages/task/index",
    "pages/statistics/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        iconPath: "assets/images/schedule.png",
        selectedIconPath: "assets/images/schedule_a.png",
        pagePath: "pages/schedule/index",
        text: "日程",
      },
      {
        iconPath: "assets/images/task.png",
        selectedIconPath: "assets/images/task_a.png",
        pagePath: "pages/task/index",
        text: "任务",
      },
      {
        iconPath: "assets/images/statistics.png",
        selectedIconPath: "assets/images/statistics_a.png",
        pagePath: "pages/statistics/index",
        text: "统计",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
  },
};
