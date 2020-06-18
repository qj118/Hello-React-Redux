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

## src-counter4-redux-async

使用 redux 插件 redux-thunk 来实现异步操作，即将异步操作也封装在 actions 中。
- 使用中间件需要用其构造 store，并使用 redux API-applyMiddleware。
- 在该实例中还应用了 redux-devtools-extension，用于 chrome 调试。

## src-comment1-react

用纯 react 完成的评论添加、列表、删除功能，模拟从后台获取数据。

## src

用 react-redux 实现评论添加、列表、删除功能，模拟从后台获取数据。
整理一下修改的步骤：
1. 在 index.js 中用 Provider 包裹整个 App，并传入 store；
2. 将 App 组件放入 container 中，根据 App 中的 state 和相关函数确定 redux/actions 中获得的函数；
3. 在 App 组件最后用 connect 修饰 App 并暴露出来；
4. 编写 action-types，将所有action的type名称常量放入其中；
5. 编写 actions，即将其作为 props 传递给 App 的函数，这些函数返回的一定是一个 action 对象，所以也被称为 action 工厂函数；
6. 编写 reducers，reducer 是通过参数中 action 的 type 属性（switch语句）来决定下一步 state 状态如何改变。
**注意**：在 reducer 函数中不可直接改变 state，只能返回新的状态。
7. 用 reducer 和异步的中间件（thunk）来构建 store。 