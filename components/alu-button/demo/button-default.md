---
order: 1
title:
  zh-CN: 次按钮
  en-US: Default
---

## zh-CN

次按钮。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

````jsx
import { Row, Col, Button, Icon } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={6}>
        <Button size="large">退号</Button>
        <Button size="large">充值</Button> <br/>
        <Button size="large">打印</Button>
        <Button size="large">在线建档</Button> <br/>
        <Button size="large" subtitle="患者信息">查看</Button>
      </Col>
      <Col span={12}>
        <Button>银行卡</Button>
      </Col>
      <Col span={6}>
        <Button size="small" icon="edit">修改</Button>
        <Button size="small" icon="arrow-left">返回</Button> <br/>
        <Button size="small">查看</Button>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
