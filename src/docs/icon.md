## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `mi-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="mi-icon-edit"></i>
<i class="mi-icon-share"></i>
<i class="mi-icon-delete"></i>
<mi-button type="primary" icon="mi-icon-search">搜索</mi-button>

```
:::

### 图标集合
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'mi-icon-' + name"></i>
      <span class="icon-name">{{'mi-icon-' + name}}</span>
    </span>
  </li>
</ul>
