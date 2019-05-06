---
order: 1
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

```jsx
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class App extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
             <Radio value={1}>A</Radio>
             <Radio value={2}>B</Radio>
             <Radio value={3}>C</Radio>
             <Radio value={4}>D</Radio>
           </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup groupBox={true} onChange={this.onChange} value={this.state.value}>
             <Radio value={1}>A</Radio>
             <Radio value={2}>B</Radio>
             <Radio value={3}>C</Radio>
             <Radio value={4}>D</Radio>
           </RadioGroup>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
