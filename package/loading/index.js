/**
 * Created by ThinkPad on 2019/3/29.
 */
import Loading from './src/loading.vue'
// 这里是重点
Loading.install=Vue=>{
  Vue.component(Loading.name,Loading);
}
export default Loading;
