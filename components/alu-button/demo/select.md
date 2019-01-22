---
order: 5
title:
  zh-CN: 选择框
  en-US: select
---

## zh-CN

选择框。

## en-US

Select.

````jsx
import { Row, Col, Radio, Checkbox, Select } from 'antd';

const RadioGroup = Radio.Group;

ReactDOM.render(
  <div>
    <Row>
      <Col span={2}>
        <Radio />
      </Col>
      <Col span={2}>
        <Checkbox />
      </Col>
    </Row>
    <Row style={{marginTop:16}}>
      <Col span={4}>
        <RadioGroup border>
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </RadioGroup>
      </Col>
    </Row>
  </div>,
  mountNode
);
````
