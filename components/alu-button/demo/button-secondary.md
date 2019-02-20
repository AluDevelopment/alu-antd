---
order: 1
title:
  zh-CN: 次按钮
  en-US: Secondary
---

## zh-CN

次按钮。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

````jsx
import { Row, Col, Button } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={6}>
        <Button type="secondary" size="large">退号</Button>
        <Button type="secondary" size="large">充值</Button> <br />
        <Button type="secondary" size="large">打印</Button>
        <Button type="secondary" size="large">在线建档</Button> <br />
        <Button type="secondary" size="large" subtitle="患者信息">查看</Button>
      </Col>
      <Col span={12}>
        <Button type="secondary">银行卡</Button>
      </Col>
      <Col span={6}>
        <Button type="secondary" size="small" icon="edit">修改</Button>
        <Button type="secondary" size="small" icon="arrow-left">返回</Button> <br />
        <Button type="secondary" size="small">查看</Button>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
