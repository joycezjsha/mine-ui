# 快速开始

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import MineUI from 'mine-ui-library' // 引入组件库
import 'mine-ui-library/package/theme-set/lib/index.css' // 引入样式库

Vue.use(MineUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { MineButton } from 'mine-ui-library'

export default {
  components: {
    MineButton
  }
}
```

在模板中，用 `<mine-button></mine-button>` 自定义标签的方式使用组件

```html
<template>
  <mine-button>这是一个按钮</mine-button>
</template>
```

### 自定义主题

`UI` 基于stylus,可修改 `mine-ui/packages/theme-set/src/common/var.css` 文件自定义主题
