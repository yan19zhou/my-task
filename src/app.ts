import { createApp } from "vue";
import TAROUI from "taro-ui-vue/src";
import echarts from "echarts";
import "taro-ui-vue/dist/style/index.scss";
import "./app.scss";
import "./assets/style/iconfont.css";
import { createLogger } from "vuex";
const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.config.globalProperties.$echarts = echarts;
App.use(TAROUI);
export default App;
