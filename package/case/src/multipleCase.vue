<template>
  <div class="case-multiple">
    <div class="part-btn" v-if="showCase" @click="returnManage"><img :src="CLOSE_IMG" /></div>
    <main-case v-if="showCase" style="width:100%;height:100%;" :data="case_http"></main-case>
    <!--<iframe id="case" src="http://www.minedata.cn/case" frameborder="no" border="0"></iframe>-->
    <!--<div class="title" style="padding-left: 0">地图服务 <i class="mi-breadcrumb__separator el-icon-arrow-right"></i> "案例集锦"</div>-->
    <ul v-if="!showCase">
      <li v-for="(o, index) in data" :offset="index > 0 ? 2 : 0" :key="index">
        <div :body-style="{ padding: '0px' }" @click="clickCase(o)">
          <div class="case-img-box"><img @click="clickCase(o)" :src="o.img" class="case-image" /></div>
          <div style="padding: 14px;text-align: left;" @click="clickCase(o)">
            <span style="color:#000;">{{o.title}}<span :span="8" style="float:right;text-align: right;">{{o.currentDate}}</span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mainCase from "./case.vue";
    export default {
      components: {mainCase},
      name: "case-connect",
      props:{"data":{type:Array,default:()=>{}}},
      watch:{

        data:{
          immediate: true,
          handler:function(newVal,oldVal){
            this.showCase=false;
          }
        }

      },
      data(){
         return {
           showCase:false,
           case_http:'',
           CLOSE_IMG:'./static/case/images/close.png'
         }
      },
      methods:{
        clickCase(row){
          let that=this;
          console.log(row)
          this.case_http=row.http;
          this.showCase=true;
        },
        returnManage(){
          this.showCase=false;
        }
      }
    }
</script>

<style scoped>
  .case-multiple {
    height: 100%;
  }
  .case-multiple ul li{float:left;width:23%;list-style: none;height:auto;box-shadow: 0 0 10px #ccc;overflow: hidden;margin-right:2%;margin-left:0;min-width: 300px;}
  .case-img-box{width: 100%;height:22vh;cursor: pointer; overflow: hidden;padding: 5px;}
  .case-img-box .case-image{transition: all .5s ease;width:100%;height:100%;}
  .case-img-box .case-image:hover{
    transform: scale(1.1); /* 放大1.2倍 */
   }
  .part-btn{
       position: absolute;
       z-index: 1004;
       top: 8%;
       right: 3%;
       height: 34px;
       width: 50px;
       line-height: 34px;
       cursor: pointer;
       text-align: right;
     }
</style>
