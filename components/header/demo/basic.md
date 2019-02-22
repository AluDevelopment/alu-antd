---
order: 0
title:
  zh-CN: 公共头部
  en-US: Common Header
---

## zh-CN

公共头部。

## en-US

Common Header.

````jsx
import { Header } from 'antd';

ReactDOM.render(
  <div>
    <Header />
  </div>,
  mountNode
);
````

````jsx
import { Header } from 'antd';
ReactDOM.render(
  <div>
    <Header 
      rightComponent={
        <div>
          <span>置信店</span>
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
</style>
