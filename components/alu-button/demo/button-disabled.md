---
order: 3
title:
  zh-CN: 不可用按钮
  en-US: Disabled
---

## zh-CN

不可用按钮。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

````jsx
import { Row, Col, Button } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={6}>
        <Button size="large" disabled>已收费</Button>
      </Col>
      <Col span={12}>
        <Button disabled>诊后收费</Button>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
