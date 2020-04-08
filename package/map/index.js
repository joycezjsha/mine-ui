/**
 * Created by ThinkPad on 2019/3/29.
 */
import myMap from './src/Map.vue'
// 这里是重点
  myMap.install=(Vue)=>{
    Vue.component(myMap.name,myMap);
  };
export default myMap;
