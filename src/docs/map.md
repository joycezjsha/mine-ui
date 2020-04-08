# 基础地图

----
minemap地图的简单封装。

:::demo 基础用法。

```html
  <div style='width:100%;height:400px;'>
    <my-map mapId="map_1"></my-map>
  </div>

```
:::

:::demo 地图倾斜角设为60
```html
  <div style='width:100%;height:400px;'>
    <my-map DEFAULT_PITCH="60" mapId="map_2" ></my-map>
  </div>

```
:::
### Attributes
| 参数           | 说明    | 类型      | 可选值           | 默认值   |
|----------------|-------- |---------- |------------------|-------- |
| BASE_URL       |  地图地址   | string  |     —      |       //https://map.xianjiaojing.com     |
| DOMAIN_URL     |  地图地址   | string    |    |         //https://map.xianjiaojing.com   |
| SOLUTION       |  方案号   | string    | — |       3492（示例中心）  |
| ACCESS_TOKEN     | token   | string    | — |       18f589098bf14f5bac790331c60a37ae |
| DEFAULT_CENTER     |  中心点  | string    | — |  108.947368,34.288634  |
| DEFAULT_ZOOM     | 默认缩放等级   | string    | — | 8   |
| DEFAULT_PITCH  | 默认地图倾斜度    | string   | —   | 0   |
| MAX_ZOOM  | 最大缩放等级 | string   |  —  | 17.5  |
| showScale  | 地图比例尺 | boolean   |  —  | false  |
| mapId      | 容器id | string   |  —  | map  |
