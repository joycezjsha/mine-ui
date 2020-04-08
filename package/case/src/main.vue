<template>
    <div class="case-main">
      <div class="case__title">{{demoTitle}}</div>
      <div class="case__body">
        <div class="case_menu">
          <ul>
            <li v-for="item in menuData" @click="showCase($event,item)">{{item.title}}</li>
          </ul>
        </div>
        <div class="case_item" v-if="!isCase">
          <mine-map mapId="map_1" style_param='display: flex;'></mine-map>
        </div>
        <div class="case_item" v-else>
          <main-case v-if="singleCase" :data="case_http"></main-case>
          <multiple-case v-else :data="case_http"></multiple-case>
        </div>
      </div>
    </div>
</template>

<script>
  import mainCase from "./case.vue";
  import multipleCase from "./multipleCase.vue";
  import {config} from "../config"
    export default {
      components: {mainCase,multipleCase},
      name: "mineCase",
      props:{
          demoTitle:{
              type:String,
            default:'陕西省公安厅交通警察总队集成指挥平台地图大数据项目'
          }
      },
      data(){
          return {
            case_http:null,
            menuData:null,
            singleCase:true,
            isCase:false
          }
      },
//      created(){
//          console.log(this.$route.query.row);

//      },
      mounted(){
        config.GET_CASE_DATA("./static/data/case/data.json").then((response) => {
          if (response) {
            this.menuData=response.data.data;
          }
        })
      },
      methods:{
        returnManage() {
//          this.$router.back();
        },
        showCase(e,data){
            this.isCase=true;
            let actives=document.getElementsByClassName("_active");
            if(actives.length>0){
              actives[0].classList.remove('_active');
            }
          e.target.classList.add('_active');
            if(data.https instanceof Array){
                  this.singleCase=false;
                  this.case_http=data.https;

            }else{
                this.singleCase=true;
                this.case_http=data.https;
            }

        }
      }
    }
</script>

