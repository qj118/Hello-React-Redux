import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app";
import store from "./redux/store";

function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render(); // 初始化渲染

store.subscribe(render); // 订阅监听，如果 store 中的 state 发生变化则重新渲染页面
