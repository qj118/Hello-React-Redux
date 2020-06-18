# 工程简述

[教程](https://www.bilibili.com/video/BV1oW41157DY?p=38)

## src-counter1-react

用纯 react 完成的 counter 计数功能。

## src-counter2-redux

用 redux 完全接管 state 的管理。
- redux 文件夹
  1. action-types 包含所有 action 的 type 类型；
  2. actions 包含所有 action 的工程函数，返回 {type, data} 对象；
  3. reducers 包含所有 reducer 函数的模块；
  4. store 创建 store 绑定 reducer 函数。
  
## src-counter3-react-redux

用 react-redux 插件完成 react 组件与 redux 的解耦。
- 使用 Provider，使包含在内的组件都共享 store；
- 使用 connect 将 store 的 state 和 dispatch(action) 作为 props 传递给组件，并将其封装成容器组件。

## src

使用 redux 插件 redux-thunk 来实现异步操作，即将异步操作也封装在 actions 中。
- 使用中间件需要用其构造 store，并使用 redux API-applyMiddleware。