---
category: Components
subtitle: 头部
type: 布局
cols: 1
title: Header
---

公共头部。

## API

```html
interface MenusItem {
  name: string, // 名称
  dev: string, // 开发环境的跳转url
  test: string, // 测试环境的跳转url
  prod: string, // 正式环境的跳转url
}
```

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- |
| logoCls | logo的class类名 | string | - | - |
| logoStyle | 设置logo的样式 | CSSProperties | - | - |
| logoUrl | logo的url | string | 内置的阿鹿logo | - |
| contentCls | 菜单的class类名 | string | - | - |
| right | 右侧自定义组件 | string\|ReactNode | - | - |
| rightCls | 右侧组件的class类名 | string | - | - |
| env | 区分环境变量，跳转到不同的站点 | string| 'dev' | 'dev' \| 'test' \| 'prod' |
| menus | 菜单列表 | array<object> | MenusItem | - | - |