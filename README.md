# 工程简述

## src-counter1-react

用纯 react 完成的 counter 计数功能。

## src-couter2-redux

用 redux 完全接管 state 的管理。
- redux 文件夹
  1. action-types 包含所有 action 的 type 类型；
  2. actions 包含所有 action 的工程函数，返回 {type, data} 对象；
  3. reducers 包含所有 reducer 函数的模块；
  4. store 创建 store 绑定 reducer 函数。
  
## src

用 react-redux 插件完成 react 组件与 redux 的解耦。
- 使用 Provider，使包含在内的组件都共享 store；
- 使用 connect 将 store 的 state 和 dispatch(action) 作为 props 传递给组件，并将其封装成容器组件。