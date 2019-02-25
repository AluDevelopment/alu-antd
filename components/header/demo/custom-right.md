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
  <div className="container">
    <div className="page">
      <Header
        env='dev'
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
    </div>
  </div>,
  mountNode
);

````

<style>
.container {
  overflow-x: scroll;
}
.page {
  width: 100vw;
  height: 100px;
}
.alu-header { border: 1px solid #ccc; }
.custom-logo {
}
.custom-content {
  flex: 1;
}
.custom-right {
  line-height: 60px;
}
.
</style>
