import C from './constants.js';
import { combineReducers } from 'redux';


export const is_login  = ( state=false, action ) => {
    if(action.type == C.LOGIN_STATUS){
        return true;
    }
    return state;
}

export const error = ( state ={}, action ) => {
    if(action.type == C.ERROR){
        return true;
    }
    return state;
}

export const post = ( state=null, action)=> {
    if(action.type == C.SET_WEB_URL){
        state = action.url
        return state;
    }
    return state;
}

export const posts = ( state={postArray:[]}, action ) => {
    switch (action.type) {
        case C.FETCH_POSTS :
        return Object.assign({},state,{
            postArray:[action.payload]
        });
        break;
        case C.EMPTY_LIST :
        return Object.assign({},state,{
            postArray:[]
        });
        break;
        default :
        return state;

}
}

export default combineReducers({
  is_login,
  error,
  posts,
  post
  })