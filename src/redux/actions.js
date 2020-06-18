/*
    包含所有的 action creator(action 的工厂函数)
 */
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from "./action-types";
// 同步添加
export const addComment = (comment) =>({type: ADD_COMMENT, data: comment});
// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index});
// 同步接收后台 comments
const receiveComment = (comments) => ({type: RECEIVE_COMMENTS, data: comments});

// 异步从后台获取 comments
export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const Comments = [
                {username: 'Demon', content: '老田该出专辑了！'},
                {username: 'Hebe', content: 'S.H.E不发我不发！'},
            ];
            dispatch(receiveComment(Comments));
        }, 1000);
    }
}