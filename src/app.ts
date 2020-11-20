import { createApp } from "vue";
import "./app.scss";
import TAROUI from "taro-ui-vue/src";
import "taro-ui-vue/dist/style/index.scss";
const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.use(TAROUI);
export default App;
