import C from './constants.js';
import { combineReducers } from 'redux';


export const is_login  = (state={}, action) => {
    if(action.type == C.LOGIN_STATUS){
        return false;
    }

    return state;
}


export const error = (state ={}, action) => {
    if(action.type == C.ERROR){
        console.log("from reducers");
        return true;
    }
    return state;
}


export const feedLists = (state={}, action) => {
    if(action.type == C.FEED_POSTS){
        return Object.assign({},state,{
            posts:action.payload.toJSON()
        })
    }
    return state;
}


export const emptyList = (state={},action) => {
    if(action.type == C.EMPTY_LIST){
        return [...state,state.posts=[]];
    }

    return state;
}


export default combineReducers({
  is_login,
  error,
  feedLists,
  emptyList
  })