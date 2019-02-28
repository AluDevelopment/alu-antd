---
order: 0
title:
  zh-CN: 主按钮
  en-US: primary
---

## zh-CN

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antd.

````jsx
import { Row, Col, Button, Icon } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={6}>
        <Button minWidth type="primary" size="large">发药</Button> <br/>
        <Button minWidth type="primary" size="large">立即随访</Button>
        <Button minWidth type="primary" size="large">收费</Button> <br/>
        <Button minWidth type="primary" size="large" subtitle="输液执行单">打印</Button>
        <Button minWidth type="primary" size="large" subtitle="预约信息">完善</Button>
      </Col>
      <Col span={12}>
        <Button minWidth type="primary">收费完成</Button>
        <Button minWidth type="primary">不再提醒</Button> <br/>
        <Button minWidth type="primary">保存</Button>
        <Button minWidth type="primary">收费</Button> <br/>
        <Button minWidth type="primary">收费</Button>
        <Button minWidth type="primary">现场预约</Button>
        <Button minWidth type="primary">立即随访</Button> <br/>
        <Button minWidth type="primary">确认</Button>
        <Button minWidth type="primary">新增随访</Button>
        <Button minWidth type="primary">发药完成</Button> <br/>
        <Button minWidth type="primary">支付宝</Button>
        <Button minWidth type="primary">登记就诊</Button>
        <Button minWidth type="primary">打印就诊单</Button> <br/>
        <Button minWidth type="primary" size="xlarge">保存</Button>
      </Col>
      <Col span={6}>
        <Button minWidth type="primary" size="small">保存</Button> <br/>
        <Button minWidth type="primary" size="small">打印</Button> <br/>
        <Button minWidth type="primary" size="small" icon="vip">储值卡</Button> <br/>
        <Button minWidth type="primary" size="small" icon="scan">识别卡</Button>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
