---
order: 0
title:
  zh-CN: 公共头部
  en-US: Common Header
---

## zh-CN

公共头部 - 自定义右侧组件。

## en-US

Common Header.

````jsx
import { Header } from 'antd';
ReactDOM.render(
  <div>
    <Header
      logoCls="custom-logo"
      contentCls="custom-content"
      rightCls="custom-right"
      right={
        <div>
          <span style={{ marginRight: '1.927%' }}>置信店</span>
          <span>xxx医生</span>
        </div>
      }
    />
  </div>,
  mountNode
);

````

<style>
.alu-header { border: 1px solid #ccc; }
.custom-logo {
  flex: 0.14;
  justify-content: left;
  padding-left: 10px;
}
.custom-content {
  flex: 0.72;
}
.custom-right {
  flex: 0.14;
  line-height: 60px;
}
.
</style>
