---
order: 4
title:
  zh-CN: 输入框
  en-US: input
---

## zh-CN

输入框。

## en-US

Input.

````jsx
import { AutoComplete, Input, InputNumber, Icon } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value?['王老二','王老三','王老四','王老五','王老六']:[],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 460 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
      >
        <Input
          allowClear
          style={{ width: 460 }}
          placeholder="请输入药品名称"
          prefix={<Icon type="search" />}
        />
      </AutoComplete>
    );
  }
}

ReactDOM.render(
  <div>
    <Input
      allowClear
      style={{ width: 460 }}
      placeholder="请输入药品名称"
      prefix={<Icon type="search" />}
    />
    <br/> <br/>
    <Complete/>
    <br/> <br/>
    <InputNumber defaultValue={10} />
  </div>,
  mountNode
);
````
