import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component{

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    }

    handleIncrement = () => {
        // 获取增加的基数
        const number = this.select.value * 1;
        // 调用 store 的方法更新状态
        this.props.increment(number);
    }

    handleDecrement = () => {
        const number = this.select.value * 1;
        this.props.decrement(number);
    }

    incrementIfOdd = () => {
        const number = this.select.value * 1;
        const {count} = this.props;
        if(count % 2 !== 0){
            this.props.increment(number);
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1;
        setTimeout(() =>
            this.props.increment(number),
            1000);
    }

    render(){
        const  { count }  = this.props;
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