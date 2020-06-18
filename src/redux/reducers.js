/*
    包含所有 reducer函数 （根据老的 state 和 action 返回一个新的 state）
 */

import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from "./action-types";

const initComments = [];
export function comments(state = initComments, action){
    switch(action.type){
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data);
        case RECEIVE_COMMENTS:
            return action.data;
        default:
            return state;
    }
}