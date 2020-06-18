import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter } from './reducers';

// 生成一个 store 对象
const store = createStore(counter,
    composeWithDevTools(applyMiddleware(thunk))
); // 内部会第一次调用 reducer 函数得到初始 state
console.log(store, store.getState());

export default store