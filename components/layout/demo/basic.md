---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

````jsx
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

ReactDOM.render(
  <div>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>,
  mountNode
);
````

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .alu-layout-header,
#components-layout-demo-basic .alu-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .alu-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .alu-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .alu-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .code-box-demo > div > .alu-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .code-box-demo > div > .alu-layout:last-child {
  margin: 0;
}
</style>
