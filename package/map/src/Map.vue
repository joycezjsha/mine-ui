<template>
  <div class="container">
    <div :id="mapId" style="width: 100%;height:100%">
      <!--<div style="cursor: pointer; position: fixed;bottom: 10vh;right: 1vw;z-index: 1;display: flex;flex-direction: column">-->
        <!--&lt;!&ndash;<img class="control_size" @click="setPitch('click')" :src="iconPitch">&ndash;&gt;-->
        <!--&lt;!&ndash;<img class="control_size" style="margin-top: 1vh" @click="setZoomOut" :src="iconZoomOut">&ndash;&gt;-->
        <!--<div style="display: flex;align-items: center;justify-content: center;" class="control_size icon_map_compass_bg" @click="setRoadCondition">-->
          <!--<img class="map-ctrl-compass" style="width: 70%;height: auto" :src="iconRoadCondition.icons[iconRoadCondition.index]">-->
        <!--</div>-->
        <!--<div class="control_size" @click="setPitch('click')">{{show3D?"3D":"2D"}}</div>-->
        <!--<div class="control_size" @click="setZoomOut" style="font-size: 1.5vw;margin-top:9px;">+</div>-->
        <!--<div class="control_size" @click="setZoomIn" style="font-size: 2vw;line-height: 3.5vh;">-</div>-->
        <!--<div style="display: flex;align-items: center;justify-content: center;" class="control_size icon_map_compass_bg" @click="setCompassRotate">-->
          <!--<img class="map-ctrl-compass" style="width: 8px;height: 22px" @click="setCompassRotate" :src="iconCompass">-->
        <!--</div>-->
        <!--<div id="map-style-button">-->
          <!--&lt;!&ndash;<img :src="mapIcon.icon[mapIcon.index]" @click="changeMapStyle()" />&ndash;&gt;-->
          <!--<ul>-->
            <!--<li class="active" index="0" :style="'background:url('+map_light+');background-size:100% 100%;'" @click="changeMapStyle(0,$event)"></li>-->
            <!--<li class="" index="1" :style="'background:url('+map_dark+');background-size:100% 100%'" @click="changeMapStyle(1,$event)"></li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default
  {
      name:'MyMap',
//    store,//使用store
    data (){
      return {
        map: {},
        currentMarkDiv: {},
        markerPosition:{},
//        mapStyle: "LIGHT",
//        iconZoomOut: './static/images/mapCtr/zoom_out.png',
//        iconZoomIn: './static/images/mapCtr/zoom_in.png',
//        iconCompassBG: './static/images/mapCtr/compass_bg.png',
//        iconCompass: './static/images/mapCtr/compass.png',
//        iconPitch2d: './static/images/mapCtr/pitch_2d.png',
//        iconPitch3d: './static/images/mapCtr/pitch_3d.png',
//        show3D:true,
//        iconRoadCondition:{index:0,icons:[conf.IMG.uncheck_icon_lk,conf.IMG.icon_lk]},
//        map_light:conf.IMG.map_light,
//        map_dark:conf.IMG.map_dark,
        trafficArr:[]
      }
    },
    props: {
      mapId:{
        type:String,
        default: 'map'
      },
      BASE_URL: {
        type: String,
        default: 'https://map.xianjiaojing.com'
      },
      DOMAIN_URL: {
        type: String,
        default: 'https://map.xianjiaojing.com'
      },
      SOLUTION: {
        type: String,
        default: '3492'
      },
      ACCESS_TOKEN: {
        type: String,
        default: '18f589098bf14f5bac790331c60a37ae'
      },
      DEFAULT_CENTER:{
        type: String,
        default: '108.947368,34.288634'
      },
      DEFAULT_ZOOM:{
        type: String,
        default: '10'
      },
      DEFAULT_PITCH:{
        type: String,
        default: '0'
      },
      MAX_ZOOM:{
        type:String,
        default: '17.5'
      },
      showScale:{
        type:Boolean,
        default:false
      }
    },
//    watch: {
//      'mapId':{
//        immediate:true,
//        handler:function(cVAL,oVAL){
//          console.log(cVAL)
//        }
//      }
//    },
    mounted()
    {
      let _this=this;
      _this.initMap()
//      setTimeout(()=>_this.initMap(),20000)
//      this.mapLoading(true);
//          this.map.on('zoom', this.setMileage);
    },
    computed:{
//      iconPitch:function(){
//        return this.show3D ? this.iconPitch3d : this.iconPitch2d;
//      }
    },
//    props:{'isShowCurrentPosition':''},
    methods: {
//      mapLoading: function (isInit) {
//        let that = this
////        this.map.on('load', function () {
////          that.addImages();
////          that.addSourceLayers();
////          that.map.on('click', that.clickLayer);
////          that.map.on('dblclick',that.dbclickLayer);
////          that.map.on('mousemove', that.overLayer);
//////            that.showLayers(that.id,true);
////          that.initPopup();
//////            this.getTrafficLayer();
////          that.showProvinceArea();
////          if(isInit) document.getElementById('layer-list').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].getElementsByTagName('img')[0].click();
////        })
//      },
      //定位当前经纬度
//      goCurrentLocation()
//      {
//        //_czc.push(['_trackEvent', '起终点页面', '点击回当前位置', '','',''])
//        let that = this
//        var geolocation = new BMap.Geolocation();
//        geolocation.getCurrentPosition(function (r) {
//
//          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//            let longitude = r.longitude; // 纬度，浮点数，范围为90 ~ -90
//            let latitude = r.latitude; // 经度，浮点数，范围为180 ~ -180。
//            var coordtransform = require('coordtransform');
//            var bd09togcj02 = coordtransform.bd09togcj02(longitude, latitude);
//
//            that.map.setCenter(
//              bd09togcj02
//            )
//            if (that.markerPosition) {
//              that.markerPosition=null;
//            }
//            that.currentMarkDiv = document.createElement('div');
//            that.currentMarkDiv.id = 'marker';
//            that.currentMarkDiv.style["background-image"] = "url(\'static/images/warning/icon_location.png\')";
//            that.currentMarkDiv.style["background-size"] = "cover";
//            that.currentMarkDiv.style.width = "30px";
//            that.currentMarkDiv.style.height = "30px";
//            that.currentMarkDiv.style.cursor = "pointer";
//            that.markerPosition = new minemap.Marker(that.currentMarkDiv, {offset: [-25, -25]})
//              .setLngLat(bd09togcj02)
//              .addTo(that.map);
//            that.$store.state.position=bd09togcj02;
//          }
//          else {
//            //alert('failed'+this.getStatus());
//          }
//        }, {enableHighAccuracy: true})
//
//      },
      initMap(){
          let _this=this;
//        document.writeln("<link rel='stylesheet' href="+_this.mineMapCss+">");
//        document.writeln("<script src="+_this.mineMapJS+" />");
        minemap.domainUrl = _this.BASE_URL;
        minemap.dataDomainUrl = _this.DOMAIN_URL;
//        minemap.spriteUrl = mapConfig.sprite;//mapConfig.BASE_URL + '/minemapapi/v2.0.0/sprite/sprite';
        minemap.serviceUrl = _this.BASE_URL + '/service';
        minemap.accessToken = _this.ACCESS_TOKEN;
        minemap.solution =_this.SOLUTION;
        this.map = new minemap.Map({
          container: _this.mapId,
          style: _this.BASE_URL + "/service/solu/style/id/" + _this.SOLUTION,
          center: _this.DEFAULT_CENTER.split(','),
          zoom: _this.DEFAULT_ZOOM,
          pitch: _this.DEFAULT_PITCH,
          maxZoom: _this.MAX_ZOOM,
//          minZoom: mapConfig.MIN_ZOOM
        });
//          this.map.addControl(new minemap.Navigation(), "bottom-right");
        if(this.showScale) this.map.addControl(new minemap.Scale(),"bottom-left");
//        this.$nextTick(function(){
//          document.getElementsByClassName('minemap-ctrl-bottom-left')[0].style.left='13%';
//        })
        this.map.resize();
        window.sessionStorage.setItem("map",this.map);
//        this.map.on('load',function(){
//          _this.getTrafficLayer();
//          _this.map.on("move", this.setCompassRotateIcon);
//        })
      },
//      setRoadCondition(e){
//        this.iconRoadCondition.index=!this.iconRoadCondition.index?1:0;
//        if(this.iconRoadCondition.index){
//          this.showTraffic('visible');
//        }else{
//          this.showTraffic('none');
//        }
//      },
//      showTraffic(val){
//        let that = this;
//        if(that.trafficArr.length>0){
//          for (let i = 0; i < that.trafficArr.length; i++) {
//            if(that.map.getLayer(that.trafficArr[i])) {
//              that.map.setLayoutProperty(that.trafficArr[i], 'visibility', val);
////                  that.map.setLayoutProperty(that.trafficArr[i], 'line-cap', 'butt');
////                  that.map.setLayoutProperty(that.trafficArr[i], 'line-round-limit', '2');
////                that.map.setLayoutProperty(that.trafficArr[i], 'line-miter-limit', '3');
////                that.map.setLayoutProperty(that.trafficArr[i], 'strokeStyle', '');
//            }
//          }
//        }
//      },
//      setZoomIn (){
//        this.map.zoomOut();
//      },
//      //设置地图缩小一级
//      setZoomOut (){
//        this.map.zoomIn();
//      },
//      setCompassRotate (){
//        this.map.setBearing(0);
//        document.getElementsByClassName('map-ctrl-compass')[0].style.transform='rotate(0deg)';
//      },
//      //设置旋转图标旋转角度
//      setCompassRotateIcon(e) {
//        document.getElementsByClassName('map-ctrl-compass')[0].style.transform='rotate(' + e.target.transform.bearing + 'deg)';
//      },
//      setRoadCondition(e){
//        this.iconRoadCondition.index=!this.iconRoadCondition.index?1:0;
//        if(this.iconRoadCondition.index){
//          this.showTraffic('visible');
//        }else{
//          this.showTraffic('none');
//        }
//      },
//      setPitch(show) {
//        if (show == 'click') {
//          this.show3D = !this.show3D;
//
//        } else {
//          this.show3D = show;
//        }
//        if (!this.show3D) {
//          this.map.setPitch(0);
//        } else {
//          this.map.setPitch(60);
//        }
//      },
//      setPitchIcon(e){
//        if (e.target.transform.pitch > 1) {
//          this.show3D = true;
//        } else {
//          this.show3D = false;
//        }
//      },
//      styleChange(value){
//        console.log(value);
//        let active_li=document.getElementById('map-style-button').getElementsByTagName("ul")[0].getElementsByTagName("li")[value];
//        active_li.setAttribute('index',0);
//        let no_active_li=document.getElementById('map-style-button').getElementsByTagName("ul")[0].getElementsByTagName("li")[value==0?1:0];
//        no_active_li.setAttribute('index',1);
//        no_active_li.classList.remove('active');
//        active_li.classList.add('active');
//        document.getElementById('map-style-button').getElementsByTagName("ul")[0].innerHTML = "";
//        document.getElementById('map-style-button').getElementsByTagName("ul")[0].appendChild(active_li);
//        document.getElementById('map-style-button').getElementsByTagName("ul")[0].appendChild(no_active_li);
//      },
//      getTrafficLayer(){
//        let that=this;
//        conf.interf.TRAFFIC_API(mapConfig.MAP_TRAFFIC_URL+mapConfig[that.mapStyle].SOLUTION+'?token='+mapConfig[that.mapStyle].ACCESS_TOKEN,{}).then((res) => {
//          let data=res.data;
//          if(data.data.rows[0].layers){
//            let arr = data.data.rows[0].layers;
//            let idarr = [];
//            for (let i = 0; i < arr.length; i++) {
//              let content = JSON.parse(arr[i].content || '{}')
//              if (content['source'] == 'Traffic'  && content['source-layer'] == 'Trafficrtic') {
//                that.trafficArr.push(arr[i].id)
////                    that.map.setLayoutProperty(arr[i].id, 'visibility', 'none');
//              };
//              if(content['source'] == 'DynamicTraffic' && content['source-layer'] == 'link'){
//                that.trafficParticleIds.push(arr[i].id);
////                    that.map.setLayoutProperty(arr[i].id, 'visibility', 'none');
//              }
//            }
//          }
//        });
//      },
//      changeMapStyle: function (value,el) {
//        if(value!=this.mapIcon.index){
//          this.mapIcon.index = value;//this.mapIcon.index == 0 ? 1 : 0;
//          let style = this.mapIcon.index == 0 ? 'LIGHT' : 'DARK';
////              this.classChange(style, "map-style-item", "map-style-item-checked");
//          this.styleChange(el.target.getAttribute('index'));
//          mapConfig.DEFAULT_CENTER = this.map.getCenter();
//          mapConfig.DEFAULT_PITCH = this.map.getPitch();
//          mapConfig.DEFAULT_ZOOM = this.map.getZoom();
//          this.mapStyle = style;
//          this._removeMap();
//          this._initMap(false);
//          document.getElementById("map-style-div").style.display = "none";
//          this.clearEdit();
//        }
//
//      },
    },
    destroyed: function () {
      console.log('destroyed is Map')
    }

  }
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  /*进入规划页面的样式*/
  #route {
    position: absolute;
    top: 2rem;
    right: 5vw;
    background-color: white;
    border-radius: 10px;
    z-index: 1;
  }

  #map #map-style-button{
    position: absolute;
    bottom: -30%;
    right: 1%;
    width:90px;
    height:50px;
    background-color:#124aa7 ;
    border-radius: 8px;
  }
  #map #map-style-button:hover{width:180px;}
  #map #map-style-button img{cursor: pointer;margin-right:0.5vw;height: 3vh;}
  #map #map-style-button ul{display: block;width:100%;height:100%;padding:5px;overflow: hidden;}
  #map #map-style-button ul li{float:left;width:80px;height:100%;cursor: pointer;border-radius: 10px;}
  #map #map-style-button ul li.active,  #map-ctrl #map-style-button ul li:hover{
    border:1.5px solid #00c6ff;
  }
  #map-ctrl #map-style-button ul li.active,  #map-ctrl #map-style-button ul li:nth-child(1){margin-right:4%;margin-bottom: 5px;}
</style>
