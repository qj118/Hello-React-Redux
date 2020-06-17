import React, { Component } from 'react';

export default class App extends Component{

    state = {
        count: 0,
    }

    handleIncrement = () => {
        // 获取增加的基数
        const number = this.select.value * 1;
        // 计算 count 值
        const count = this.state.count;
        // 更新状态
        this.setState({
            count: count + number,
        });
    }

    handleDecrement = () => {
        const number = this.select.value * 1;
        const count = this.state.count;
        this.setState({
            count: count - number,
        });
    }

    incrementIfOdd = () => {
        const number = this.select.value * 1;
        const count = this.state.count;
        if(count % 2 !== 0){
            this.setState({
                count: count + number,
            });
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1;
        const count = this.state.count;
        setTimeout(() => {
            this.setState({
                count: count + number
            });
        }, 1000);
    }

    render(){
        const { count } = this.state;
        return (
            <div>
                <p>Click {count} Times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleDecrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        );
    }
}