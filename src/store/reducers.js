import C from './constants.js';
import { combineReducers } from 'redux';


export const is_login  = ( state=null, action ) => {
    if(action.type == C.LOGGED_IN){
        console.log(action)
        state = true;
        return state
    }
    if(action.type == C.LOGGED_OUT){
        state = false;
        return state;
    }
    return state;
}

export const fromStore = (state="hello" , action) => {
    if(action.type == "GREET"){
        state = action.payload;
        return state;
    }
    return state
}


export const error = ( state ={}, action ) => {
    if(action.type == C.ERROR){
        return true;
    }
    return state;
}

export const user = ( state={}, action ) => {
    if(action.type == C.SET_USER_DATA){
        console.log(action)
        return Object.assign({},state,{
            state:action.payload
        })
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


export const is_fetching = ( state=false, action ) =>{
    switch (action.type) {
        case C.IS_FETCHING :
        return true; 
        break;
        case C.IS_FETCHED :
        return false;
        break;
        default : return state
    }
}
export default combineReducers({
  is_login,
  error,
  posts,
  post,
  is_fetching,
  user,
  fromStore
  })