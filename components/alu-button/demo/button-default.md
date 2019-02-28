---
order: 2
title:
  zh-CN: 默认按钮
  en-US: Default
---

## zh-CN

默认按钮。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

````jsx
import { Row, Col, Button } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={6}>
        <Button minWidth size="large" subtitle="患者详情">查看</Button>
        <Button minWidth size="large">不再提醒</Button>
      </Col>
      <Col span={8}>
        <Button minWidth>取消预约</Button>
        <Button minWidth>取消全选</Button> <br />
        <Button minWidth>关闭</Button>
        <Button minWidth>取消</Button>
      </Col>
      <Col span={4}>
        <Button minWidth>修改配药</Button> <br />
        <Button minWidth>打印配药单</Button> <br />
        <Button minWidth>取消随访</Button> <br />
        <Button minWidth>修改</Button> 
      </Col>
      <Col span={6}>
        <Button minWidth size="small">取消</Button> <br />
        <Button minWidth size="small">退卡</Button>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
