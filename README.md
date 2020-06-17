# 工程简述

## src-counter1-react

用纯 react 完成的 counter 计数功能。

## src

用 redux 完全接管 state 的管理。
- redux 文件夹
 + action-types 包含所有 action 的 type 类型；
 + actions 包含所有 action 的工程函数，返回 {type, data} 对象；
 + reducers 包含所有 reducer 函数的模块；
 + store 创建 store 绑定 reducer 函数。